<template>
  <a :href="href">{{number}}</a>
</template>

<script>
  export default {
    props: {
      number: {
        type: String,
        required: true
      }
    },
    computed: {
      href() {
        return `tel: ${this.number}`
      }
    }
  }
</script>
