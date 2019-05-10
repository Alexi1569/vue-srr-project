<template>
  <div :class="['services-process__item', classObject]">
    <div class="services-process__item-icon">
      <i class="inline-flex ai-fe jc-c" v-html="item.icon"></i>
    </div>
    <p class="services-process__item-title">{{item.title}}</p>
    <p class="services-process__item-text">{{item.text}}</p>
  </div>
</template>

<script>
  export default {
    computed: {
      classObject() {
        return {
          'p-services-process__item': this.view === 'PAGE_SERVICES_CATEGORY_PROCESS'
        }
      }
    },
    props: {
      item: {
        type: Object,
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
  .services-process__item {
    text-align: center;
    opacity: 0;
    transform: translateY(-25%);
    transition: 1.2s transform cubic-bezier(.19,1,.22,1), .7s opacity cubic-bezier(.19,1,.22,1) .15s;
  }

  .services-process__item:nth-child(2) {
    transition-delay: .1s;
  }

  .services-process__item:nth-child(3) {
    transition-delay: .15s;
  }

  .services-process__item:nth-child(4) {
    transition-delay: .2s;
  }

  .services-process__item.in-viewport {
    opacity: 1;
    transform: translateY(0);
  }

  .services-process__item.above-viewport {
    transform: translateY(0%) !important;
    opacity: 1 !important;
    transition: none !important;
  }

  .p-services-process__item {
    width: 19%;
    margin: 0 1%;
    font-size: .875em;
    line-height: 1.07142857;
  }

  .services-process__item-title {
    text-transform: uppercase;
    letter-spacing: 0.001em;
    margin-top: 1.25rem;
    font-family: 'Futura PT heavy';
  }

  .services-process__item-text {
    margin-top: .625rem;
    font-family: 'Futura PT medium';
  }

  .services-process__item-icon i {
    display: inline-block;
    min-height: 3.125rem;
  }

  .services-process__item-icon svg {
    width: 3.125rem;
    display: block;
    fill: #6459b1;
  }

  @media screen and (max-width: 1199px) {
    .p-services-process__item {
      width: 23%;
    }
  }

  @media screen and (max-width: 991px) {
    .p-services-process__item {
      width: 45%;
      margin-right: 5%;
      margin-bottom: 3rem;
    }
    .p-services-process__item:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 450px) {
    .p-services-process__item {
      width: 100%;
      margin-right: 0;
    }
  }
</style>
