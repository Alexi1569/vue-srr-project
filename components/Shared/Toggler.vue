<template>
  <div :class="['toggler-item', classObject]">
    <div v-in-viewport class="toggler-item__inner">
      <div class="toggler-item__top" @click="toggleItem">
        <slot name="top">

        </slot>
      </div>

      <div :style="{maxHeight: itemHeight}" class="toggler-item__bottom">
        <slot name="bottom">

        </slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.maxHeight = `${this.$el.getElementsByClassName('toggler-item__bottom')[0].scrollHeight}px`;
    },
    props: {
      view: {
        type: String,
        required: true
      }
    },
    computed: {
      itemHeight() {
        if (this.isOpened) {
          return this.maxHeight;
        } else {
          return '';
        }
      },
      classObject() {
        return {
          'opened': this.isOpened,
          'faq__item': this.view === 'PAGE_SERVICES_FAQ'
        }
      }
    },
    data() {
      return {
        isOpened: false,
        maxHeight: ''
      }
    },
    methods: {
      toggleItem() {
        this.isOpened = !this.isOpened;
      }
    }
  }
</script>

<style>
  .toggler-item.opened .toggler-item__bottom {
    opacity: 1;
  }

  .toggler-item__top {
    cursor: pointer;
  }

  .faq__item .toggler-item__inner {
    opacity: 0;
    transform: translateX(-25%);
    transition: .9s all cubic-bezier(.19,1,.22,1);
  }

  .faq__item .toggler-item__inner.in-viewport {
    opacity: 1;
    transform: translateX(0%);
  }

  .faq__item .toggler-item__inner.above-viewport {
    transform: translateX(0%) !important;
    opacity: 1 !important;
    transition: none !important;
  }

  .toggler-item__bottom {
    transition: all 0.3s ease-out;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
  }
</style>
