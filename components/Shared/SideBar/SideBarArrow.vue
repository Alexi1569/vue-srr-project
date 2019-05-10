<template>
  <a 
    @click.prevent="handleClick"
    href="#s-services"
    :class="[{'show': offsetY > 300}, 'sidebar__arrow']"
  >
    <span class="sidebar__text sidebar__arrow-text">{{this.arrow.text}}</span>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 64 64"><g><path d="M3.352,48.296l28.56-28.328l28.58,28.347c0.397,0.394,0.917,0.59,1.436,0.59c0.52,0,1.04-0.196,1.436-0.59   c0.793-0.787,0.793-2.062,0-2.849l-29.98-29.735c-0.2-0.2-0.494-0.375-0.757-0.475c-0.75-0.282-1.597-0.107-2.166,0.456   L0.479,45.447c-0.793,0.787-0.793,2.062,0,2.849C1.273,49.082,2.558,49.082,3.352,48.296z"/></g></svg>
  </a>
</template>

<script>
  export default {
    methods: {
      handleScroll(e) {
        this.offsetY = window.pageYOffset;
      },
      handleClick() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }
    },
    props: {
      arrow: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        offsetY: 0,
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
</script>

<style>
  .sidebar__arrow-text {
    margin-bottom: 0.375rem;
    display: block;
  }

  .sidebar__arrow.show {
    opacity: 1;
    transform: translateX(0%);
  }

  .sidebar__arrow {
    text-align: center;
    opacity: 0;
    transform: translateX(250%);
    transition: 0.4s all ease-out;
  }

  .sidebar__arrow svg {
    width: 1.1875rem;
    fill: #7a7979;
    display: inline-block;
  }
</style>
