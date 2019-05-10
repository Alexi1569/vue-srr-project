<template>
  <li>
    <button @click="handleClick" :class="[{'active': isActive}, 'sidebar__languages-item']">
      <slot></slot>
    </button>
  </li>
</template>

<script>
export default {
  props: {
    isActive: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    handleClick() {
      
    }
  }
}
</script>

<style>
  .sidebar__languages-item.active {
    color: #333333;
    border-bottom: 1px solid #333333;
  }
</style>
