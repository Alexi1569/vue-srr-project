<template>
  <section id="s-services" class="s-services">
    <div class="container">
      <Caption
        :caption="services.caption"
        view="SECTION_SERVICES"
      />

      <div class="s-services__content flex fw-w jc-sb ai-fs">
        <Block
          :block="blocksCalc.web"
          v-in-viewport
          view="SECTION_SERVICES"
        />
        <Presentation
          :presentation="services.presentation"
          v-in-viewport
          view="SECTION_SERVICES"
        />
        <Block
          :block="blocksCalc.seo"
          v-in-viewport
          view="SECTION_SERVICES"
        />
        <Block
          :block="blocksCalc.smm"
          v-in-viewport
          view="SECTION_SERVICES"
        />
      </div>
    </div>
  </section>
</template>

<script>
  import Caption from '~/components/Shared/Caption.vue'
  import ServicesPresentation from '~/components/Services/ServicesPresentation.vue'
  import ServicesBlock from '~/components/Services/ServicesBlock.vue'

  export default {
    components: {
      Caption,
      Presentation: ServicesPresentation,
      Block: ServicesBlock
    },
    props: {
      services: {
        type: Object,
        required: true
      }
    },
    computed: {
      blocksCalc() {
        return this.extend(
          {},
          this.services.blocks,
          this.blocks
        );
      }
    },
    data() {
      return {
        blocks: {
          web: {
            btn: {
              type: 'link',
              iconPosition: 'before',
            },
          },
          seo: {
            btn: {
              type: 'link',
              iconPosition: 'before',
            },
          },
          smm: {
            btn: {
              type: 'link',
              iconPosition: 'before',
            },
          }
        }
      }
    }
  }
</script>

<style>
  .s-services {
    color: #303030;
    padding: 4.37500rem 0 8.125rem;
  }

  .s-services .caption {
    margin-bottom: 3.75rem;
  }

  .s-services__content {
    padding-top: 4.0625rem;
    margin-bottom: -4.375rem;
  }

  @media screen and (max-width: 1500px) {
    .s-services__content {
      padding-top: 3.8rem;
    }
  }

  @media screen and (max-width: 1300px) {
    .s-services__content {
      padding-top: 3.5rem;
    }
  }

  @media screen and (max-width: 1199px) {
    .s-services {
      padding: 6.8rem 0;
    }
  }

  @media screen and (max-width: 991px) {
    .s-services__content {
      padding-top: 3rem;
    }
  }

  @media screen and (max-width: 767px) {
    .s-services__content {
      padding-top: 6%;
    }

    .s-services {
      padding: 6rem 0;
    }
  }


</style>
