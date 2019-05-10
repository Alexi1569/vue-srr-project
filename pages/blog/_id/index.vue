<template>
  <div class="p-blog-item">
    <div class="container">
      <Breadcrumbs
        :title="pageContent.main.pageTitle"
      />

      <div class="p-blog-item__img">
        <img :src="pageContent.main.mainImg" :alt="pageContent.main.title" />
        <div class="p-blog__item-img-title">
          <p>{{this.pageContent.main.title}}</p>
        </div>
      </div>

      <div class="p-blog-item__parts flex jc-sb ai-s">
        <div ref="blogLeft" class="p-blog-item__left">
          <div class="p-blog-item__left-top">
            <div class="p-blog__inner-tags flex fw-w jc-fs ai-s">
              <Tag
                v-for="el, i in pageContent.main.tags"
                :key="i"
                :item="el"
                view="PAGE_BLOG"
              />
            </div>
            <div class="p-blog-item__left-info">
              <Date
                :date="pageContent.main.date"
              />
              <Views
                :views="pageContent.main.views"
              />
            </div>
          </div>
          <div class="p-blog-item__left-content" v-html="pageContent.main.content"></div>
        </div>
        <div ref="blogRight" class="p-blog-item__right">
          <div class="p-blog-item__right-inner" ref="blogRightInner">
            <Categories
              :categories="pageContent.categories"
            />
            <Similar
              :similar="pageContent.similar"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Breadcrumbs from '~/components/Shared/Breadcrumbs'
  import Tag from '~/components/Shared/Tag'
  import BlogViews from '~/components/Blog/BlogViews'
  import BlogDate from '~/components/Blog/BlogDate'
  import BlogCategories from '~/components/Blog/BlogCategories'
  import BlogSimilar from '~/components/Blog/BlogSimilar'

  export default {
    components: {
      Breadcrumbs,
      Tag,
      Views: BlogViews,
      Date: BlogDate,
      Categories: BlogCategories,
      Similar: BlogSimilar
    },
    head() {
      return {
        title: this.pageContent.main.pageTitle
      }
    },
    computed: {
      pageContent() {
        return this.$store.state.blogItemPage
      }
    },
    data() {
      return {
        left: 0,
        width: 0,
        scrollY: 0,
        innerHeight: 0
      }
    },
    methods: {
      handleScroll(e) {
        const {blogRight, blogRightInner, blogLeft} = this.$refs;

        if (window.innerWidth >= 1200) {
          const rect = blogRightInner.getBoundingClientRect();
          const leftBottom = blogLeft.offsetTop + blogLeft.clientHeight - this.innerHeight;
          this.scrollY = window.pageYOffset;

          if (window.scrollY < blogRight.offsetTop) {
            this.left = rect.left;
            this.width = rect.width;
            this.innerHeight = rect.height;
          }

          if (window.scrollY >= blogRight.offsetTop) {
            if (leftBottom > window.scrollY) {
              blogRightInner.style.left = `${this.left}px`;
              blogRightInner.style.top = `0px`;
              blogRightInner.style.width = `${this.width}px`;
              blogRight.classList.add('fixed');
              blogRight.classList.remove('absolute');
            } else {
              blogRightInner.style.top = `auto`;
              blogRightInner.style.bottom = `0px`;
              blogRightInner.style.left = `0px`;
              blogRight.classList.add('absolute');
              blogRight.classList.remove('fixed');
            }
          } else {
            blogRight.classList.remove('fixed');
            blogRight.classList.remove('absolute');
          }
        } else {
          blogRight.classList.remove('fixed');
          blogRight.classList.remove('absolute');
        }
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
</script>

<style>
  .p-blog-item {
    color: #333333;
  }

  .p-blog-item__img {
    width: 100%;
    display: block;
    margin-top: 1.8rem;
    position: relative;
  }

  .p-blog__item-img-title {
    position: absolute;
    left: 10%;
    top: 50%;
    right: 10%;
    transform: translateY(-50%);
    text-transform: uppercase;
    text-align: center;
    line-height: 1.2;
  }

  .p-blog__item-img-title p {
    max-width: 100%;
    font-size: 1.75em;
    padding: 3.35rem 4.6875rem;
    font-family: 'Futura PT demi';
    color: #ffffff;
    background-color: rgba(0, 0, 0, .5);
    letter-spacing: 0.015em;
    display: inline-block;
  }

  .p-blog-item__img img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  .p-blog-item__left {
    width: 60.7%;
  }

  .p-blog-item__right {
    width: 34.97%;
    transition: .25s all linear;
    position: relative;
  }

  .p-blog-item__right.fixed {
    transform: none !important;
  }

  .p-blog-item__right.fixed .p-blog-item__right-inner {
    position: fixed;
  }

  .p-blog-item__right.absolute .p-blog-item__right-inner {
    position: absolute;
  }

  .p-blog-item__right.in-viewport {
    opacity: 1;
    transform: translateX(0%);
  }

  .p-blog-item__right.above-viewport {
    transform: translateX(0%) !important;
    opacity: 1 !important;
    transition: none !important;
  }

  .p-blog-item__parts {
    padding: 2.5rem 0 4.0625rem;
  }

  .p-blog__inner-tags {
    margin: .9rem -5px -5px 0;
  }

  .p-blog-item__left-info {
    margin-top: 2.25rem;
  }

  .p-blog-item__left-content {
    font-size: 1.0625em;
    line-height: 1.11764705882;
    font-family: 'Futura PT medium';
  }

  .p-blog-item__left-content h3 {
    text-transform: uppercase;
    padding: 6px;
    margin: 2rem -6px 0;
    display: inline-block;
    background-color: #d8f4fc;
    font-family: 'Futura PT heavy';
  }

  .p-blog-item__left-content ul {
    list-style-type: none;
    margin-top: 1rem;
  }

  .p-blog-item__left-content p {
    margin-top: 1rem;
  }

  .p-blog-item__left-content img {
    margin: 0 auto;
    display: block;
    width: 490px;
    max-width: 100%;
    height: auto;
    margin-top: 2.8125rem;
  }

  @media screen and (max-width: 1450px) {
    .p-blog__item-img-title p {
      padding: 3rem 4.3rem;
      font-size: 1.7em;
    }
  }

  @media screen and (max-width: 1300px) {
    .p-blog__item-img-title p {
      padding: 2.6rem 3.9rem;
      font-size: 1.65em;
    }
  }

  @media screen and (max-width: 1199px) {
    .p-blog__item-img-title p {
      padding: 2.5rem 3.2rem;
      font-size: 1.6em;
    }

    .p-blog-item__right-inner {
      left: auto !important;
      width: 100% !important;
      top: auto !important;
    }

    .p-blog-item__left {
      width: 100%;
    }

    .p-blog-item__right {
      width: 100%;
      margin-top: 4.5rem;
    }

    .p-blog-item__parts {
      flex-wrap: wrap;
    }
  }

  @media screen and (max-width: 991px) {
    .p-blog__item-img-title p {
      padding: 2rem 2.4rem;
      font-size: 1.3em;
    }
  }

  @media screen and (max-width: 767px) {
    .p-blog__item-img-title p {
      padding: 1.8rem 2rem;
      font-size: 1.2em;
    }

    .p-blog-item__parts {
      padding-top: 1.8rem;
    }

    .p-blog-item__left-content {
      font-size: 1em;
    }

    .p-blog-item__left-content h3 {
      font-size: .95em;
    }

    .p-blog-item__img {
      margin-top: 1.2rem;
    }
  }

  @media screen and (max-width: 650px) {
    .p-blog__item-img-title p {
      padding: 1.8rem 1.4rem;
      font-size: 1em;
    }
  }

  @media screen and (max-width: 450px) {
    .p-blog__item-img-title p {
      padding: 1.2rem 1rem;
      font-size: .8em;
    }
  }
</style>
