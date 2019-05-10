<template>
  <div class="thank__message">
    <p class="thank__message-title">{{msg.title}}</p>
    <div class="thank__message-descr" v-html="msg.descr"></div>
  </div>
</template>

<script>
  export default {
    props: {
      msg: {
        type: Object,
        required: false
      }
    }
  }
</script>

<style lang="sass">
  .thank__message
    &-title
      font-size: 1.5em
      font-family: 'Futura PT heavy'
    &-descr
      font-size: 1em
      font-family: 'Futura PT medium'
      margin-top: 1.9rem
</style>
