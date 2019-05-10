<template>
  <div :class="['category__process-item flex', classObject]">
    <div class="category__process-item-inner inline-flex ai-fs">
      <p class="category__process-item-number inline-flex ai-c jc-c">
        <span>{{this.item.number}}</span>
      </p>
      <div class="category__process-item-content">
        <p class="category__process-item-title">{{this.item.title}}</p>
        <p class="category__process-item-text">{{this.item.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
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
          'p-services-category__process-item': this.view === 'PAGE_SERVICES_CATEGORY_PROCESS'
        }
      }
    }
  }
</script>

<style>
  .category__process-item {
    font-size: 1em;
    transition: 1s all cubic-bezier(.19,1,.22,1);
    opacity: 0;
    transform: translateY(25%);
  }

  .category__process-item:nth-of-type(2) {
    transition-delay: 0.1s;
  }

  .category__process-item:nth-of-type(3) {
    transition-delay: 0.2s;
  }

  .category__process-item:nth-of-type(4) {
    transition-delay: 0.3s;
  }

  .category__process-item:nth-of-type(5) {
    transition-delay: 0.4s;
  }

  .category__process-item:nth-of-type(6) {
    transition-delay: 0.5s;
  }

  .category__process-item:nth-of-type(7) {
    transition-delay: 0.6s;
  }

  .category__process-item:nth-of-type(8) {
    transition-delay: 0.7s;
  }

  .category__process-item.in-viewport {
    opacity: 1;
    transform: translateY(0%);
  }

  .category__process-item.above-viewport {
    transform: translateY(0%) !important;
    opacity: 1 !important;
    transition: none !important;
  }

  .category__process-item-title {
    font-size: .875em;
    font-family: 'Futura PT heavy';
    letter-spacing: 0.025em;
    text-transform: uppercase;
  }

  .category__process-item-content {
    flex: 1;
  }

  .category__process-item-text {
    font-family: 'Futura PT medium';
    color: #5b5a5a;
    line-height: 1;
    font-size: 0.9375em;
    margin-top: .75rem;
  }

  .p-services-category__process-item {
    width: 22%;
    margin-bottom: 2.5rem;
  }

  .p-services-category__process-item .category__process-item-inner {
    width: 67%;
  }

  .p-services-category__process-item:nth-child(1) ,
  .p-services-category__process-item:nth-child(5) {
    justify-content: flex-start;
  }

  .p-services-category__process-item:nth-child(4) ,
  .p-services-category__process-item:nth-child(8) {
    justify-content: flex-end;
  }

  .p-services-category__process-item:nth-child(2) ,
  .p-services-category__process-item:nth-child(3) ,
  .p-services-category__process-item:nth-child(6) ,
  .p-services-category__process-item:nth-child(7) {
    justify-content: center;
  }



  .category__process-item-number {
    width: 16px;
    height: 16px;
    font-size: 8px;
    color: #ffffff;
    border-radius: 50%;
    margin-top: 1px;
    margin-right: .875rem;
    font-family: 'Futura PT heavy';
    line-height: 1;
    background-color: #675cb3;
  }

  @media screen and (max-width: 1350px) {
    .p-services-category__process-item .category__process-item-inner {
      width: 100%;
    }
  }

  @media screen and (max-width: 900px) {
    .p-services-category__process-item {
      width: 30%;
      margin-right: 5%;
    }

    .p-services-category__process-item:nth-child(3n) {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 700px) {
    .category__process-item-title {
      font-size: .8em;
    }

    .category__process-item-number {
      margin-right: .5rem;
    }
  }

  @media screen and (max-width: 580px) {
    .p-services-category__process-item {
      width: 46%;
      margin-right: 8%;
    }

    .p-services-category__process-item:nth-child(3n) {
      margin-right: 8%;
    }

    .p-services-category__process-item:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 380px) {
    .p-services-category__process-item {
      width: 100%;
      margin-right: 0;
    }

    .p-services-category__process-item:nth-child(3n) {
      margin-right: 0;
    }
  }
</style>
