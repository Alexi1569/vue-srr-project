<template>
  <div :class="['about__advantage', classObject]">
    <template v-if="view === 'PAGE_ABOUT_TOP'">
      <div class="about__advantage-top flex jc-fs ai-fe">
        <i class="about__advantage-icon" v-html="advantage.icon"></i>
        <p class="about__advantage-title">{{this.advantage.title}}</p>
      </div>
      <div class="about__advantage-content" v-html="advantage.content"></div>
    </template>
    <template v-else-if="view === 'PAGE_ABOUT_ANSWERS'">
      <p class="about__advantage-title" v-html="advantage.title"></p>
      <div class="about__advantage-content" v-html="advantage.content"></div>
    </template>
    <template v-else-if="view === 'PAGE_ABOUT_ADVANTAGES'">
      <i class="about__advantage-icon ai-fe jc-c" v-html="advantage.icon"></i>
      <p class="about__advantage-title">{{this.advantage.title}}</p>
      <div class="about__advantage-content" v-html="advantage.content"></div>
    </template>
  </div>
</template>

<script>
  export default {
    computed: {
      classObject() {
        return {
          'p-about__head-item': this.view === 'PAGE_ABOUT_TOP',
          'p-about__answers-item flex fd-c jc-fs ai-fs': this.view === 'PAGE_ABOUT_ANSWERS',
          'p-about__advantages-item': this.view === 'PAGE_ABOUT_ADVANTAGES',
        }
      }
    },
    props: {
      view: {
        type: String,
        required: true
      },
      advantage: {
        type: Object,
        required: true
      }
    }
  }
</script>



