<template>
  <div class="p-office">
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
      <no-ssr>
        <vue-gallery :images="images" :index="index" @close="index = null"></vue-gallery>
      </no-ssr>
      <div
        class="p-office__items"
        v-masonry
        transition-duration="0.45s"
        stagger="0.03s"
        item-selector=".p-office__item"
      >
        <no-ssr>
          <Office
            v-masonry-tile
            v-for="item, i in pageContent.items"
            :key="i"
            :item="item"
            @click.native="index = i"
          />
        </no-ssr>

      </div>
    </div>
  </div>
</template>

<script>
  import Breadcrumbs from '~/components/Shared/Breadcrumbs'
  import Caption from '~/components/Shared/Caption'
  import AboutOffice from '~/components/About/AboutOffice'

  export default {
    components: {
      Breadcrumbs,
      Caption,
      Office: AboutOffice
    },
    computed: {
      images() {
        return this.pageContent.items.map((item, i) => {
          return item.img;
        });
      },
      pageContent() {
        return this.$store.state.aboutOffice;
      }
    },
    data() {
      return {
        index: null,
      }
    },
    head() {
      return {
        title: this.pageContent.pageTitle
      }
    }
  }
</script>

<style>
  .p-office__items {
    margin: 2.8125rem 0 2.5rem;
  }

  @media screen and (max-width: 767px) {
    .p-office__items {
      margin: 2.8125rem -7.5px 2.5rem;
    }
  }
</style>
