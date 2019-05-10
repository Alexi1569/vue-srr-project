<template>
  <div class="body-wrapper">
    <MyCursor />
    <div
      class="flex fd-c ai-c jc-c wrapper"
    >
      <my-header
        :view="headerView"
      />
      <main class="center">
        <nuxt/>
      </main>
      <my-footer
        :view="footerView"
      />
    </div>
  </div>
</template>

<script>
import MyFooter from '~/components/Shared/Footer.vue'
import MyHeader from '~/components/Shared/Header.vue'
import Cursor from '~/components/Shared/Cursor'

export default {
  components: {
    MyHeader,
    MyFooter,
    MyCursor: Cursor
  },
  data() {
    return {
      headerView: '',
      footerView: '',
    }
  },
  mounted() {
    this.checkRoute();
    this.checkTouch();
  },
  watch: {
    '$nuxt.$route.name': function () {
      this.checkRoute();
    }
  },
  methods: {
    checkTouch() {
      if ('ontouchstart' in document.documentElement) {
        $('body').addClass('touch-device');
      } else {
        $('body').removeClass('touch-device');
      }
    },
    checkRoute() {
      switch($nuxt.$route.name) {
        case 'index':
          this.headerView = 'MAIN_PAGE';
          this.footerView = '';
          break;
        case 'services-category-item':
          this.footerView = 'PAGE_SERVICES_CATEGORY_INNER';
          this.headerView = '';
          break;
        case 'blog':
          this.footerView = 'PAGE_CONTACTS';
          this.headerView = '';
          break;
        case 'blog-id':
          this.footerView = 'PAGE_CONTACTS';
          this.headerView = '';
          break;
        case 'briefs':
          this.footerView = 'PAGE_CONTACTS';
          this.headerView = '';
          break;
        case 'portfolio-id':
          this.footerView = 'PAGE_CONTACTS';
          this.headerView = '';
          break;
        case 'about':
          this.footerView = 'PAGE_CONTACTS';
          this.headerView = '';
          break;
        case 'about-team':
          this.footerView = 'PAGE_CONTACTS';
          this.headerView = '';
          break;
        case 'about-awards':
          this.footerView = 'PAGE_CONTACTS';
          this.headerView = '';
          break;
        case 'about-office':
          this.footerView = 'PAGE_CONTACTS';
          this.headerView = '';
          break;
        case 'contacts':
          this.footerView = 'PAGE_CONTACTS';
          this.headerView = '';
          break;
        default:
          this.headerView = '';
          this.footerView = '';
          break;
      }
    }
  }
}
</script>

<style>
  .wrapper {
    padding-right: 7.5rem;
  }

  @media screen and (max-width: 650px) {
    .wrapper {
      padding-right: 0;
    }
  }

</style>
