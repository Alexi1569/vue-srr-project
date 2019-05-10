<template>
  <div :class="['portfolio__arrow flex ai-c jc-c', classObject]">
    <i class="portfolio__arrow-icon" v-html="arrow.icon"></i>
    <nuxt-link class="portfolio__arrow-link" :to="arrow.link">{{this.arrow.text}}</nuxt-link>
  </div>
</template>

<script>
  export default {
    props: {
      arrow: {
        type: Object,
        required: true
      },
      type: {
        type: String,
        required: true
      }
    },
    computed: {
      classObject() {
        return {
          'portfolio__arrow--prev': this.type === 'PREV',
          'portfolio__arrow--next': this.type === 'NEXT',
        }
      }
    }
  }
</script>

<style>
  .portfolio__arrow {
    font-size: .875em;
    cursor: pointer;
    color: #333333;
    line-height: 1.2;
    font-family: 'Futura PT medium';
    letter-spacing: 0.025em;
  }

  .portfolio__arrow--prev {
    text-align: left;
  }
  .portfolio__arrow--next {

    text-align: right;
  }

  .portfolio__arrow--prev .portfolio__arrow-icon {
    margin-right: 1.25rem;
  }

  .portfolio__arrow--next .portfolio__arrow-icon {
    margin-left: 1.25rem;
    order: 2;
  }

  .portfolio__arrow--next .portfolio__arrow-link {
    order: 1;
  }

  .portfolio__arrow-icon {
    width: 19px;
    margin-top: 3px;
    display: inline-block;
  }

  .portfolio__arrow-icon svg {
    display: block;
    width: 100%;
    height: auto;
    fill: #7a7979;
  }

  .portfolio__arrow-link {
    color: inherit;
    text-decoration: none;
  }

  @media screen and (max-width: 450px) {
    .portfolio__arrow {
      font-size: .8em;
    }

    .portfolio__arrow--prev .portfolio__arrow-icon {
      margin-right: .8rem;
    }

    .portfolio__arrow--next .portfolio__arrow-icon {
      margin-left: .8rem;
    }
  }
</style>
