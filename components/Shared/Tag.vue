<template>
  <div :data-val="val" :class="['tag flex ai-c jc-c', classObject]">
    <p class="tag-title">{{item}}</p>
  </div>
</template>

<script>
  import cyrillicToTranslit from 'cyrillic-to-translit-js'

  export default {
    computed: {
      classObject () {
        return {
          'p-services-technologies__item': this.view === 'PAGE_SERVICES_CATEGORY_TECHNOLOGIES',
          'blog-tag': this.view === 'PAGE_BLOG'
        }
      },
      val () {
        return cyrillicToTranslit().transform(this.item, '_').toLowerCase()
      }
    },
    props: {
      item: {
        type: [Object, String],
        required: true
      },
      view: {
        type: String,
        required: true
      }
    }
  }
</script>

<style>
  .p-services-technologies__item {
    margin: 7px 5px;
    font-size: .875em;
    padding: 0 2.5rem;
    opacity: 0;
    height: 35px;
    transform: translateY(-15%);
    transition: 1s transform cubic-bezier(.19,1,.22,1), .62s opacity cubic-bezier(.19,1,.22,1) .15s;
    background-color: #f0f0f1;
    letter-spacing: 0.001em;
  }

  .blog-tag {
    height: 30px;
    font-size: 0.8125em;
    letter-spacing: 0.025em;
    border: 1px solid #333333;
    padding: 0 1.25rem;
    cursor: pointer;
    margin-right: 5px;
    margin-bottom: 5px;
    transition: 0.15s color ease-in;
  }

  .blog-tag:hover {
    background-image: linear-gradient( 90deg, rgb(47,139,218) 0%, rgb(0,171,211) 100%);
    border-color: transparent;
    color: #ffffff;
  }

  .tag {
    line-height: 1;
    text-align: center;
  }

  .p-services-technologies__item.in-viewport {
    opacity: 1;
    transform: translateY(0);
  }

  .p-services-technologies__item.above-viewport {
    transform: translateY(0%) !important;
    opacity: 1 !important;
    transition: none !important;
  }

  .tag-title {
    white-space: nowrap;
    font-family: 'Futura PT demi';
  }

  @media screen and (max-width: 1199px) {
    .p-services-technologies__item {
      height: 32px;
      padding: 0 2.2rem;
      margin: 6px 5px;
    }
  }

  @media screen and (max-width: 991px) {
    .p-services-technologies__item {
      height: 30px;
      padding: 0 1.9rem;
      margin: 6px 4px;
    }
  }

  @media screen and (max-width: 767px) {
    .p-services-technologies__item {
      height: 26px;
      padding: 0 1.6rem;
      margin: 5px 4px;
    }

    .blog-tag {
      font-size: .75em;
      height: 26px;
    }
  }

  @media screen and (max-width: 500px) {
    .p-services-technologies__item {
      height: 24px;
      padding: 0 1.3rem;
      margin: 4px 3px;
    }
  }

  @media screen and (max-width: 380px) {
    .p-services-technologies__item {
      padding: 0 .9rem;
    }
  }
</style>
