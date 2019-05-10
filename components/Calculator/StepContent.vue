<template>
  <div :class="[`s-calculator__content s-calculator__parts`, classObject]">
    <div class="s-calculator__content-title">
      <slot name="title"></slot>
    </div>
    <div class="s-calculator__content-body flex ai-s jc-fs">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
  import Caption from '~/components/Shared/Caption.vue'

  export default {
    components: {
      Caption
    },
    computed: {
      classObject() {
        return `s-calculator__content--${this.step}`
      }
    },
    props: {
      step: {
        type: Number,
        required: true
      }
    },
  }
</script>

<style>
  .s-calculator__content {
    color: #333333;
  }

  .s-calculator__content--2 .s-calculator__step-item-title,
  .s-calculator__content--3 .s-calculator__step-item-title,
  .s-calculator__content--4 .s-calculator__step-item-title {
    text-transform: none;
    font-size: 1em;
    margin-top: .8rem;
  }

  .s-calculator__content-body {
    margin-left: -1.2rem;
  }

  .s-calculator__content--animated {
    opacity: 0 !important;
  }

  .s-calculator__content {
    transition: 1s all ease;
  }

  .s-calculator__content-title {
    line-height: 1.17647059rem;
    margin-bottom: 3.4rem;
    min-height: 5.3125rem;
  }
</style>
