<template>
  <div :class="[`services__block services__block--${this.block.title.toLowerCase()}`, classObject]">
    <div class="services__block-title">
      <p class="services__block-title--main">{{block.title}}</p>
      <p class="services__block-title--additional" :style="{color: block.titleColor}">{{block.title}}</p>
    </div>
    <div v-if="block.menu" class="services__block-links">
      <NavList
        view="SECTION_SERVICES"
        :menu="block.menu"
      />
    </div>
    <BriefLinks
      v-else
      :block="block"
    />
    <Button
      view="SECTION_SERVICES_BLOCK"
      :btn="block.btn"
      v-if="block.btn"
    />
  </div>
</template>

<script>
  import NavList from '~/components/Shared/NavList.vue'
  import Button from '~/components/Shared/Button.vue'
  import BriefLinks from '~/components/Brief/BriefLinks'

  export default {
    props: {
      block: {
        type: Object,
        required: true
      },
      view: {
        type: String,
        require: true
      }
    },
    computed: {
      classObject() {
        return {
          'p-services__services__block': this.view === 'PAGE_SERVICES' || this.view === 'PAGE_BRIEFS',
          's-services__services__block': this.view === 'SECTION_SERVICES',
        }
      }
    },
    components: {
      NavList,
      Button,
      BriefLinks
    }
  }
</script>

<style>
  .services__block {
    transform: translateY(5rem);
    opacity: 0;
    transition: 1.7s transform cubic-bezier(.19,1,.22,1), 1.2s opacity cubic-bezier(.19,1,.22,1);
  }

  .s-services__services__block {
    width: 42%;
    margin-bottom: 4.375rem;
  }

  .services__block.in-viewport {
    transform: translateY(0%);
    opacity: 1;
  }

  .services__block.above-viewport {
    transform: translateY(0%) !important;
    opacity: 1 !important;
    transition: none !important;
  }

  .services__block--web {
    transition-delay: 0.1s;
  }

  .services__block--seo {
    transition-delay: 0.1s;
  }

  .services__block--smm {
    transition-delay: 0.2s;
  }

  .p-services__services__block {
    width: 25%;
    margin-right: 12.5%;
    margin-bottom: 5rem;
  }

  .p-services__services__block .s-services__nav-list li {
    width: 100%;
    margin-right: 0;
  }

  .p-services__services__block:nth-child(3n) {
    margin-right: 0;
  }

  .s-services__services__block:last-child {
    margin-right: 6.6%;
  }

  .p-services__services__block:nth-child(1) {
    transition-delay: .1s;
  }

  .p-services__services__block:nth-child(2) {
    transition-delay: .2s;
  }

  .p-services__services__block:nth-child(3) {
    transition-delay: .3s;
  }

  .p-services__services__block:nth-child(4) {
    transition-delay: .4s;
  }

  .p-services__services__block:nth-child(5) {
    transition-delay: .5s;
  }

  .services__block-title {
    position: relative;
    font-size: 2.375em;
    font-family: 'Futura PT medium';
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-bottom: 2.5rem;
  }

  .services__block-title--additional {
    font-size: 1.89473684em;
    font-family: 'Futura PT Bold';
    position: absolute;
    top: 0;
    line-height: 1;
    left: 2rem;
    z-index: -1;
  }

  @media screen and (max-width: 1300px) {
    .services__block-title {
      font-size: 2em;
    }

  }

  @media screen and (max-width: 1199px) {
    .p-services__services__block {
      margin-bottom: 4rem;
    }
  }

  @media screen and (max-width: 991px) {
    .s-services__services__block {
      width: 48%;
    }

    .p-services__services__block {
      margin-bottom: 3.5rem;
    }

    .s-services__services__block:last-child {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 850px) {
    .s-services__services__block {
      width: 100%;
    }

    .p-services__services__block .s-services__nav-list li {
      width: 48%;
      margin-right: 4%;
    }

    .p-services__services__block .s-services__nav-list li:nth-child(2n) {
      margin-right: 0;
    }

    .p-services__services__block {
      width: 100%;
    }

    .s-services__services__block.services__block--web {
      order: 2;
    }

    .s-services__services__block.services__block--seo {
      order: 3;
    }

    .s-services__services__block.services__block--smm {
      order: 4;
    }
  }

  @media screen and (max-width: 480px) {
    .services__block-title--additional {
      font-size: 1.4em;
      left: 1rem;
    }
  }

  @media screen and (max-width: 420px) {
    .p-services__services__block .s-services__nav-list li {
      width: 100%;
      margin-right: 0;
    }
  }
</style>
