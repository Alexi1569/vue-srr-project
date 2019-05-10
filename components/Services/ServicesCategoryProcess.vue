<template>
  <div class="services-category__process">
    <Caption
      :caption="process.caption"
      view="PAGE_SERVICES_CATEGORY_INNER_PROCESS"
    />

    <div class="services-category__process-items flex fw-w jc-sb ai-s">
      <CategoryItem
        view="PAGE_SERVICES_CATEGORY_PROCESS"
        v-for="item, i in process.items"
        :key="i"
        :item="item"
        v-in-viewport
      />
    </div>
  </div>
</template>

<script>
  import Caption from '~/components/Shared/Caption'
  import ServicesCategoryProcessItem from '~/components/Services/ServicesCategoryProcessItem'

  export default {
    props: {
      process: {
        type: Object,
        required: true
      },
    },
    components: {
      Caption,
      CategoryItem: ServicesCategoryProcessItem
    }
  }
</script>

<style>
  .services-category__process {
    padding-top: 7.5rem;
  }

  .services-category__process-items {
    padding-top: 3.75rem;
    margin-bottom: -2.5rem;
  }

  @media screen and (max-width: 900px) {
    .services-category__process-items {
      justify-content: flex-start;
    }
  }
</style>
