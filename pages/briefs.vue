<template>
  <div class="p-briefs">
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
      <div class="p-briefs__items flex fw-w ai-s jc-fs">
        <Block
          view="PAGE_BRIEFS"
          :block="pageContent.briefs.web"
          v-in-viewport
        />
        <Block
          view="PAGE_BRIEFS"
          :block="pageContent.briefs.smm"
          v-in-viewport
        />
        <Block
          view="PAGE_BRIEFS"
          :block="pageContent.briefs.seo"
          v-in-viewport
        />
      </div>
    </div>
  </div>
</template>

<script>
  import Caption from '~/components/Shared/Caption'
  import Breadcrumbs from '~/components/Shared/Breadcrumbs'
  import ServicesBlock from '~/components/Services/ServicesBlock'

  export default {
    head() {
      return {
        title: this.pageContent.pageTitle
      }
    },
    components: {
      Breadcrumbs,
      Caption,
      Block: ServicesBlock
    },
    computed: {
      pageContent() {
        return this.$store.state.briefsPage;
      }
    },
  }
</script>

<style>
  .p-briefs__items {
    padding-top: 4.0625rem;
    margin-bottom: -5rem;
  }

  .p-briefs {
    padding-bottom: 4rem;
  }
</style>