<style>
  .p-about__head-item {
    font-size: .875em;
    width: 44.3%;
    margin-bottom: 6.3rem;
  }

  .p-about__head-item .about__advantage-title {
    margin-bototm: -3px;
  }

  .p-about__answers-item {
    width: 27.5%;
    opacity: 0;
    transform: translateX(-30%);
    transition: 1.4s transform cubic-bezier(.19,1,.22,1), .9s opacity cubic-bezier(.19,1,.22,1) .25s;
  }

  .p-about__answers-item.in-viewport {
    opacity: 1;
    transform: translateX(0%);
  }

  .p-about__answers-item.above-viewport {
    transform: translateX(0%) !important;
    opacity: 1 !important;
    transition: none !important;
  }

  .p-about__answers-item:nth-of-type(2) {
    transition-delay: 0.15s;
  }

  .p-about__answers-item:nth-of-type(3) {
    transition-delay: 0.3s;
  }

  .p-about__head-item svg {
    fill: url('#dark-blue-gradient');
  }

  .about__advantage-icon {
    display: inline-block;
  }

  .p-about__advantages-item {
    text-align: center;
    color: #ffffff;
    font-size: 1em;
    padding: 0 1.2rem;
    width: 28%;
    opacity: 0;
    transform: translateY(40%);
    transition: 1.25s all cubic-bezier(.19,1,.22,1);
  }

  .p-about__advantages-item.in-viewport {
    opacity: 1;
    transform: translateY(0%);
  }

  .p-about__advantages-item.above-viewport {
    transform: translateY(0%) !important;
    opacity: 1 !important;
    transition: none !important;
  }

  .p-about__advantages-item:nth-of-type(2) {
    transition-delay: .12s;
  }

  .p-about__advantages-item:nth-of-type(3) {
    transition-delay: .24s;
  }

  .p-about__advantages-item .about__advantage-title {
    font-size: 1.375em;
    text-transform: uppercase;
    font-family: 'Futura PT heavy';
    line-height: 1.2;
    margin-top: 1.8rem;
  }

  .p-about__advantages-item .about__advantage-content {
    font-size: 1em;
    font-family: 'Futura PT medium';
    line-height: 1.125;
    margin-top: 1rem;
  }

  .p-about__advantages-item .about__advantage-icon svg {
    fill: #fff;
    max-height: 100%;
    width: auto;
    display: block;
  }

  .p-about__advantages-item .about__advantage-icon {
    height: 3.125rem;
    display: flex;
  }

  .p-about__head-item .about__advantage-icon {
    height: 2.8125rem;
    margin-right: 1.875rem;
  }

  .p-about__head-item svg {
    display: block;
    height: 100%;
    width: auto;
  }

  .p-about__answers-item .about__advantage-title {
    line-height: 1.15384615385;
    font-family: 'Futura PT demi';
    font-size: 1.625em;
    padding-left: 2.375rem;
    position: relative;
    width: 100%;
    min-height: 5.75rem;
  }

  .p-about__answers-item .about__advantage-content {
    margin-top: 2.2rem;
    width: 100%;
    font-size: 1em;
    letter-spacing: 0.001em;
    font-family: 'Futura PT medium';
  }

  .p-about__answers-item .about__advantage-content p {
    margin-bottom: 1.2rem;
  }

  .p-about__answers-item .about__advantage-content *:last-child {
    margin-bottom: 0;
  }

  .p-about__answers-item .about__advantage-title:before {
    content: '';
    display: inline-block;
    width: 5px;
    position: absolute;
    height: 5px;
    top: 7px;
    background-image: linear-gradient( 90deg, rgb(47,139,218) 0%, rgb(0,171,211) 100%);
    left: 0;
  }

  .p-about__head-item .about__advantage-title {
    letter-spacing: 0.001em;
    font-family: 'Futura PT heavy';
  }

  .p-about__head-item .about__advantage-content {
    margin-top: 1.5rem;
    line-height: 1.3;
  }

  .about__advantage-title {
    text-transform: uppercase;
  }

  @media screen and (max-width: 1500px) {
    .p-about__answers-item .about__advantage-title {
      font-size: 1.4em;
      min-height: 4.75rem;
    }

    .p-about__answers-item {
      width: 29%;
    }

    .p-about__answers-item .about__advantage-content {
      font-size: .95em;
      margin-top: 1.8rem;
    }
  }


  @media screen and (max-width: 1450px) {
    .p-about__advantages-item .about__advantage-title {
      font-size: 1.15em;
    }
  }

  @media screen and (max-width: 1350px) {
    .p-about__advantages-item {
      width: 33.333%;
    }

    .p-about__advantages-item .about__advantage-title {
      font-size: 1.1em;
    }

    .p-about__advantages-item .about__advantage-content {
      font-size: .9em;
    }
  }

  @media screen and (max-width: 1300px) {
    .p-about__head-item .about__advantage-icon {
      height: 2.2rem;
      margin-top: 1.5rem;
      margin-top: 0;
    }

    .p-about__head-item .about__advantage-title {
      font-size: .9em;
    }

    .p-about__head-item .about__advantage-content {
      margin-top: 1.2rem;
    }

    .p-about__head-item {
      margin-bottom: 5.5rem;
    }
  }

  @media screen and (max-width: 1200px) {
    .p-about__answers-item .about__advantage-title {
      font-size: 1.2em;
      padding-left: 1.7rem;
    }

    .p-about__answers-item .about__advantage-content {
      font-size: .92em;
      margin-top: 1.4rem;
    }
  }

  @media screen and (max-width: 1150px) {
    .p-about__advantages-item .about__advantage-title {
      font-size: 1em;
    }

    .p-about__advantages-item .about__advantage-content {
      font-size: .85em;
    }
  }


  @media screen and (max-width: 1050px) {
    .p-about__answers-item .about__advantage-title {
      font-size: 1em;
      padding-left: 1.6rem;
      min-height: 4.2rem;
    }

    .p-about__answers-item .about__advantage-content {
      font-size: .9em;
    }
  }

  @media screen and (max-width: 900px) {
    .p-about__answers-item {
      width: 100%;
    }

    .p-about__answers-item .about__advantage-title {
      min-height: auto;
    }

    .p-about__answers-item {
      margin-bottom: 3.2rem;
    }

    .p-about__answers-item:last-of-type {
      margin-bottom: 0rem;
    }

    .p-about__answers-item .about__advantage-content p {
      margin-bottom: .8rem;
    }
  }

  @media screen and (max-width: 767px) {
    .p-about__advantages-item .about__advantage-title {
      font-size: .8em;
    }
  }

  @media screen and (max-width: 600px) {
    .p-about__advantages-item {
      width: 100%;
      margin-bottom: 3rem;
    }

    .p-about__advantages-item .about__advantage-title {
      font-size: 1em;
    }

    .p-about__advantages-item .about__advantage-content {
      font-size: .9em;
    }

    .p-about__advantages-item:last-of-type {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 550px) {
    .p-about__head-item {
      width: 100%;
      margin-bottom: 3rem;
    }
  }
</style>
