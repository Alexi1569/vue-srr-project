<template>
  <a @click.prevent="handleClick" href="#s-services" class="mouse flex fd-c ai-c jc-c">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 44 72" style="enable-background:new 0 0 44 72;" xml:space="preserve"><g><path d="M22,72C9.9,72,0,62.1,0,50V22C0,9.9,9.9,0,22,0s22,9.9,22,22v28C44,62.1,34.1,72,22,72z M22,4C12.1,4,4,12.1,4,22v28 c0,9.9,8.1,18,18,18s18-8.1,18-18V22C40,12.1,31.9,4,22,4z"/></g><g><path d="M22,25c-1.1,0-2-0.9-2-2v-8c0-1.1,0.9-2,2-2s2,0.9,2,2v8C24,24.1,23.1,25,22,25z"/></g></svg>
    <span class="mouse__line"></span>
  </a>
</template>

<script>
export default {
  methods: {
    handleClick() {
      var target = this.$el.getAttribute('href').split('#')[1];
      const offsetY = document.getElementById(target).getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: offsetY,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style>
  .mouse {
    height: 3.125rem;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  @keyframes mouseLineAnim {
    from {transform: translateY(100%)}
    to {transform: translateY(0%)}
  }

  @keyframes mouseIconAnim {
    from {transform: translateY(-30%)}
    to {transform: translateY(0%)}
  }

  .mouse__line {
    display: inline-block;
    margin: 0.25rem auto 0;
    width: 1px;
    flex: 1;
    transition: .3s all ease;
    background-color: #ffffff;
    animation: mouseLineAnim 2s infinite ease-in-out;
  }

  .mouse svg {
    display: block;
    fill: #fff;
    transition: .3s all ease;
    height: 1.3rem;
    animation: mouseIconAnim 2s infinite ease-in-out;
  }
</style>
