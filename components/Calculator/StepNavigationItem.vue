<template>
  <li :class="[classObject]">
    <i class="s-calculator__navigation-icon" v-if="answer.isAnswered">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.5 40.3"><path d="M50.2.038l-2.1 2.1c-10.1 10.1-19.3 20.1-29.1 30l-12.9-10.2-2.3-1.9-3.8 4.7 2.3 1.9 15 12 2.1 1.7 1.9-1.9c10.7-10.8 20.4-21.4 31-32l2.1-2.1-4.2-4.3z"/></svg>
    </i>
    <span>{{this.item.title}}</span>
  </li>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        required: true
      },
      answer: {
        type: Object,
        required: true
      }
    },
    computed: {
      classObject() {
        return {
          'active': this.item.isActive,
          'answered': this.answer.isAnswered
        }
      }
    }
  }
</script>
