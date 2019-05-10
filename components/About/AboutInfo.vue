<template>
  <div class="p-about__info">
    <p class="p-about__info-title">{{info.caption}}</p>
    <div class="p-about__info-content" v-html="info.content"></div>
  </div>
</template>

<script>
  export default {
    props: {
      info: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style>
  .p-about__info-title {
    font-size: 1.625em;
    text-transform: uppercase;
    font-family: 'Futura PT heavy';
    letter-spacing: 0.025em;
  }

  .p-about__info {
    transform: translateX(30%);
    opacity: 0;
    transition: 1.2s all cubic-bezier(.19,1,.22,1);
  }

  .p-about__info.in-viewport,
  .p-about__info.above-viewport {
    transform: translateX(0) !important;
    opacity: 1 !important;
  }

  .p-about__info-content {
    margin-top: 1.5rem;
    font-size: 1em;
    font-family: 'Futura PT medium';
    line-height: 1.125;
  }

  .p-about__info-content p {
    margin-bottom: 1rem;
  }

  .p-about__info-content *:last-child {
    margin-bottom: 0;
  }

  .p-about__info-content b {
    color: #676767;
    font-weight: normal;
  }

  .p-about__info {
    width: 31.3%;
  }

  @media screen and (max-width: 1300px) {
    .p-about__info {
      width: 40%;
    }

    .p-about__info-title {
      font-size: 1.4em;
    }

    .p-about__info-content {
      font-size: .95em;
    }
  }

  @media screen and (max-width: 1100px) {
    .p-about__info-title {
      font-size: 1.15em;
    }

    .p-about__info-content {
      font-size: .9em;
    }
  }

  @media screen and (max-width: 900px) {
    .p-about__info {
      width: 100%;
      order: 1;
      margin-bottom: 2.5rem;
    }
  }
</style>
