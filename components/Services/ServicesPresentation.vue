<template>
  <div class="s-services__presentation flex ai-c jc-fe">
    <TitleImg
      view="SECTION_SERVICES_PRESENTATION"
      v-in-viewport
      :img="presentationCalc.titleimg"
    />
    <div class="s-services__mockup">
      <img :src="presentationCalc.img.src" :alt="presentationCalc.img.alt">
    </div>
    <Button
      view="SECTION_SERVICES_PRESENTATION"
      :btn="presentationCalc.btn"
   />
  </div>
</template>

<script>
  import Button from '~/components/Shared/Button.vue'
  import ArtMarksTitleImg from '~/components/Shared/ArtMarksTitleImg'

  export default {
    components: {
      Button,
      TitleImg: ArtMarksTitleImg
    },
    props: {
      presentation: {
        type: Object,
        required: true
      },
      view: {
        type: String,
        required: false
      }
    },
    computed: {
      presentationCalc() {
        return Object.assign(
          {},
          this.presentation,
          {
            btn: this.extend({}, this.presentation.btn, this.presentationInner.btn)
          }
        )
      }
    },
    data() {
      return {
        presentationInner: {
          btn: {
            type: 'link',
            iconPosition: 'after',
            target: '_blank'
          },
        },
      }
    }
  }
</script>

<style>
  .s-services__presentation {
    width: 52%;
    margin-bottom: 2.8125rem;
  }

  .s-services__presentation .btn__wrap {
    opacity: 0;
    transform: translateX(30%);
    transition-delay: 0.3s;
    transition: 1.4s transform cubic-bezier(.19,1,.22,1), 1s opacity cubic-bezier(.19,1,.22,1);
  }

  .s-services__presentation.in-viewport .s-services__mockup,
  .s-services__presentation.in-viewport .btn__wrap {
    transform: translateX(0%);
    opacity: 1;
  }

  .s-services__presentation.above-viewport .s-services__mockup,
  .s-services__presentation.above-viewport .btn__wrap {
    transform: translateX(0%) !important;
    opacity: 1 !important;
    transition: none !important;
  }

  .s-services__mockup {
    margin-right: 3.75rem;
    flex: 1;
    transform: translateX(30%);
    opacity: 0;
    transition-delay: 0.2s;
    transition: 1.4s transform cubic-bezier(.19,1,.22,1), 1s opacity cubic-bezier(.19,1,.22,1);
  }

  .s-services__mockup img {
    display: block;
    width: 100%;
    height: auto;
  }

  .s-services__content {
    position: relative;
  }

  @media screen and (max-width: 1500px) {
    .s-services__mockup {
      margin-right: 2.2rem;
    }

  }

  @media screen and (max-width: 1300px) {
    .s-services__mockup {
      margin-right: 0;
      margin-bottom: 2rem;
      width: 70%;
    }
    .s-services__presentation {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }

  @media screen and (max-width: 991px) {
    .s-services__mockup {
      width: 85%;
    }

    .s-services__presentation {
      width: 48%;
    }
  }

  @media screen and (max-width: 850px) {
    .s-services__presentation {
      width: 100%;
      order: 1;
    }

    .s-services__mockup {
      width: 55%;
      margin-right: 3rem;
    }

    .s-services__presentation {
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }
  }

  @media screen and (max-width: 767px) {
    .s-services__mockup {
      margin-right: 0;
      margin-bottom: 2rem;
      width: 70%;
    }
    .s-services__presentation {
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }
  }

  @media screen and (max-width: 600px) {
    .s-services__mockup {
      width: 90%;
    }
  }

  @media screen and (max-width: 450px) {
    .s-services__mockup {
      width: 100%;
    }
  }
</style>
