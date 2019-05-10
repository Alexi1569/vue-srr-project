<template>
  <a :href="item.link" target="_blank" :style="{backgroundImage: `url(${item.images.standard_resolution.url})`}" class="s-instagram__item"></a>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        required: true
      }  ,
      view: {
        type: String,
        required: false
      }
    }
  }
</script>

<style>
  .s-instagram__item {
    display: inline-block;
    background-position: center;
    -webkit-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    width: calc(25% - 11.25px);
    margin-right: 15px;
    margin-bottom: 15px;
    padding-bottom: calc(25% - 11.25px);
    opacity: 0;
    transform: translateY(-5rem);
    transition: 1.5s transform cubic-bezier(.19,1,.22,1), 1.2s opacity cubic-bezier(.19,1,.22,1) .15s;
  }

  .s-instagram__item:nth-of-type(2) {
    transition-delay: 0.1s;
  }

  .s-instagram__item:nth-of-type(3) {
    transition-delay: 0.2s;
  }

  .s-instagram__item:nth-of-type(4) {
    transition-delay: 0.3s;
  }

  .s-instagram__item:nth-of-type(5) {
    transition-delay: 0.4s;
  }

  .s-instagram__item:nth-of-type(6) {
    transition-delay: 0.5s;
  }

  .s-instagram__item:nth-of-type(7) {
    transition-delay: 0.6s;
  }

  .s-instagram__item:nth-of-type(8) {
    transition-delay: 0.7s;
  }

  .s-instagram__item.in-viewport {
    opacity: 1;
    transform: translateY(0%);
  }

  .s-instagram__item.above-viewport {
    transform: translateY(0%) !important;
    opacity: 1 !important;
    transition: none !important;
  }

  .s-instagram__item:nth-child(4n) {
    margin-right: 0;
  }

  @media screen and (max-width: 550px) {
    .s-instagram__item {
      padding-bottom: calc(50% - 7.5px);
      width: calc(50% - 7.5px);
    }

    .s-instagram__item:nth-child(2n) {
      margin-right: 0;
    }
  }
</style>
