<template>
  <div :class="['services-category__item', classObject]">
    <p class="services-category__item-title" v-html="item.title"></p>
    <div class="services-category__item-descr" v-html="item.descr"></div>
    <Button
      view="PAGE_SERVICES_CATEGORY"
      :btn="item.btn"
    />
  </div>
</template>

<script>
  import Button from '~/components/Shared/Button.vue'

  export default {
    props: {
      item: {
        type: Object,
        required: true
      },
      view: {
        type: String,
        required: true
      }
    },
    computed: {
      classObject() {
        return {
          'p-services-category__item': this.view === 'PAGE_SERVICES_CATEGORY'
        }
      }
    },
    components: {
      Button
    }
  }
</script>

<style>
  .services-category__item {
    opacity: 0;
    transform: translateX(-35%);
    transition: 1.1s transform cubic-bezier(.19,1,.22,1), .6s opacity cubic-bezier(.19,1,.22,1) .15s;
  }

  .services-category__item:nth-child(2) {
    transition-delay: .1s;
  }

  .services-category__item:nth-child(3) {
    transition-delay: .15s;
  }

  .services-category__item:nth-child(4) {
    transition-delay: .2s;
  }

  .services-category__item:nth-child(5) {
    transition-delay: .25s;
  }

  .services-category__item:nth-child(6) {
    transition-delay: .3s;
  }

  .services-category__item.in-viewport {
    opacity: 1;
    transform: translateX(0);
  }

  .services-category__item.above-viewport {
    transform: translateX(0%) !important;
    opacity: 1 !important;
    transition: none !important;
  }

  .services-category__item-title {
    font-size: 1.875em;
    font-family: 'Futura PT demi';
    letter-spacing: 0.001em;
    line-height: 1.15384615;
    text-transform: uppercase;
    position: relative;
    padding-left: 1.375rem;
  }

  .services-category__item-title:before {
    content: '';
    display: inline-block;
    position: absolute;
    width: 5px;
    height: 5px;
    background-image: linear-gradient( 90deg, rgb(47,139,218) 0%, rgb(0,171,211) 100%);
    left: 0;
    top: 13px;
  }

  .p-services-category__item {
    width: 22.85%;
    margin-right: 15.725%;
    margin-bottom: 7.5rem;
  }

  .p-services-category__item:nth-child(3n) {
    margin-right: 0;
  }

  .services-category__item-descr {
    font-family: 'Futura PT medium';
    margin-top: 1rem;
    line-height: 1.17647059;
    margin-bottom: 2rem;
    font-size: 1.0625em;
  }

  .services-category__item-descr p {
    margin-bottom: .9rem;
  }

  .services-category__item-descr p:last-child {
    margin-bottom: 0;
  }

  .services-category__item {
    font-size: 1em;
  }

  @media screen and (max-width: 1850px) {
    .p-services-category__item {
      width: 26%;
      margin-right: 11%;
    }

    .services-category__item-title {
      font-size: 1.65em;
    }
  }

  @media screen and (max-width: 1450px) {
    .p-services-category__item {
      width: 30%;
      margin-right: 5%;
    }

    .services-category__item {
      font-size: .9em;
    }
  }

  @media screen and (max-width: 1199px) {
    .p-services-category__item {
      margin-bottom: 6.5rem;
    }
  }

  @media screen and (max-width: 1100px) {
    .services-category__item-title {
      font-size: 1.4em;
    }
  }

  @media screen and (max-width: 991px) {
    .p-services-category__item {
      margin-bottom: 5rem;
    }
  }

  @media screen and (max-width: 950px) {
    .p-services-category__item {
      width: 45%;
      margin-right: 10%;
    }

    .p-services-category__item:nth-child(2n) {
      margin-right: 0;
    }

    .p-services-category__item:nth-child(3n):not(:nth-child(2n)) {
      margin-right: 10%;
    }
  }

  @media screen and (max-width: 767px) {
    .p-services-category__item {
      margin-bottom: 4rem;
    }
  }

  @media screen and (max-width: 700px) {
    .services-category__item-title {
      font-size: 1.3em;
    }
  }

  @media screen and (max-width: 580px) {
    .p-services-category__item {
      width: 100%;
      margin-right: 0%;
    }

    .p-services-category__item:nth-child(3n):not(:nth-child(2n)) {
      margin-right: 0%;
    }
  }
</style>
