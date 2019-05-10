<template>
  <div class="p-portfolio-item">
    <div class="container">
      <Breadcrumbs
        :title="pageContent.pageTitle"
      />
      <div class="p-services__top">
        <Caption
          view="PAGE_PORTFOLIO_ITEM"
          :caption="pageContent.caption"
        />
      </div>
      <div class="p-portfolio-item__content">
        <div class="p-portfolio-item__top">
          <div class="p-portfolio-item__top-img">
            <img :src="pageContent.top.img.src" :alt="pageContent.top.img.alt" />
          </div>
          <div class="p-portfolio-item__top-items">
            <Row
              v-for="item, i in pageContent.top.items"
              :key="i"
              :item="item"
            />
          </div>
        </div>
        <div class="p-portfolio-item__info">
          <div class="p-portfolio-item__info-img">
            <img :src="pageContent.info.img.src" :alt="pageContent.info.img.alt">
          </div>
          <div class="p-portfolio-item__info-items">
            <Row
              v-for="item, i in pageContent.info.items"
              :key="i"
              :item="item"
              type="SMALL"
            />
          </div>
        </div>
        <div class="p-portfolio-item__info-before">
          <img
            v-for="item, i in pageContent.beforeImages"
            :key="i"
            :src="item.src"
            :alt="item.alt"
          />
        </div>
        <div class="p-portfolio-item__info-done">
          <Row
            v-for="item, i in pageContent.done"
            :key="i"
            :item="item"
          />
        </div>
        <div class="p-portfolio-item__info-after">
          <img
            v-for="item, i in pageContent.afterImages"
            :key="i"
            :src="item.src"
            :alt="item.alt"
          />
        </div>
      </div>
      <div
        class="p-portfolio-item__controls flex jc-c ai-c"
        v-in-viewport
      >
        <Arrow
          :arrow="pageContent.controls.prev"
          type="PREV"
        />
        <Counter
          :numbers="pageContent.controls.numbers"
        />
        <Arrow
          type="NEXT"
          :arrow="pageContent.controls.next"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import Breadcrumbs from '~/components/Shared/Breadcrumbs'
  import Caption from '~/components/Shared/Caption'
  import PortfolioRow from '~/components/Portfolio/PortfolioRow'
  import PortfolioArrow from '~/components/Portfolio/PortfolioArrow'
  import PortfolioCounter from '~/components/Portfolio/PortfolioCounter'

  export default {
    head() {
      return {
        title: this.pageContent.pageTitle
      }
    },
    components: {
      Caption,
      Breadcrumbs,
      Row: PortfolioRow,
      Arrow: PortfolioArrow,
      Counter: PortfolioCounter
    },
    computed: {
      pageContent() {
        return this.$store.state.portfolioInnerPage[this.$route.params.id];
      }
    }
  }
</script>

<style>
  .p-portfolio-item {
    color: #303030;
    padding-bottom: 4.0625rem;
  }

  .p-portfolio-item__content {
    margin-top: 2.125rem;
  }

  .p-portfolio-item img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
  }

  .p-portfolio-item__top-items {
    padding: 4.0625rem 0;
  }

  .p-portfolio-item__info-items {
    padding: 3.75rem 0;
  }

  .p-portfolio-item__info-done {
    padding: 5.625rem 0;
  }

  .p-portfolio-item__controls {
    margin-top: 3.75rem;
    opacity: 0;
    transition: .45s all ease-in;
    transform: translateY(30%);
  }

  .p-portfolio-item__controls.in-viewport {
    opacity: 1;
    transform: translateY(0%);
  }

  .p-portfolio-item__controls.above-viewport {
    transform: translateY(0%) !important;
    opacity: 1 !important;
    transition: none !important;
  }

  @media screen and (max-width: 450px) {
    .p-portfolio-item__controls {
      justify-content: space-between;
    }
  }
</style>
