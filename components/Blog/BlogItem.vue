<template>
  <div :class="['blog__item', classObject]">
    <template v-if="view === 'PAGE_BLOG'">
      <nuxt-link :to="item.link" class="p-blog__item-img">
        <img :src="item.mainImg" alt="" ref="blogImg">
      </nuxt-link>

      <div class="p-blog__item-tags flex fw-w jc-fs ai-s">
        <Tag
          v-for="el, i in item.tags"
          :key="i"
          :item="el"
          @click.native="handleTagClick(el)"
          view="PAGE_BLOG"
        />
      </div>

      <div class="p-blog__item-info">
        <Date
          :date="item.date"
        />
        <Views
          :views="item.views"
        />
        <nuxt-link :to="item.link" class="p-blog__item-title">
          {{this.item.title}}
        </nuxt-link>
      </div>
    </template>
    <template v-else-if="view === 'PAGE_BLOG_INNER'">
      <div class="p-blog__item-inner flex ai-fs jc-fs">
        <nuxt-link :to="item.link" class="p-blog__item-img">
          <img :src="item.mainImg" alt="item.title">
        </nuxt-link>
        <div class="p-blog__item-inner-content">
          <nuxt-link :to="item.link" class="p-blog__item-title">
            {{this.item.title}}
          </nuxt-link>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  import Tag from '~/components/Shared/Tag'
  import BlogViews from '~/components/Blog/BlogViews'
  import BlogDate from '~/components/Blog/BlogDate'
  import VanillaTilt from 'vanilla-tilt'

  export default {
    components: {
      Tag,
      Views: BlogViews,
      Date: BlogDate
    },
    props: {
      item: {
        type: Object,
        required: true
      },
      view: {
        type: String,
        required: false
      }
    },
    computed: {
      classObject() {
        return {
          'p-blog__item': this.view === 'PAGE_BLOG',
          'p-blog__item-inner': this.view === 'PAGE_BLOG_INNER',
        }
      }
    },
    methods: {
      handleTagClick(tag) {
        this.$emit('handleTagClick', tag)
      }
    },
    mounted() {
      VanillaTilt.init(this.$refs.blogImg, {
        max: 10,
        speed: 200,
        perspective: 1200
      });
    }
  }
</script>

<style lang="sass">
  @for $i from 1 through 50
    .p-blog__item:nth-child(#{$i})
      transition-delay: $i / 20 + s
</style>

<style>
  .p-blog__item {
    transform: translateY(-4rem) scale(.85);
    opacity: 0;
    transition: 1.2s transform cubic-bezier(.19,1,.22,1), .7s opacity cubic-bezier(.19,1,.22,1) .3s;
  }

  .p-blog__item.in-viewport {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .p-blog__item.above-viewport {
    opacity: 1 !important;
    transform: translateY(0) scale(1) !important;
  }

  .p-blog__item-info {
    font-size: 1em;
    margin-top: .8rem;
  }

  .p-blog__item-inner {
    text-align: left;
    width: 100%;
    color: inherit;
  }

  .p-blog__item-inner {
    margin-bottom: 1.875rem;
  }

  .p-blog__item-inner:last-child {
    margin-bottom: 0;
  }

  .p-blog__item-inner-content {
    flex: 1;
    padding-left: 1.875rem;
  }

  .p-blog__item-inner .p-blog__item-img {
    width: 27.1%;
  }

  .p-blog__item-inner .p-blog__item-title {
    margin-top: 0;
    font-size: 0.8125em;
  }

  .p-blog__item-title {
    text-transform: uppercase;
    font-size: 1em;
    color: #333333;
    text-decoration: none;
    font-family: 'Futura PT demi';
    margin-top: .75rem;
    line-height: 1.2;
    display: block;
  }

  .p-blog__item-tags {
    margin: .9rem -5px -5px 0;
  }

  .p-blog__item-img {
    display: block;
    width: 100%;
  }

  .p-blog__item-img img {
    display: block;
    width: 100%;
    height: auto;
  }

  .p-blog__item {
    width: 49.2%;
    margin-right: 1.6%;
    margin-bottom: 3.75rem;
    text-align: left;
  }

  .p-blog__item:nth-child(2n) {
    margin-right: 0;
  }

  @media screen and (max-width: 1450px) {
    .p-blog__item-inner-content {
      padding-left: 1.2rem;
    }

    .p-blog__item-inner .p-blog__item-title {
      font-size: 0.77em;
    }
  }

  @media screen and (max-width: 1199px) {
    .p-blog__item-title {
      font-size: .95em;
    }
  }

  @media screen and (max-width: 991px) {
    .p-blog__item-title {
      font-size: .9em;
    }

    .p-blog__item {
      width: 48.5%;
      margin-right: 3%;
    }
  }

  @media screen and (max-width: 767px) {
    .p-blog__item-title {
      font-size: .86em;
    }

    .p-blog__item {
      width: 47.5%;
      margin-right: 5%;
    }
  }

  @media screen and (max-width: 550px) {
    .p-blog__item {
      width: 100%;
      margin-right: 0;
    }
  }
</style>
