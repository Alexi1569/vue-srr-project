<template>
  <div :class="['artmarks-img', classObject]">
    <img :src="img.src" :alt="img.alt">
  </div>
</template>

<script>
  export default {
    props: {
      view: {
        type: String,
        required: true
      },
      img: {
        type: Object,
        required: true
      }
    },
    computed: {
      classObject() {
        return {
          's-services__presentation-title-img': this.view === 'SECTION_SERVICES_PRESENTATION',
          'p-services__title-img': this.view === 'PAGE_SERVICES',
          'p-about__artmarks': this.view === 'PAGE_ABOUT',
          'p-team__artmarks': this.view === 'PAGE_TEAM',
          's-calculator__img': this.view === 'CALCULATOR_SERVICES'
        }
      }
    }
  }
</script>

<style>
  .s-services__presentation-title-img {
    position: absolute;
    right: calc(-7.9375rem + 15px);
    z-index: -1;
  }

  .artmarks-img {
    transform: translateX(30%);
    opacity: 0;
    transition: 1.2s transform cubic-bezier(.19,1,.22,1) .2s, .9s opacity cubic-bezier(.19,1,.22,1) 0.3s;
  }

  .s-calculator__img.artmarks-img {
    transform: translateX(0%) !important;
    opacity: 1 !important;
  }

  .s-calculator__img {
    position: absolute;
    top: 0;
    width: 38.1%;
    z-index: -1;
    right: 6.1%;
  }

  .s-calculator__img img {
    width: 100%;
    display: block;
    height: auto;
  }

  .artmarks-img.p-team__artmarks {
    width: 114%;
    position: absolute;
    top: 16%;
    left: -8.5%;
  }

  .artmarks-img.in-viewport {
    opacity: 1;
    transform: translateX(0%);
  }

  .artmarks-img.above-viewport {
    transform: translateX(0%) !important;
    opacity: 1 !important;
    transition: none !important;
  }

  .s-services__presentation-title-img {
    top: 0;
    width: 66.34%;
  }

  .artmarks-img img {
    display: block;
    width: 100%;
    height: auto;
  }

  .p-about__artmarks {
    position: absolute;
    z-index: -1;
    bottom: -.6rem;
    right: -.5rem;
    width: 129%;
  }

  .p-services__title-img {
    position: absolute;
    bottom: 0;
    right: calc(-7.9375rem + 15px);
    z-index: -1;
    width: 56%;
  }

  @media screen and (max-width: 1500px) {
    .s-services__presentation-title-img,
    .p-services__title-img {
      right: calc(-5rem + 15px);
    }

    .s-services__presentation-title-img {
      width: 70%;
    }
  }

  @media screen and (max-width: 1300px) {
    .s-services__presentation-title-img {
      width: 65%;
    }
    .s-services__presentation-title-img {
      right: calc(-3.5rem + 15px);
    }
  }

  @media screen and (max-width: 1199px) {
    .p-services__title-img {
      width: 45%;
    }

    .p-services__title-img {
      right: calc(-3rem + 15px);
    }
  }

  @media screen and (max-width: 991px) {
    .s-services__presentation-title-img {
      right: calc(-1.8rem + 15px);
    }

    .p-services__title-img {
      display: none;
    }
  }

  @media screen and (max-width: 930px) {
    .p-about__artmarks {
      width: 100%;
      right: 0;
    }
  }

  @media screen and (max-width: 850px) {
    .s-services__presentation-title-img {
      left: calc(1.8rem + 15px);
      right: auto;
    }
  }

  @media screen and (max-width: 767px) {
    .s-services__presentation-title-img.in-viewport {
      left: calc(50% + 2.7rem);
      transform: translateX(-50%);
      right: auto;
    }
  }

  @media screen and (max-width: 650px) {
    .s-calculator__img {
      display: none;
    }
  }

  @media screen and (max-width: 550px) {
    .p-about__artmarks {
      display: none;
    }
  }

  @media screen and (max-width: 500px) {
    .s-services__presentation-title-img.in-viewport {
      left: 50%;
      width: 100%;
      transform: translateX(-50%);
    }
  }
</style>
