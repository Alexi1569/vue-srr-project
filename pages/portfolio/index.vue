<template>
  <div class="p-portfolio">
    <div class="container">
      <Breadcrumbs
        :title="pageContent.pageTitle"
      />
      <div class="p-services__top">
        <Caption
          view="PAGE_BRIEFS"
          :caption="pageContent.caption"
        />
      </div>

      <div class="p-portfolio__filters flex fw-w ai-s jc-c">
        <Select
          :select="pageContent.directionSelect"
          view="PAGE_PORTFOLIO"
        />
        <Select
          :select="pageContent.typeSelect"
          view="PAGE_PORTFOLIO"
        />
      </div>

      <div class="p-portfolio__content">
        <div class="p-portfolio__wrapper flex fw-w jc-sb ai-s">
          <PortfolioItem
            v-for="item, i in pageContent.portfolio.items"
            v-if="i < 4"
            :item="item"
            view="PAGE_PORTFOLIO"
            :key="i"
          />
        </div>

        <Button
          view="PAGE_PORTFOLIO"
          :btn="pageContent.btn"
        />
      </div>
    </div>
    <DiscussProject
      view="PAGE_SERVICES_CATEGORY"
    />
  </div>
</template>

<script>
  import Caption from '~/components/Shared/Caption'
  import Breadcrumbs from '~/components/Shared/Breadcrumbs'
  import Select from '~/components/Shared/Select'
  import Button from '~/components/Shared/Button'
  import DiscussProject from '~/components/Shared/DiscussProject'
  import PortfolioItem from '~/components/Portfolio/PortfolioItem'

  export default {
    head() {
      return {
        title: this.pageContent.pageTitle
      }
    },
    data() {
      return {
        btn: {
          type: 'button',
        },
        directionSelect: {
          isOpened: false,
          selectedItem: null,
        },
        typeSelect: {
          isOpened: false,
          selectedItem: null,
        },
      }
    },
    computed: {
      pageContent() {
        return this.extend(
          {},
          this.$store.state.portfolioPage,
          {
            btn: Object.assign(
              {},
              this.$store.state.portfolioPage.btn,
              this.btn
            )
          },
          {
            directionSelect: Object.assign(
              {},
              this.$store.state.portfolioPage.directionSelect,
              this.directionSelect
            )
          },
          {
            typeSelect: Object.assign(
              {},
              this.$store.state.portfolioPage.typeSelect,
              this.typeSelect
            )
          },
        )
      }
    },
    components: {
      Caption,
      Breadcrumbs,
      Select,
      PortfolioItem,
      Button,
      DiscussProject
    }
  }
</script>

<style>
  .p-portfolio__filters {
    margin-top: 4.3rem;
    margin-bottom: -2rem;
  }

  .p-portfolio__content {
    text-align: center;
    margin-bottom: 7.5rem;
  }

  .p-portfolio__wrapper {
    margin-bottom: -8px;
  }
</style>
