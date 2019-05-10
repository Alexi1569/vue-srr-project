<template>
  <section class="s-instagram">
    <div class="container">
      <div class="s-instagram__wrapper">
        <div v-in-viewport class="s-instagram__logo flex jc-c">
          <i v-html="instagram.logo"></i>
        </div>
        <div class="s-instagram__items flex fw-w jc-fs ai-s">
          <Item
            v-for="item, i in items"
            :key="i"
            :item="item"
            v-in-viewport
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import InstagramItem from '~/components/Instagram/InstagramItem'
  import axios from 'axios'
  import jsonpAdapter from 'axios-jsonp'

  export default {
    components: {
      Item: InstagramItem
    },
    props: {
      instagram: {
        type: Object,
        required: true
      }
    },
    mounted() {
      axios({
        url: `https://api.instagram.com/v1/users/self/media/recent/?access_token=7582844000.1677ed0.4533c36a2dce45b79e7e14a9b2a435a3`,
        adapter: jsonpAdapter
      })
        .then(res => this.items = res.data.data.filter((el, i) => i <= 7))
        .catch(err => console.error(err));
    },
    data() {
      return {
        items: []
      }
    }
  }
</script>

<style>
  .s-instagram {
    background-color: #f0f5f7;
    padding: 3.4375rem 0 5.625rem;
    margin-top: 7.5rem;
  }

  .s-instagram__logo i {
    display: inline-block;
    width: 117px;
  }

  .s-instagram__logo {
    transform: scale(0);
    opacity: 0;
    transition: .3s all ease-in;
  }

  .s-instagram__logo.in-viewport {
    opacity: 1;
    transform: scale(1);
  }

  .s-instagram__logo.above-viewport {
    transform: scale(1) !important;
    opacity: 1 !important;
    transition: none !important;
  }

  .s-instagram__logo svg {
    display: block;
    height: auto;
    fill: #363636;
    width: 100%;
  }

  .s-instagram__wrapper {
    width: 79.28%;
    margin-left: auto;
    margin-right: auto;
  }

  .s-instagram__items {
    margin-bottom: -15px;
    margin-top: 2.25rem;
  }

  @media screen and (max-width: 991px) {
    .s-instagram__wrapper {
      width: 100%;
    }
  }
</style>
