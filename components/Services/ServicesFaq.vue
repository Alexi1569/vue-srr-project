<template>
  <section class="p-services-item__faq">
    <Caption
      view="PAGE_SERVICES_ITEM_FAQ"
      :caption="faq.caption"
    />

    <div class="p-services-item__faq-content flex jc-sb ai-fs">
      <div class="p-services-item__faq-left">
        <FaqItem
          v-for="item, i in faq.questions"
          :key="i"
          :item="item"
        />
      </div>
      <div class="p-services-item__faq-right">
        <Video
          view="PAGE_SERVICES_ITEM"
          :video="faq.video"
        />
      </div>
    </div>
  </section>
</template>

<script>
  import Caption from '~/components/Shared/Caption'
  import Video from '~/components/Shared/Video'
  import ServicesFaqItem from '~/components/Services/ServicesFaqItem'

  export default {
    components: {
      Caption,
      FaqItem: ServicesFaqItem,
      Video
    },
    props: {
      faq: {
        type: Object,
        require: true
      }
    }
  }
</script>

<style>
  .p-services-item__faq {
    padding-top: 7.5rem;
  }

  .p-services-item__faq-content {
    padding-top: 3.75rem;
  }

  .p-services-item__faq-left {
    width: 50.7%;
  }

  .p-services-item__faq-right {
    width: 42%;
  }

  @media screen and (max-width: 1199px) {
    .p-services-item__faq-right {
      order: 1;
      width: 60%;
      margin-left: auto;
      margin-right: auto;
    }

    .p-services-item__faq-content {
      flex-wrap: wrap;
    }

    .p-services-item__faq-left{
      order: 2;
      width: 100%;
      margin-top: 3.2rem;
    }

    .p-services-item__faq-content {
      padding-top: 2.5rem;
    }
  }

  @media screen and (max-width: 900px) {
    .p-services-item__faq-right {
      width: 78%;
    }
  }

  @media screen and (max-width: 500px) {
    .p-services-item__faq-right {
      width: 100%;
    }
  }
</style>
