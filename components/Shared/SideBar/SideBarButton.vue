<template>
  <a
    :class="[{'active': isActive}, `flex ai-c jc-c sidebar__button sidebar__button--${button.text}`]"
    v-html="button.icon"
    :href="button.href"
    target="_blank"
  >

  </a>
</template>

<script>
export default {
  props: {
    button: {
      type: Object,
      required: true
    },
    isActive: {
      default: false,
      type: Boolean
    }
  }
}
</script>
