<template>
  <div class="p-blog">
    <div class="container">
      <Breadcrumbs
        :title="pageContent.pageTitle"
      />
      <div class="p-services__top">
        <Caption
          view="PAGE_BLOG"
          :caption="pageContent.caption"
        />
        <div v-in-viewport class="p-blog__filter flex fw-w jc-sb ai-fe">
          <Select
            :select="pageContent.select"
            view="PAGE_BLOG"
          />
          <Search
            view="PAGE_BLOG"
            :input="pageContent.search"
          />
        </div>
      </div>
      <div class="p-blog__items flex fw-w ai-s jc-fs">
        <BlogItem
          v-for="item, i in pageContent.items"
          :key="i"
          :item="item"
          view="PAGE_BLOG"
          v-in-viewport
        />
      </div>

      <Button
        :btn="pageContent.btn"
        view="PAGE_BLOG"
      />
    </div>
  </div>
</template>

<script>
  import Caption from '~/components/Shared/Caption'
  import Breadcrumbs from '~/components/Shared/Breadcrumbs'
  import Search from '~/components/Blog/Search'
  import Select from '~/components/Shared/Select'
  import Button from '~/components/Shared/Button'
  import BlogItem from '~/components/Blog/BlogItem'

  import cyrillicToTranslit from 'cyrillic-to-translit-js'

  export default {
    components: {
      Caption,
      Breadcrumbs,
      Search,
      Select,
      BlogItem,
      Button
    },
    head() {
      return {
        title: this.pageContent.pageTitle
      }
    },
    computed: {
      pageContent() {
        return this.extend(
          {},
          this.$store.state.blogPage,
          {
            btn: Object.assign(
              {},
              this.$store.state.blogPage.btn,
              this.btn
            )
          },
        )
      }
    },
    data () {
      return {
        btn: {
          type: 'button',
        }
      }
    }
  }
</script>

<style>
  .p-blog {
    color: #333333;
    padding-bottom: 4.375rem;
  }

  .p-blog__filter {
    padding: 2rem 0 2.8125rem;
    transition: .8s all cubic-bezier(.19,1,.22,1);
    opacity: 0;
    transform: translateY(30%);
  }

  .p-blog__filter.in-viewport {
    opacity: 1;
    transform: translateY(0%);
  }

  .p-blog__filter.above-viewport {
    transform: translateY(0%) !important;
    opacity: 1 !important;
    transition: none !important;
  }

  .p-blog__items {
    margin-bottom: -3.75rem;
  }

  .p-blog > .container {
    text-align: center;
  }

  @media screen and (max-width: 767px) {
    .p-blog {
      padding-bottom: 2.8rem;
    }
  }
</style>
