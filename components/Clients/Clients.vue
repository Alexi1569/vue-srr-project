<template>
  <section class="s-clients">
    <div class="container">
      <div class="s-clients__wrapper">
        <Caption
          :caption="clients.caption"
          view="SECTION_CLIENTS"
        />
        <ClientItems
          :clients="clients.items"
        />

      </div>
    </div>
  </section>
</template>

<script>
  import Caption from '~/components/Shared/Caption.vue'
  import ClientItems from '~/components/Clients/ClientItems.vue'

  export default {
    components: {
      Caption,
      ClientItems
    },
    props: {
      clients: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style>
  .s-clients {
    color: #303030;
    padding-top: 8.125rem;
  }

  .s-clients__logotypes {
    padding-top: 4.375rem;
    margin-bottom: -2.5rem;
  }

  @media screen and (max-width: 1199px) {
    .s-clients {
      padding-top: 6.8rem;
    }
  }

  @media screen and (max-width: 767px) {
    .s-clients {
      padding-top: 6rem;
    }
  }
</style>
