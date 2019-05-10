<template>
  <div v-in-viewport :class="['p-about__block flex ai-s jc-fs', classObject]">
    <div class="p-about__block-img">
      <div class="p-about__block-img-inner">
        <img :src="item.img" :alt="item.title" />
      </div>
    </div>
    <div class="p-about__block-info flex fd-c jc-sb ai-fs">
      <div class="p-about__block-top">
        <p class="p-about__block-label">{{this.item.label}}</p>
        <p class="p-about__block-title">{{this.item.title}}</p>
        <div class="p-about__block-content" v-html="item.content"></div>
      </div>
      <Button
        view="PAGE_ABOUT_BLOCK"
        :btn="item.btn"
      />
    </div>
  </div>
</template>

<script>
  import Button from '~/components/Shared/Button'

  export default {
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    computed: {
      classObject() {
        return {
          'p-about__block--team': this.item.type === 'team',
          'p-about__block--office': this.item.type === 'office',
          'p-about__block--awards': this.item.type === 'awards',
        }
      }
    },
    components: {
      Button
    }
  }
</script>

<style>
  .p-about__block-img {
    width: 33%;
    opacity: 0;
    transition: .9s all cubic-bezier(.19,1,.22,1);
  }

  .p-about__block-img-inner {
    width: 100%;
    position: relative;
  }

  .p-about__block-img-inner:after {
    content: '';
    display: inline-block;
    position: absolute;
    height: calc(100% - 1.5625rem);
    background-color: #333333;
    width: 10.375rem;
    z-index: -1;
  }

  .p-about__block:nth-of-type(odd) .p-about__block-info {
    padding-left: 12.7%;
    order: 2;
    transform: translateX(20%);
  }

  .p-about__block:nth-of-type(even) .p-about__block-info {
    padding-right: 12.7%;
    order: 1;
    transform: translateX(-20%);
  }

  .p-about__block:nth-of-type(even) .p-about__block-img {
    order: 2;
    transform: translateX(-20%);
  }

  .p-about__block:nth-of-type(odd) .p-about__block-img {
    order: 1;
    transform: translateX(20%);
  }

  .p-about__block--team .p-about__block-img-inner:after,
  .p-about__block--awards .p-about__block-img-inner:after {
    right: -2.875rem;
    bottom: -3.125rem;
  }

  .p-about__block--office .p-about__block-img-inner:after {
    left: -2.875rem;
    bottom: -3.125rem;
  }

  .p-about__block-img img {
    width: 100%;
    height: auto;
    display: block;
  }

  .p-about__block-label {
    font-family: 'Futura PT medium';
    font-size: 1em;
    color: #7c7c7c;
    text-transform: uppercase;
  }

  .p-about__block-title {
    font-family: 'Futura PT demi';
    font-size: 2.125em;
    margin-top: 1.25rem;
    line-height: 0.88235294117;
  }

  .p-about__block-content {
    margin-top: 2rem;
    font-size: 1em;
    font-family: 'Futura PT medium';
    line-height: 1.25;
  }

  .p-about__block-content p {
    margin-bottom: 1rem;
  }

  .p-about__block-content *:last-child {
    margin-bottom: 0;
  }

  .p-about__block-info {
    flex: 1;
    padding-top: 4.6875rem;
    opacity: 0;
    transition: .9s all cubic-bezier(.19,1,.22,1);
  }

  .p-about__block {
    margin-bottom: 11.25rem;
  }

  .p-about__block:last-of-type {
    margin-bottom: 3.125rem;
  }

  .p-about__block.in-viewport .p-about__block-img,
  .p-about__block.in-viewport .p-about__block-info {
    opacity: 1;
    transform: translateX(0);
  }

  .p-about__block.above-viewport .p-about__block-img,
  .p-about__block.above-viewport .p-about__block-info {
    opacity: 1 !important;
    transform: translateX(0) !important;
    transition: none !important;
  }

  @media screen and (max-width: 1550px) {
    .p-about__block-title {
      font-size: 1.8em;
      margin-top: 1rem;
    }

    .p-about__block-info {
      padding-top: 2.5rem;
    }

    .p-about__block--team .p-about__block-img-inner::after, .p-about__block--awards .p-about__block-img-inner::after {
      right: -1.2rem;
      bottom: -0.9375rem;
    }

    .p-about__block:nth-of-type(2n+1) .p-about__block-info {
      padding-left: 7.5%;
    }

    .p-about__block:nth-of-type(2n) .p-about__block-info {
      padding-right: 7.5%;
    }

    .p-about__block--office .p-about__block-img-inner::after {
      left: -1.2rem;
      bottom: -0.9375rem;
    }

    .p-about__block-label {
      font-size: .9em;
    }

    .p-about__block {
      margin-bottom: 8rem;
    }

    .p-about__block:last-of-type {
      margin-bottom: 0.9375rem;
    }
  }

  @media screen and (max-width: 1350px) {
    .p-about__block-title {
      font-size: 1.55em;
      margin-top: .9rem;
    }

    .p-about__block:nth-of-type(2n+1) .p-about__block-info {
      padding-left: 6.5%;
    }

    .p-about__block:nth-of-type(2n) .p-about__block-info {
      padding-right: 6.5%;
    }

    .p-about__block-label {
      font-size: .85em;
    }

    .p-about__block-content {
      font-size: .95em;
    }
  }

  @media screen and (max-width: 991px) {
    .p-about__block-info {
      padding-top: 0;
    }

    .p-about__block-title {
      font-size: 1.3em;
    }
  }

  @media screen and (max-width: 900px) {
    .p-about__block:nth-of-type(2n+1) .p-about__block-info {
      padding-left: 0;
    }

    .p-about__block:nth-of-type(2n) .p-about__block-info {
      padding-right: 0;
      order: 2;
    }

    .p-about__block:nth-of-type(2n) .p-about__block-img {
      order: 1
    }

    .p-about__block-img {
      margin-left: auto;
      margin-right: auto;
    }

    .p-about__block-info {
      width: 100%;
      flex-basis: 100%;
      margin-top: 3rem;
    }

    .p-about__block {
      flex-wrap: wrap;
      margin-bottom: 4.5rem;
    }

    .p-about__block:last-of-type {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 767px) {
    .p-about__block-img {
      width: 40%;
    }
  }

  @media screen and (max-width: 550px) {
    .p-about__block-img {
      width: 55%;
    }
  }

  @media screen and (max-width: 420px) {
    .p-about__block-img {
      width: 70%;
    }
  }
</style>
