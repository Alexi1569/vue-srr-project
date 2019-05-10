<template>
  <div class="blog-categories">
    <Caption
      :caption="categories.caption"
      view="PAGE_BLOG_INNER_RIGHT"
    />
    <div class="blog-categories__tags flex fw-w jc-fs ai-s">
      <Tag
        v-for="el, i in categories.items"
        :key="i"
        :item="el"
        @click.native="handleTagClick(el)"
        view="PAGE_BLOG"
      />
    </div>
  </div>
</template>

<script>
  import Tag from '~/components/Shared/Tag'
  import Caption from '~/components/Shared/Caption'

  export default {
    components: {
      Tag,
      Caption
    },
    props: {
      categories: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style>
  .blog-categories {
    background-color: #f0f5f7;
    text-align: center;
    padding: 1.6rem 1.5rem 2.25rem;
  }

  .blog-categories__tags {
    margin: 1.875rem -10px -10px 0;
  }

  .blog-categories .tag {
    margin-right: 10px;
    margin-bottom: 10px;
  }

  .blog-categories .tag {
    color: #5e5e5e;
    border-color: #a1a1a1;
  }

  .blog-categories .tag:hover {
    color: #fff;
    border-color: transparent;
  }
</style>
