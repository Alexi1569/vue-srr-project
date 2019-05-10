<template>
  <section :class="['s-portfolio', classObject]">
    <div class="container">
      <Caption
        :caption="portfolio.caption"
        view="SECTION_PORTFOLIO"
      />
      <div class="s-portfolio__wrapper flex fw-w jc-sb ai-s">
        <PortfolioItem
          v-for="item, i in portfolio.items"
          :item="item"
          :key="i"
        />
      </div>

      <Button
        :btn="btnCalc"
        view="SECTION_PORTFOLIO"
      />
    </div>
  </section>
</template>

<script>
  import Caption from '~/components/Shared/Caption.vue'
  import Button from '~/components/Shared/Button.vue'
  import PortfolioItem from '~/components/Portfolio/PortfolioItem.vue'


  export default {
    components: {
      PortfolioItem,
      Caption,
      Button,
    },
    computed: {
      classObject() {
        return {
          's-portfolio__main': this.view === 'MAIN_PAGE',
          's-portfolio__services': this.view === 'PAGE_SERVICES_CATEGORY',
        }
      },
      btnCalc() {
        return {
          ...this.portfolio.btn,
          ...this.btn
        }
      },
    },
    data() {
      return {
        btn: {
          type: 'link',
          link: '/portfolio'
        },
      }
    },
    props: {
      portfolio: {
        type: Object,
        required: true,
      },
      view: {
        type: String,
        required: true
      }
    },
  }
</script>

<style>
  .s-portfolio {
    color: #303030;
    padding-top: 7.5rem;
  }

  .s-portfolio > .container {
    text-align: center;
  }

  .s-portfolio__wrapper {
    padding-top: 2.8125rem;
    text-align: left;
  }

  @media screen and (max-width: 1199px) {
    .s-portfolio {
      padding-top: 6.8rem;
    }
  }

  @media screen and (max-width: 767px) {
    .s-portfolio {
      padding-top: 6rem;
    }
  }


</style>
