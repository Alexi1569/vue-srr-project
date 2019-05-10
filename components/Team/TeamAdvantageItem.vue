<template>
  <div class="s-team__advantage">
    <p class="s-team__advantage-main">{{this.item.number}}</p>
    <p class="s-team__advantage-additional">{{this.item.text}}</p>
  </div>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style>
  .s-team__advantage {
    font-size: 1em;
    line-height: 1.2;
    margin-right: 1.5rem;
  }

  .s-team__advantage-main {
    font-size: 1.875em;
    letter-spacing: 0.025em;
    font-family: 'Futura PT demi';
  }

  .s-team__advantage-additional {
    font-family: 'Futura PT medium';
    color: #464646;
    letter-spacing: 0.005em;
    margin-top: .15rem;
    font-size: .875em;
  }

  @media screen and (max-width: 991px) {
    .s-team__advantage {
      width: 30%;
      text-align: center;
      margin-right: 0;
      margin-bottom: 1.5rem;
      font-size: .9em;
    }

    .s-team__advantage-main {
      font-size: 1.7em;
    }
  }
</style>
