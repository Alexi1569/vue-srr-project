<template>
  <div :class="['phones__list', classObject]">
    <PhonesItem
      v-for="phone, i in phones"
      :key="i"
      :number="phone"
    />
  </div>
</template>

<script>
  import PhonesItem from '~/components/Shared/PhonesItem.vue'

  export default {
    props: {
      phones: {
        type: Array,
        required: true
      },
      view: {
        type: String,
        required: true
      }
    },
    components: {
      PhonesItem
    },
    computed: {
      classObject() {
        return {
          'header__phones': this.view === 'HEADER',
          'footer__phones': this.view === 'FOOTER',
          'sidebar-mobile__phones': this.view === 'SIDEBAR',
          'contacts__phones': this.view === 'PAGE_CONTACTS',
        }
      }
    }
  }
</script>

<style>
  .phones__list {
    letter-spacing: 0.025em;
    color: #333333;
    font-family: 'Futura PT medium';
    font-size: 0.9375em;
  }

  .phones__list a:hover {
    background: linear-gradient( 90deg, rgb(47,139,218) 0%, rgb(0,171,211) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .contacts__phones {
    font-size: 1em;
  }

  .header__phones {
    margin-right: 2.5rem;
  }

  .phones__list a {
    color: inherit;
    text-decoration: none;
    display: block;
  }
</style>

