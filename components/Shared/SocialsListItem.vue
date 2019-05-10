<template>
  <li>
    <a :href="social.url" target="_blank" v-html="social.icon">
    </a>
  </li>
</template>

<script>
export default {
  props: {
    social: {
      type: Object,
      required: true
    }
  }
}
</script>
