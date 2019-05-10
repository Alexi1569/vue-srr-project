<template>
  <div class="p-blog__item-date">{{this.date}}</div>
</template>

<script>
  export default {
    props: {
      date: {
        type: String,
        required: true
      }
    }
  }
</script>

<style>
  .p-blog__item-date {
    font-size: .875em;
    font-family: 'Futura PT medium';
    letter-spacing: 0.001em;
    color: #8f8f8f;
  }
</style>
