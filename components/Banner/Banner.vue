<template>
  <section :style="styleObject" class="s-banner flex ai-c jc-c text-center">
    <div class="s-banner__inner">
      <div class="container flex fd-c jc-c ai-c">
        <p ref="bannerTitle" class="s-banner__title">{{this.banner.title}}</p>
        <div ref="bannerSubtitle" class="s-banner__subtitle">
          <span ref="bannerDescr">Web Development.</span>
        </div>
      </div>
    </div>
    <slot></slot>
  </section>
</template>

<script>
  import {TimelineLite} from 'gsap';
  import Typed from 'typed.js';

export default {
  mounted() {
    const {bannerTitle, bannerDescr, bannerSubtitle} = this.$refs;
    const tl = new TimelineLite();
    const bannerStr = bannerTitle.textContent;
    bannerTitle.textContent = '';

    bannerStr.split('').forEach(el => {
      const item = document.createElement('span');
      item.textContent = el;
      bannerTitle.appendChild(item);
    });

    tl.set(bannerTitle, {transformPerspective: 400, transformStyle: 'preserve-3d'});

    tl.to(bannerTitle, 0, {opacity: 1})
      .staggerFromTo(bannerTitle.querySelectorAll('span'), 1, {opacity: 0, bottom: -50, rotationY: 150, rotationX: 150}, {opacity: 1, bottom: 0, rotationY: 0, rotationX: 0}, 0.1)
      .fromTo(bannerSubtitle, 1, {opacity: 0, bottom: -30, scale: .85}, {opacity: 1, bottom: 0, scale: 1}, '-=0.25');

    const typed = new Typed(bannerDescr, {
      strings: ['Web Development.', 'SEO.', 'SMM.'],
      typeSpeed: 40,
      backSpeed: 40,
      startDelay: 2000,
      onComplete: (self) => {
        self.cursor.style.opacity = '0';
        self.cursor.style.animation = 'none';
      }
    });
  },
  props: {
    view: {
      required: true,
      type: String
    },
    banner: {
      type: Object,
      required: true
    }
  },
  computed: {
    styleObject() {
      return {
        backgroundImage: `url(${this.banner.img})`
      }
    }
  }
}
</script>

<style>
  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  body .s-banner__subtitle span.typed-cursor,
  body .typed-cursor.typed-cursor--blink {
    animation: blink 1s infinite;
  }

  .s-banner {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: #fff;
    letter-spacing: 0.025em;
    position: relative;
    width: 100%;
    min-height: 45rem;
  }

  .s-banner__inner {
    padding: 4rem 2rem;
    width: 100%;
  }

  .s-banner__title {
    font-family: 'Futura PT heavy';
    font-size: 9.37500em;
    text-transform: uppercase;
    line-height: 1;
    opacity: 0;
  }

  .s-banner__title span {
    opacity: 0;
    position: relative;
  }

  .s-banner__subtitle {
    font-size: 2.875em;
    opacity: 0;
    position: relative;
  }

  .s-banner__subtitle span {
    transition: .25s all ease;
  }


  @media screen and (max-width: 1300px) {
    .s-banner__title {
      font-size: 7.5em;
    }

    .s-banner__subtitle {
      font-size: 2.3em;
    }
  }

  @media screen and (max-width: 1199px) {
    .s-banner__title {
      font-size: 5.8em;
    }

    .s-banner {
      min-height: 40rem;
    }

    .s-banner__subtitle {
      font-size: 1.9em;
    }
  }

  @media screen and (max-width: 991px) {
    .s-banner__title {
      font-size: 4.5em;
    }

    .s-banner {
      min-height: 30rem;
    }

    .s-banner__subtitle {
      font-size: 1.7em;
      margin-top: .7rem;
    }
  }

  @media screen and (max-width: 767px) {
    .s-banner__title {
      font-size: 3.8em;
    }

    .s-banner {
      min-height: 25rem;
    }

    .s-banner__subtitle {
      font-size: 1.6em;
      margin-top: 1rem;
    }
  }

  @media screen and (max-width: 450px) {
    .s-banner__title {
      font-size: 2.6em;
    }

    .s-banner {
      min-height: 22rem;
    }

    .s-banner__subtitle {
      font-size: 1.3em;
      margin-top: 1rem;
    }
  }
</style>

