<template>
  <div class="cursor-wrap" :class="classList">
    <span ref="dot" class="cursor cursor-dot"></span>
    <span ref="dotBg" class="cursor cursor-dot-bg"></span>
  </div>
</template>

<script>
  import $ from 'jquery';

  export default {
    data() {
      return {
        delay: 8,
        bg: {},
        dot: {
          x: 0,
          y: 0,
        },
        isVisible: false,
        isLarger: false,
        req: null,
        isInitialized: false
      }
    },
    computed: {
      classList() {
        return {
          'visible': this.isVisible,
          'large': this.isLarger,
          'transition': this.isInitialized,
        }
      }
    },
    methods: {
      initDot(e) {
        const {dot} = this.$refs;

        this.dot.x = e.pageX;
        this.dot.y = e.pageY;
        dot.style.top = `${this.dot.y}px`;
        dot.style.left = `${this.dot.x}px`;
        if (!this.isVisible) {
          this.isVisible = true;
        }

        if (!this.isInitialized) {
          this.isInitialized = true;
        }
      },
      initDotBg() {
        this.bg.x += (this.dot.x - this.bg.x) / this.delay;
        this.bg.y += (this.dot.y - this.bg.y) / this.delay;

        const {dotBg} = this.$refs;
        dotBg.style.top = `${this.bg.y}px`;
        dotBg.style.left = `${this.bg.x}px`;
        this.req = requestAnimationFrame(this.initDotBg);
      },
      initLeave() {
        this.isVisible = false;
      },
      initEnter() {
        this.isVisible = true;
      },
      initDown() {
        this.isLarger = true;
      },
      initUp() {
        this.isLarger = false;
      },
      initHoverIn() {
        this.isLarger = true;
      },
      initHoverOut() {
        this.isLarger = false;
      },
      initCustomHover() {
        $('body').delegate('a, button, .s-calculator__step-item, .s-calculator__steps, li, .s-clients__item, input, textarea', 'mouseenter', this.initHoverIn);
        $('body').delegate('a, button, .s-calculator__step-item, .s-calculator__steps, li, .s-clients__item, input, textarea', 'mouseleave', this.initHoverOut);
      },
      destroyCustomHover() {
        $('body').undelegate('a, button, .s-calculator__step-item, .s-calculator__steps, li, .s-clients__item, input, textarea', 'mouseenter', this.initHoverIn);
        $('body').undelegate('a, button, .s-calculator__step-item, .s-calculator__steps, li, .s-clients__item, input, textarea', 'mouseleave', this.initHoverOut);
      },
      onInit() {
        document.addEventListener('mousemove', this.initDot);
        document.addEventListener('mouseleave', this.initLeave);
        document.addEventListener('mouseenter', this.initEnter);
        document.addEventListener('mousedown', this.initDown);
        document.addEventListener('mouseup', this.initUp);
        this.initCustomHover();
        this.initDotBg();
      },
      onDestroy() {
        document.removeEventListener('mousemove', this.initDot);
        document.removeEventListener('mouseleave', this.initLeave);
        document.removeEventListener('mouseenter', this.initEnter);
        document.removeEventListener('mousedown', this.initDown);
        document.removeEventListener('mouseup', this.initUp);
        this.destroyCustomHover();
        cancelAnimationFrame(this.req);
      }
    },
    mounted() {
      this.$set(this.bg, 'x', window.innerWidth / 2);
      this.$set(this.bg, 'y', window.innerHeight / 2);

      if (!('ontouchstart' in document.documentElement)) {
        this.onInit();
      }
    },
    beforeDestroy() {
      if (!('ontouchstart' in document.documentElement)) {
        this.isVisible = false;
        this.onDestroy();
      }
    }
  }
</script>

<style lang="sass">
  .cursor
    position: absolute
    pointer-events: none
    z-index: 1000000
    border-radius: 50%
    opacity: 0
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    &-wrap
      transition: opacity .3s ease-in-out
      &.transition
        .cursor
          transition: opacity .3s ease-in-out, transform .3s ease-in-out, -webkit-transform .3s ease-in-out
      &.large
        .cursor
          &.cursor-dot-bg
            transform: translate(-50%, -50%) scale(2)
          &.cursor-dot
            transform: translate(-50%, -50%) scale(.75)
      &.visible
        .cursor
          &.cursor-dot-bg
            opacity: .65
          &.cursor-dot
            opacity: 1
    &.cursor-dot
      height: 0.28125vw
      width: 0.28125vw
      background-image: linear-gradient( 90deg, rgb(47,139,218) 0%, rgb(0,171,211) 100%)
    &.cursor-dot-bg
      width: 1.40625vw
      height: 1.40625vw
      background-image: linear-gradient( 90deg, rgb(47,139,218) 0%, rgb(0,171,211) 100%)
</style>
