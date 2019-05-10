<template>
  <div @mouseover="handleHover" @mouseleave="handleLeave" :class="['s-portfolio__item', classObject]">
    <nuxt-link v-in-viewport :to="item.url">
      <div class="s-portfolio__item-overlay"></div>
      <div class="s-portfolio__item-img" :style="{backgroundImage: `url(${this.item.img})`}"></div>
      <div class="s-portfolio__item-inner flex fd-c ai-s jc-c">
        <p class="s-portfolio__item-title">{{this.item.title}}</p>
        <div class="s-portfolio__item-info">
          <p class="s-portfolio__item-description">{{this.item.description}}</p>
          <p class="s-portfolio__item-category">{{this.item.category}}</p>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        required: true
      },
      view: {
        type: String,
        required: false
      }
    },
    data() {
      return {
        isHovered: false
      }
    },
    computed: {
      classObject() {
        return {
          'hovered': this.isHovered,
          'p-portfolio__item': this.view === 'PAGE_PORTFOLIO'
        }
      }
    },
    methods: {
      handleHover() {
        this.isHovered = true;
      },
      handleLeave() {
        this.isHovered = false;
      }
    }
  }
</script>

<style>
  @keyframes hoverEffect {
    0% {
      transform: scale(1.01);
    }

    100% {
      transform: scale(1.4);
    }
  }

  .s-portfolio__item-info {
    font-size: 0;
  }

  .s-portfolio__item:hover .s-portfolio__item-info {
    font-size: 100%;
  }

  .s-portfolio__item.hovered .s-portfolio__item-img {
    animation: hoverEffect 10s infinite alternate cubic-bezier(.46, .2, .44, .71);
  }

  .s-portfolio__item-img {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    transform: scale(1.01);
    background-position: center;
    -webkit-background-size: cover;
    z-index: 1;
    background-repeat: no-repeat;
  }

  .s-portfolio__item:nth-child(even) a {
    transform: translateX(10%);
    opacity: 0;
  }

  .s-portfolio__item:nth-child(odd) a {
    transform: translateX(-10%);
    opacity: 0;
  }

  .s-portfolio__item a.in-viewport {
    opacity: 1;
    transform: translateX(0%);
    transition: 1.3s transform cubic-bezier(.19,1,.22,1), 1s opacity cubic-bezier(.19,1,.22,1) 0.15s;
  }

  .s-portfolio__item a.above-viewport {
    transform: translateX(0%) !important;
    opacity: 1 !important;
    transition: none !important;
  }

  .s-portfolio__item.p-portfolio__item {
    width: calc(50% - 4px);
    margin-bottom: 8px;
  }

  .s-portfolio__item {
    width: 50%;
    overflow: hidden;
    font-size: 1.25em;
    position: relative;
    text-align: center;
    line-height: 1.3;
    letter-spacing: 0.05em;
    padding-bottom: 32.34%;
    transition: 1.3s transform cubic-bezier(.19,1,.22,1), 1s opacity cubic-bezier(.19,1,.22,1) .15s;
    position: relative;
    z-index: 0;
  }

  .s-portfolio__item-description {
    margin-bottom: .6rem;
  }

  .s-portfolio__item-description,
  .s-portfolio__item-category {
    transition: 0.45s all ease-out;
  }

  .s-portfolio__item-title {
    font-size: 1.4em;
    text-transform: uppercase;
    font-family: 'Futura PT heavy';
  }

  .s-portfolio__item a {
    display: block;
    width: 100%;
    padding: 1.4rem;
    height: 100%;
    color: #fff;
    position: relative;
    text-decoration: none;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
  }

  .s-portfolio__item-inner {
    height: 100%;
    width: 100%;
    position: relative;
    z-index: 2;
  }

  .s-portfolio__item-overlay:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, .5);
  }

  @media screen and (max-width: 1199px) {
    .s-portfolio__item {
      font-size: 1.15em;
    }
  }

  @media screen and (max-width: 991px) {
    .s-portfolio__item {
      font-size: 1em;
    }
  }

  @media screen and (max-width: 800px) {
    .s-portfolio__item {
      font-size: .85em;
    }
  }

  @media screen and (max-width: 550px) {
    .s-portfolio__item, .s-portfolio__item.p-portfolio__item {
      width: 100%;
      padding-bottom: 58%;
    }
  }
</style>
