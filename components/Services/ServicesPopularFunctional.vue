<template>
  <section class="p-services-item__popular">
    <div
      class="p-services-item__popular-img"
      v-in-viewport
    >
      <img :src="popular.img.src" :alt="popular.img.alt">
    </div>
    <div
      class="p-services-item__popular-inner"
      v-in-viewport
    >
      <Caption
        view="PAGE_SERVICES_ITEM_POPULAR"
        :caption="popular.caption"
      />
      <div class="p-services-item__popular-items flex fw-w ai-s jc-sb">
        <p
          class="p-services-item__popular-item"
          v-for="item, i in popular.items"
          :key="i"
        >
          {{item}}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
  import Caption from '~/components/Shared/Caption'

  export default {
    props: {
      popular: {
        type: Object,
        required: true
      }
    },
    components: {
      Caption
    }
  }
</script>

<style>
  .p-services-item__popular-items {
    font-size: 1em;
    font-family: 'Futura PT medium';
    margin-bottom: -.625rem;
  }

  .p-services-item__popular-item {
    line-height: 1.3;
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: .625rem;
    width: 45%;
  }

  .p-services-item__popular-item:before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 4px;
    position: absolute;
    top: 7px;
    left: 0;
    background-image: linear-gradient( 90deg, rgb(47,139,218) 0%, rgb(0,171,211) 100%);
  }

  .p-services-item__popular-items {
    margin-top: 4.0625rem;
  }

  .p-services-item__popular {
    padding-bottom: 8rem;
  }

  .p-services-item__popular-inner {
    padding-left: 42.5%;
    opacity: 0;
    transform: translateX(30%);
    transition: 1s all cubic-bezier(.19,1,.22,1) .8s;
  }

  .p-services-item__popular-inner.in-viewport {
    opacity: 1;
    transform: translateX(0);
  }

  .p-services-item__popular-inner.above-viewport {
    transform: translateX(0%) !important;
    opacity: 1 !important;
    transition: none !important;
  }

  .p-services-item__popular-img {
    position: absolute;
    max-width: 44.3%;
    z-index: -1;
    left: -6.5%;
    bottom: 0;
    transition: 1s all cubic-bezier(.19,1,.22,1) .5s;
    opacity: 0;
    transform: translateX(-40%);
  }

  .p-services-item__popular-img.in-viewport, .p-services-item__popular-img.below-viewport {
    opacity: 1;
    transform: translateX(0%);
  }

  .p-services-item__popular-img.above-viewport {
    transform: translateX(0%) !important;
    opacity: 1 !important;
    transition: none !important;
  }

  .p-services-item__popular-img img {
    width: 100%;
    height: auto;
    display: block;
  }

  .p-services-item__popular {
    position: relative;
    z-index: 0;
    margin-top: 3.625rem;
  }

  @media screen and (max-width: 1450px) {
    .p-services-item__popular {
      padding-bottom: 3rem;
    }
  }

  @media screen and (max-width: 1300px) {
    .p-services-item__popular-img {
      left: -3%;
    }

    .p-services-item__popular-inner {
      padding-left: 45.5%;
    }

    .p-services-item__popular-items {
      margin-top: 2.5rem;
    }

    .p-services-item__popular-items {
      font-size: .9em;
    }

    .caption.p-services-item__popular-title .caption__main {
      font-size: 1.5em;
    }

    .p-services-item__popular {
      padding-bottom: 0;
    }
  }

  @media screen and (max-width: 991px) {
    .p-services-item__popular-img {
      left: -32%;
      max-width: 60%;
    }

    .p-services-item__popular-inner {
      padding-left: 34.5%;
    }
  }

  @media screen and (max-width: 850px) {
    .p-services-item__popular-img {
      display: none;
    }

    .p-services-item__popular-inner {
      padding-left: 0;
    }
  }

  @media screen and (max-width: 500px) {
    .p-services-item__popular-item {
      width: 100%;
    }
  }
</style>
