<template>
  <Toggler
    view="PAGE_SERVICES_FAQ"
  >
    <template slot="top">
      <div class="faq__item-question">
        <i><svg version="1.1" fill="url('#blue-gradient')" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 52.5 55.5" style="enable-background:new 0 0 52.5 55.5;" xml:space="preserve"><polygon points="0,0 52.5,27.7 0,55.5 "/></svg></i>
        <p>{{this.item.question}}</p>
      </div>
    </template>
    <template slot="bottom">
      <div class="faq__item-answer" v-html="item.answer"></div>
    </template>
  </Toggler>
</template>

<script>
  import Toggler from '~/components/Shared/Toggler'

  export default {
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    components: {
      Toggler
    },
  }
</script>

<style>
  .faq__item {
    font-size: 1em;
    margin-bottom: 1.375rem;
  }

  .faq__item:last-child {
    margin-bottom: 0;
  }

  .faq__item-question {
    font-size: 1em;
    font-family: 'Futura PT demi';
    padding-left: 2rem;
    position: relative;
    cursor: pointer;
    margin-bottom: .75rem;
  }

  .faq__item-question i {
    display: inline-block;
    position: absolute;
    left: 0;
    top: 2px;
    width: 16px;
    transition: 0.25s all ease-in;
  }

  .faq__item-question svg {
    display: block;
    width: 100%;
    height: auto;
  }

  .faq__item-answer {
    font-size: 0.9375em;
    color: #636363;
    font-family: 'Futura PT medium';
    line-height: 1.2;
    padding-left: 2rem;
  }

  .faq__item-answer p {
    margin-bottom: 1rem;
  }

  .faq__item-answer p:last-child {
    margin-bottom: 0rem;
  }

  @media screen and (max-width: 500px) {
    .faq__item {
      font-size: .9em;
    }
  }
</style>
