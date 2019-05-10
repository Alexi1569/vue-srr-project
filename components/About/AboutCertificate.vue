<template>
  <div class="about__certificate">
    <v-zoom :img="item.img" :alt="item.alt" width="100%">
    </v-zoom>
  </div>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        required: true
      }
    },
  }
</script>

<style>
  .about__certificate {
    width: calc(25% - 22.5px);
    margin-right: 30px;
    margin-bottom: 30px;
    overflow: hidden;
  }

  .about__certificate:nth-of-type(4n) {
    margin-right: 0;
  }

  @media screen and (max-width: 991px) {
    .about__certificate {
      width: calc(33.3333% - 13.3333333333px);
      margin-right: 20px;
      margin-bottom: 20px;
    }

    .about__certificate:nth-of-type(3n) {
      margin-right: 0;
    }

    .about__certificate:nth-of-type(4n) {
      margin-right: 20px;
    }
  }

  @media screen and (max-width: 600px) {
    .about__certificate {
      width: calc(50% - 10px);
    }

    .about__certificate:nth-of-type(2n) {
      margin-right: 0;
    }

    .about__certificate:nth-of-type(3n) {
      margin-right: 20px;
    }

    .about__certificate:nth-of-type(4n) {
      margin-right: 0px;
    }
  }
</style>
