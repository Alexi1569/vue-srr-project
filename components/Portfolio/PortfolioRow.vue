<template>
  <div
    v-in-viewport
    :class="['portfolio__row flex ai-fs jc-fs', classObject]"
  >
    <p class="portfolio__row-title">{{this.item.title}}</p>
    <div class="portfolio__row-content">
      <div class="portfolio__row-text" v-html="item.text"></div>
      <a class="portfolio__row-link" target="_blank" v-if="item.link" :href="url">{{this.item.link}}</a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        required: true
      },
      type: {
        type: String,
        required: false
      }
    },
    computed: {
      classObject() {
        return {
          'portfolio__row--small': this.type === 'SMALL'
        }
      },
      url() {
        if (this.item.link) {
          return `http://${this.item.link}`;
        }
      }
    }
  }
</script>

<style>
  .portfolio__row {
    font-size: 1em;
    width: 71%;
    margin-left: auto;
    margin-bottom: 4.375rem;
    margin-right: auto;
    opacity: 0;
    transition: .45s all ease-in;
  }

  .portfolio__row:nth-of-type(2n) {
    transform: translateX(10%);
  }

  .portfolio__row:nth-of-type(2n+1) {
    transform: translateX(-10%);
  }

  .portfolio__row.in-viewport {
    opacity: 1;
    transform: translateX(0%);
  }

  .portfolio__row.above-viewport {
    transform: translateX(0%) !important;
    opacity: 1 !important;
    transition: none !important;
  }

  .portfolio__row:last-of-type {
    margin-bottom: 0;
  }

  .portfolio__row.portfolio__row--small:last-of-type {
    margin-bottom: 0;
  }

  .portfolio__row.portfolio__row--small {
    margin-bottom: 2.25rem;
  }

  .portfolio__row.portfolio__row--small .portfolio__row-title {
    font-size: 1.5em;
  }

  .portfolio__row-content {
    font-family: 'Futura PT medium';
    font-size: 1.0625em;
    line-height: 1.11764705882;
    flex: 1;
    padding-left: 30px;
  }

  .portfolio__row-title {
    font-size: 1.875em;
    width: 35%;
    text-transform: uppercase;
    font-family: 'Futura PT demi';
  }

  .portfolio__row-text p {
    margin-bottom: 1rem;
  }

  .portfolio__row-text *:last-child {
    margin-bottom: 0;
  }

  .portfolio__row-link {
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid #777777;
    margin-top: 1rem;
    color: inherit;
    transition: .3s all ease;
  }

  .portfolio__row-link:hover {
    color: #2b8ed9;
  }

  @media screen and (max-width: 1550px) {
    .portfolio__row {
      width: 80%;
    }
  }

  @media screen and (max-width: 1199px) {

    .portfolio__row-title {
      font-size: 1.5em;
    }

    .portfolio__row.portfolio__row--small .portfolio__row-title {
      font-size: 1.3em;
    }
  }

  @media screen and (max-width: 991px) {
    .portfolio__row {
      width: 100%;
    }
  }

  @media screen and (max-width: 850px) {

    .portfolio__row-title {
      font-size: 1.3em;
    }

    .portfolio__row.portfolio__row--small .portfolio__row-title {
      font-size: 1.1em;
    }

    .portfolio__row-content {
      font-size: 1em;
    }
  }

  @media screen and (max-width: 550px) {
    .portfolio__row {
      flex-wrap: wrap;
    }

    .portfolio__row-title {
      width: 100%;
    }

    .portfolio__row-content {
      padding-left: 0;
      width: 100%;
      flex-basis: 100%;
      margin-top: 1rem;
    }
  }
</style>
