{{{{raw}}}}
<template>
  <section class="p-error">
    <div class="container">
      <div class="p-error__img flex jc-c ai-c" v-html="pageContent.img"></div>
      <div class="p-error__text">
        <p class="p-error__title">{{this.pageContent.title}}</p>
        <div class="p-error__info" v-html="pageContent.info"></div>
        <NavList
          :menu="pageContent.menu"
          view="PAGE_ERROR"
        />
      </div>
    </div>
  </section>
  <!--<section class="container">-->
    <!--<h1 class="title">-->
      <!--{{ error.statusCode }}-->
    <!--</h1>-->
    <!--<h2 class="info">-->
      <!--{{ error.message }}-->
    <!--</h2>-->
    <!--<nuxt-link class="button" to="/" v-if="error.statusCode === 404">-->
      <!--Homepage-->
    <!--</nuxt-link>-->
  <!--</section>-->
</template>
{{{{/raw}}}}
<script>
  import NavList from '~/components/Shared/NavList'

export default {
  props: ['error'],
  components: {
    NavList
  },
  computed: {
    pageContent() {
      return this.$store.state.errorPage
    }
  },
}
</script>

<style>
  .p-error {
    padding: 3.75rem 0 6.25rem;
    border-bottom: 1px solid #e8e8e8;
    color: #161616;
    font-size: 1em;
  }

  .p-error__img svg {
    display: block;
    width: 100%;
    height: auto;
    margin: 0 auto;
  }

  .p-error__text {
    margin-top: 5.625rem;
    text-align: center;
  }

  .p-error__title {
    text-transform: uppercase;
    font-size: 1.5em;
    line-height: 1.2;
    font-family: 'Futura PT medium';
  }

  .p-error__info {
    font-size: 1em;
    font-family: 'Futura PT medium';
    line-height: 1.46666666667;
    margin-top: 1.75rem;
  }

  .p-error__info p {
    margin-bottom: 1rem;
  }

  .p-error__info *:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 767px) {
    .p-error__text {
      margin-top: 3rem;
    }

    .p-error__title {
      font-size: 1.2em;
    }

    .p-error {
      padding-bottom: 4rem;
    }
  }
</style>
