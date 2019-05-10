<template>
  <div class="portfolio__counter">
    <div class="portfolio__counter-inner">
      <b>{{this.numbers.current}}</b>/<span>{{this.numbers.total}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      numbers: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style>
  .portfolio__counter {
    text-align: center;
    font-size: 1em;
    font-family: 'Futura PT medium';
    margin: 0 10rem;
  }

  .portfolio__counter-inner {
    font-size: .875em;
  }

  .portfolio__counter-inner b {
    color: #2d8cda;
    font-size: 1.42857142857em;
    font-weight: normal;
    font-family: 'Futura PT demi';
  }

  .portfolio__counter-inner span {
    font-size: 0.85714285714em;
  }

  @media screen and (max-width: 767px) {
    .portfolio__counter {
      margin: 0 4rem;
    }
  }

  @media screen and (max-width: 450px) {
    .portfolio__counter {
      margin: 0 20px;
    }
  }
</style>
