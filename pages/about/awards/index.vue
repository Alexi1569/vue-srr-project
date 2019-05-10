<template>
  <div class="p-awards">
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

      <div class="p-awards__inner">
        <no-ssr>
          <vue-gallery :images="images" :index="index" @close="index = null"></vue-gallery>
        </no-ssr>
        <div v-in-viewport class="p-awards__items flex fw-w ai-s jc-fs">
          <no-ssr>
            <Certificate
              v-for="item, i in pageContent.certificates"
              :key="i"
              :item="item"
              @click.native="index = i"
            />
          </no-ssr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Breadcrumbs from '~/components/Shared/Breadcrumbs'
  import Caption from '~/components/Shared/Caption'
  import AboutCertificate from '~/components/About/AboutCertificate'

  export default {
    components: {
      Breadcrumbs,
      Caption,
      Certificate: AboutCertificate
    },
    computed: {
      images() {
        return this.pageContent.certificates.map((item, i) => {
          return item.img;
        });
      },
      pageContent() {
        return this.$store.state.aboutAwards;
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
  .p-awards__inner {
    padding-top: 2.5rem;
  }

  .p-awards__items {
    margin-bottom: -30px;
    opacity: 0;
    transition: .35s all ease-in;
    transform: translateY(10%);
  }

  .p-awards__items.in-viewport {
    opacity: 1;
    transform: translateY(0%);
  }

  .p-awards__items.above-viewport {
    transform: translateY(0%) !important;
    opacity: 1 !important;
    transition: none !important;
  }

  .p-awards {
    padding-bottom: 4.375rem;
  }

  @media screen and (max-width: 991px) {
    .p-awards__items {
      margin-bottom: -20px;
    }
  }
</style>
