<template>
  <div class="blog-similar">
    <Caption
      :caption="similar.caption"
      view="PAGE_BLOG_INNER_RIGHT"
    />
    <div class="blog-similar__items">
      <Item
        v-for="item, i in similar.items"
        :key="i"
        :item="item"
        view="PAGE_BLOG_INNER"
      />
    </div>
  </div>
</template>

<script>
  import Caption from '~/components/Shared/Caption'
  import BlogItem from '~/components/Blog/BlogItem'

  export default {
    components: {
      Caption,
      Item: BlogItem
    },
    props: {
      similar: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style>
  .blog-similar__items {
    margin-top: 2rem;
  }

  .blog-similar {
    margin-top: 4.6875rem;
    text-align: center;
  }
</style>
