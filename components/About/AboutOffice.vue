<template>
  <div :class="['p-office__item', classObject]">
    <v-zoom :img="item.img" :alt="item.alt" width="100%" ref="office">
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
    computed: {
      classObject() {
        return {
          'p-office__item--centered': this.item.centered
        }
      }
    },
  }
</script>


<style>
  .p-office__item img {
    display: block;
    width: 100%;
    height: auto;
  }

  .p-office__item {
    width: 33.333333%;
    cursor: pointer;
    margin-bottom: 25px;
    overflow: hidden;
  }

  .p-office__item.active {
    opacity: 1;
  }

  .p-office__item.p-office__item--centered {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media screen and (max-width: 1199px) {
    .p-office__item {
      margin-bottom: 15px;
    }

    .p-office__item.p-office__item--centered {
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  @media screen and (max-width: 991px) {
    .p-office__item {
      margin-bottom: 10px;
    }

    .p-office__item.p-office__item--centered {
      padding-left: 15px;
      padding-right: 15px;
    }
  }

  @media screen and (max-width: 767px) {
    .p-office__item,
    .p-office__item.p-office__item--centered {
      width: 50%;
      padding-right: 0;
      padding: 0 7.5px;
    }
  }

  @media screen and (max-width: 400px) {
    .p-office__item,
    .p-office__item.p-office__item--centered {
      width: 100%;
      padding-left: 0;
      padding-right: 0;
    }
  }
</style>
