<template>
  <div class="s-calculator__steps inline-flex ai-c jc-fs">
    <StepBackArrow
      :current="current"
    />

    <p class="s-calculator__steps-title">{{this.counter.step}} <span>{{this.current}}</span> {{this.counter.of}} <span>{{this.total}}</span></p>
    <div class="s-calculator__progress">
      <div class="s-calculator__progress-line" :style="{width: this.stepLine + '%'}"></div>
    </div>
  </div>
</template>

<script>
  import StepBackArrow from '~/components/Calculator/StepBackArrow.vue'

  export default {
    props: {
      current: {
        type: Number,
        required: true
      },
      total: {
        type: Number,
        required: true
      },
      counter: {
        type: Object,
        required: true
      },
    },
    components: {
      StepBackArrow
    },
    computed: {
      stepLine() {
        return (this.current / this.total) * 100;
      }
    }
  }
</script>

<style>
  .s-calculator__steps {
    margin-bottom: 2.8125rem;
    cursor: pointer;
    position: relative;
  }

  .s-calculator__progress {
    width: 10.625rem;
    height: 0.375rem;
    border-radius: 0.1875rem;
    background-color: #fff;
  }

  .s-calculator__progress-line {
    background-color: #2a8ed9;
    border-radius: 0.1875rem;
    transition: 0.4s all ease-out;
    width: 0;
    height: 100%;
  }

  .s-calculator__steps-title span {
    display: inline-block;
    margin: 0 0.1rem;
  }

  .s-calculator__steps-title {
    color: #333333;
    font-size: .75em;
    margin-right: 1rem;
    font-family: 'Futura PT heavy';
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
</style>
