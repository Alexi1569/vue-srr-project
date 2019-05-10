<template>
  <div :class="['footer__item', classObject]">
    <p v-show="item.title" class="footer__info-title">{{item.title}}</p>
    <template v-if="item.values">
      <p
        class="footer__info-value"
        v-for="el, i in item.values"
        :key="i"
        v-html="el"
        v-if="!el.type"
      ></p>
      <a
        class="footer__info-value"
        v-for="el, i in item.values"
        :key="i"
        :href="el.href"
        v-html="el.value"
        v-else-if="el.type === 'link'"
      ></a>
    </template>

    <slot v-else></slot>
  </div>
</template>

<script>
  export default {
    props: {
      view: {
        type: String,
        required: true
      },
      item: {
        type: Object,
        required: true
      }
    },
    computed: {
      classObject() {
        return {
          'footer__info-row': this.view === 'FOOTER_LEFT',
          'footer__contacts-item': this.view === 'FOOTER_CONTACTS',
          'contacts__block-item': this.view === 'PAGE_CONTACTS',
        }
      }
    }
  }
</script>

<style>
  .contacts__block-item {
    margin-top: 1.75rem;
  }

  .contacts__block-item:first-child {
    margin-top: 0;
  }
</style>
