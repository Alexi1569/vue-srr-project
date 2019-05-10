<template>
  <div class="p-services-category">
    <div class="container">
      <Breadcrumbs
        :title="pageContent.pageTitle"
      />

      <div class="p-services-category__top">
        <Caption
          view="PAGE_SERVICES_CATEGORY"
          :caption="pageContent.caption"
        />
      </div>

      <section class="p-services-category__items flex fw-w jc-fs ai-s">
        <CategoryItem
          v-for="item, i in pageContent.items"
          :key="i"
          :item="item"
          view="PAGE_SERVICES_CATEGORY"
          v-in-viewport
        />
      </section>

      <div class="p-services-category--padding">
        <section class="p-services-category__process">
          <Caption
            view="PAGE_SERVICES_CATEGORY_PROCESS"
            :caption="pageContent.process.caption"
          />
          <div class="p-services-category__process-items flex jc-sb ai-s">
            <ProcessItem
              v-for="item, i in pageContent.process.items"
              :key="i"
              :item="item"
              view="PAGE_SERVICES_CATEGORY_PROCESS"
              v-in-viewport
            />
          </div>
        </section>


        <div class="p-services-category__video">
          <Video
            view="PAGE_SERVICES_CATEGORY"
            :video="pageContent.video"
          />
        </div>

        <section class="p-services-category__technologies">
          <Caption
            view="PAGE_SERVICES_CATEGORY_TECHNOLOGIES"
            :caption="pageContent.technologies.caption"
          />
          <div class="p-services-category__technologies-items flex jc-c ai-s fw-w">
            <Tag
              v-for="item, i in pageContent.technologies.items"
              :key="i"
              :item="item"
              view="PAGE_SERVICES_CATEGORY_TECHNOLOGIES"
              v-in-viewport
            />
          </div>
        </section>
      </div>
    </div>
    <DiscussProject
      view="PAGE_SERVICES_CATEGORY"
    />
  </div>

</template>

<script>
  import Breadcrumbs from '~/components/Shared/Breadcrumbs.vue'
  import ArtMarksTitleImg from '~/components/Shared/ArtMarksTitleImg'
  import Caption from '~/components/Shared/Caption'
  import ServicesCategoryItem from '~/components/Services/ServicesCategoryItem'
  import ServicesProcessItem from '~/components/Services/ServicesProcessItem'
  import Tag from '~/components/Shared/Tag'
  import DiscussProject from '~/components/Shared/DiscussProject'
  import Video from '~/components/Shared/Video'

  export default {
    head () {
      return {
        title: this.pageContent.pageTitle
      }
    },
    components: {
      Breadcrumbs,
      TitleImg: ArtMarksTitleImg,
      Caption,
      CategoryItem: ServicesCategoryItem,
      ProcessItem: ServicesProcessItem,
      Tag,
      DiscussProject,
      Video
    },
    computed: {
      pageContent() {
        return Object.assign(
          {},
          this.$store.state.servicesCategoryPage,
          {
            items: [
              ...this.$store.state.servicesCategoryPage.items.map((item, i) => {
                return this.extend(
                  {},
                  item,
                  {
                    btn: this.extend(
                      {},
                      item.btn,
                      this.itemsBtn
                    )
                  }
                );
              })
            ]
          }
        );
      }
    },
    data() {
      return {
        itemsBtn: {
          type: 'link',
          iconPosition: 'before',
        }
      }
    }
  }
</script>

<style>
  .p-services-category {
    color: #333333;
  }

  .plyr__poster {
    -webkit-background-size: cover;
    background-size: cover;
  }
  
  .p-services-category__items {
    margin-top: 5rem;
    margin-bottom: -7.5rem;
  }

  .p-services-category__process,
  .p-services-category__technologies,
  .p-services-category__video {
    padding-top: 7.5rem;
  }

  .p-services-category--padding {
    padding: 0 15.2%;
  }

  .p-services-category__process-items {
    margin: 3.4375rem -1% 0;
  }

  .p-services-category__technologies-items {
    margin: -7px 0;
    padding-top: 3.75rem;
  }

  @media screen and (max-width: 1600px) {
    .p-services-category--padding {
      padding: 0 10%;
    }
  }

  @media screen and (max-width: 1500px) {
    .p-services-category--padding {
      padding: 0 6%;
    }
  }

  @media screen and (max-width: 1250px) {
    .p-services-category--padding {
      padding: 0 2%;
    }
  }

  @media screen and (max-width: 1199px) {
    .p-services-category__items {
      margin-bottom: -6.5rem;
    }

    .p-services-category__technologies-items {
      margin: -6px 0;
    }

    .p-services-category__process,
    .p-services-category__technologies,
    .p-services-category__video {
      padding-top: 6.5rem;
    }

    .p-services-category--padding {
      padding: 0;
    }
  }

  @media screen and (max-width: 991px) {
    .p-services-category__items {
      margin-bottom: -5rem;
    }

    .p-services-category__process,
    .p-services-category__technologies,
    .p-services-category__video {
      padding-top: 5rem;
    }

    .p-services-category__process-items {
      margin-left: 0;
      margin-right: 0;
      flex-wrap: wrap;
      margin-bottom: -3rem;
    }
  }

  @media screen and (max-width: 767px) {
    .p-services-category__items {
      margin-bottom: -4rem;
    }

    .p-services-category__technologies-items {
      margin: -5px 0;
      padding-top: 2.9rem;
    }

    .p-services-category__process,
    .p-services-category__technologies,
    .p-services-category__video {
      padding-top: 4rem;
    }
  }

  @media screen and (max-width: 500px) {
    .p-services-category__technologies-items {
      margin: -4px 0;
    }
  }
</style>
