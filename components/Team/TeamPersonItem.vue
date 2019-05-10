<template>
  <div v-if="view === 'SECTION_TEAM'" class="s-team__item">
    <div class="s-team__item-img">
      <img :src="item.img" alt="item.name">
    </div>
    <div class="s-team__item-info">
      <p class="s-team__item-name">{{this.item.name}}</p>
      <p class="s-team__item-position" v-html="item.position"></p>
    </div>
  </div>
  <div class="p-team__item flex fd-c ai-c jc-fs" v-else-if="view === 'PAGE_TEAM'">
    <div :style="{backgroundImage: `url(${item.img})`}" class="p-team__item-img"></div>
    <div :style="{backgroundImage: `url(${item.img})`}" class="p-team__item-img p-team__item-img--bg"></div>
    <div class="p-team__item-info">
      <p class="p-team__item-name">{{this.item.name}}</p>
      <p class="p-team__item-position">{{this.item.position}}</p>
      <SocialsList
        v-if="item.socials"
        view="PAGE_TEAM"
        :socials="item.socials"
      />
    </div>
  </div>
</template>

<script>
  import SocialsList from '~/components/Shared/SocialsList'

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
    components: {
      SocialsList
    },
    computed: {
      classObject() {
        return {
          's-team__item--main': this.view === 'SECTION_TEAM',
        }
      }
    }
  }
</script>

<style lang="sass">
  @for $i from 1 through 50
    .p-team__item:nth-child(#{$i})
      transition-delay: $i / 20 + s
</style>

<style>
  .s-team__item {
    width: 21.1%;
    font-size: 1em;
    margin-right: 1.5rem;
    opacity: 0;
    transition: 1s all cubic-bezier(.19,1,.22,1);
    transform: translateY(35%);
  }

  .s-team__item:nth-child(2) {
    transition-delay: 0.1s;
  }

  .s-team__item:nth-child(3) {
    transition-delay: 0.15s;
  }

  .s-team__item:nth-child(4) {
    transition-delay: 0.2s;
  }

  .s-team__item.in-viewport {
    opacity: 1;
    transform: translateY(0);
  }

  .s-team__item.above-viewport {
    transform: translateY(0%) !important;
    opacity: 1 !important;
    transition: none !important;
  }

  .s-team__item-img {
    width: 100%;
    margin: 0 auto;
  }

  .s-team__item-img img {
    max-width: 100%;
    margin: 0 auto;
    height: auto;
    display: block;
  }

  .s-team__item-name {
    font-family: 'Futura PT demi';
    letter-spacing: 0.025em;
    text-transform: uppercase;
  }

  .s-team__item-info {
    margin-top: 1.5rem;
  }

  .s-team__item-position {
    font-family: 'Futura PT medium';
    color: #575757;
    font-size: .875em;
    line-height: 1.05;
    margin-top: .625rem;
  }

  .p-team__item {
    transform: translateY(-20%);
    opacity: 0;
    transition: 1.35s transform cubic-bezier(.19,1,.22,1), .8s opacity cubic-bezier(.19,1,.22,1);
  }

  .p-team__item.in-viewport {
    opacity: 1;
    transform: translateY(0%);
  }

  .p-team__item-name {
    text-transform: uppercase;
    font-size: 1.125em;
    font-family: 'Futura PT bold';
    letter-spacing: 0.025em;
    transition: .3s all ease-in;
  }

  .p-team__item-position {
    font-family: 'Futura PT medium';
    font-size: .875em;
    letter-spacing: 0.015em;
    transition: .3s all ease-in;
  }

  .p-team__item-info {
    position: relative;
    z-index: 3;
    text-align: center;
  }

  .p-team__item-img:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, .3);
  }

  .p-team__item-img {
    background-position: center;
    -webkit-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    left: 0;
    z-index: 1;
    top: 0;
    bottom: 0;
    transition: .55s all ease-in;
    right: 0;
    clip-path: circle(27% at 50% 37%);
    height: 100%;
    width: 100%;
  }

  .p-team__item-img.p-team__item-img--bg {
    clip-path: circle(27% at 50% 37%);
    z-index: 2;
  }

  .p-team__item-img.p-team__item-img--bg:before {
    display: none;
  }

  .p-team__item {
    width: 19.5%;
    position: relative;
    font-size: 1em;
    margin-right: 0.625%;
    max-width: 300px;
    z-index: 0;
    max-height: 380px;
    min-height: 380px;
    padding: 17.2rem 1.2rem 1.2rem;
  }

  .p-team__item:nth-of-type(5n) {
    margin-right: 0;
  }

  .p-team__item:hover .p-team__item-img {
    clip-path: circle(100% at 50% 37%);
  }

  .p-team__item:hover .p-team__socials {
    opacity: 1;
  }

  .p-team__item:hover .p-team__item-img.p-team__item-img--bg {
    clip-path: circle(27% at 50% 37%);
  }

  .p-team__item:hover  {
    color: #ffffff;
  }

  @media screen and (max-width: 1650px) {
    .p-team__item {
      padding-top: 15rem;
      min-height: 365px;
    }
  }

  @media screen and (max-width: 1450px) {
    .p-team__item {
      width: 23.5%;
      margin-right: 2%;
      padding-top: 16rem;
      min-height: 335px;
    }

    .p-team__item:nth-of-type(5n) {
      margin-right: 2%;
    }

    .p-team__item:nth-of-type(4n) {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 1150px) {
    .p-team__item {
      width: 30%;
      margin-right: 5%;
      padding-top: 17rem;
    }

    .p-team__item:nth-of-type(5n) {
      margin-right: 5%;
    }

    .p-team__item:nth-of-type(4n):not(m:nth-of-type(3n)) {
      margin-right: 5%;
    }

    .p-team__item:nth-of-type(3n) {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 900px) {
    .s-team__item {
      width: 45%;
      margin-right: 0;
      margin-bottom: 2.5rem;
    }

    .p-team__item {
      width: 31%;
      margin-right: 3.5%;
    }

    .p-team__item:nth-of-type(5n) {
      margin-right: 3.5%;
    }

    .p-team__item:nth-of-type(4n):not(m:nth-of-type(3n)) {
      margin-right: 3.5%;
    }
  }

  @media screen and (max-width: 600px) {
    .p-team__item {
      width: 47%;
      margin-right: 6%;
      padding-top: 17rem;
    }

    .p-team__item:nth-of-type(5n) {
      margin-right: 6%;
    }

    .p-team__item:nth-of-type(4n) {
      margin-right: 6%;
    }

    .p-team__item:nth-of-type(3n) {
      margin-right: 6%;
    }

    .p-team__item:nth-of-type(2n) {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 450px) {
    .p-team__item {
      width: 100%;
      margin-right: 0;
      margin-left: auto !important;
      margin-right: auto !important;
      padding-top: 20rem;
    }

    .p-team__item:nth-of-type(5n) {
      margin-right: 0;
    }

    .p-team__item:nth-of-type(4n) {
      margin-right: 0;
    }

    .p-team__item:nth-of-type(3n) {
      margin-right: 0;
    }

    .p-team__item:nth-of-type(2n) {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 400px) {
    .p-team__item-img.p-team__item-img--bg {
      clip-path: circle(22% at 50% 37%);
    }

    .p-team__item-img {
      clip-path: circle(22% at 50% 37%);
    }
  }
</style>
