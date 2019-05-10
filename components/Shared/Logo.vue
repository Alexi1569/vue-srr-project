<template>
  <nuxt-link to="/" :class="['logo', classObject]" v-html="logo">

  </nuxt-link>
</template>

<script>
  export default {
    computed: {
      classObject() {
        return {
          'header__logo': this.view === 'HEADER',
          'footer__logo': this.view === 'FOOTER'
        }
      }
    },
    props: {
      view: {
        type: String,
        required: true
      },
      logo: {
        type: String,
        required: true
      }
    }
  }
</script>

<style>
  .logo {
    display: inline-block;
    width: 8.87500rem;
  }
</style>
