<template>
  <div class="p-services">
    <div class="container">
      <Breadcrumbs
        :title="pageContent.pageTitle"
      />
      <div class="p-services__top">
        <Caption
          view="PAGE_SERVICES"
          :caption="pageContent.caption"
        />
        <TitleImg
          view="PAGE_SERVICES"
          v-in-viewport
          :img="pageContent.img"
        />
      </div>

      <section class="p-services__items flex fw-w ai-s jc-fs">
        <Block
          :block="pageContent.blocks.web"
          v-in-viewport
          view="PAGE_SERVICES"
        />
        <Block
          :block="pageContent.blocks.seo"
          v-in-viewport
          view="PAGE_SERVICES"
        />
        <Block
          :block="pageContent.blocks.smm"
          v-in-viewport
          view="PAGE_SERVICES"
        />
        <Block
          :block="pageContent.blocks.ppc"
          v-in-viewport
          view="PAGE_SERVICES"
        />
        <Block
          :block="pageContent.blocks.marketing"
          v-in-viewport
          view="PAGE_SERVICES"
        />
      </section>
    </div>

    <DiscussProject
      view="PAGE_SERVICES"
    />
  </div>

</template>

<script>
  import Breadcrumbs from '~/components/Shared/Breadcrumbs.vue'
  import Caption from '~/components/Shared/Caption.vue'
  import DiscussProject from '~/components/Shared/DiscussProject'
  import ServicesBlock from '~/components/Services/ServicesBlock.vue'
  import ArtMarksTitleImg from '~/components/Shared/ArtMarksTitleImg.vue'

  export default {
    head () {
      return {
        title: this.pageContent.pageTitle
      }
    },
    computed: {
      pageContent() {
        return this.$store.state.servicesPage;
      }
    },
    components: {
      Breadcrumbs,
      Caption,
      Block: ServicesBlock,
      DiscussProject,
      TitleImg: ArtMarksTitleImg
    }
   }
</script>

<style>
  .p-services__top {
    padding-bottom: 2.5rem;
    position: relative;
  }

  .p-services__items {
    margin: 5rem 0 1.875rem;
  }

  .p-services {
    color: #333333;
  }

  @media screen and (max-width: 1199px) {
    .p-services__items {
      margin: 4.2rem 0 1.875rem;
    }

    .p-services__top {
      padding-bottom: 0;
    }
  }

  @media screen and (max-width: 991px) {
    .p-services__items {
      margin: 3.8rem 0 2.375rem;
    }

    .p-services__top {
      margin-top: 1.5rem;
    }
  }

</style>
