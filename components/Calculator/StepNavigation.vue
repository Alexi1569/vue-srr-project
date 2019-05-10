<template>
  <div class="s-calculator__navigation">
    <p class="s-calculator__navigation-title">{{this.navigation.headTitle}}</p>
    <ul class="s-calculator__navigation-list">
      <StepNavigationItem
        v-for="(item, i) in stepsData"
        :key="i"
        :item="item.stepStatus"
        :answer="item.answer"
        @click.native="handleItemClick(i, $event)"
      />

    </ul>
  </div>
</template>

<script>
  import StepNavigationItem from '~/components/Calculator/StepNavigationItem.vue'

  export default {
    props: {
      current: {
        type: Number,
        required: true
      },
      stepsData: {
        type: Array,
        required: true
      },
      navigation: {
        type: Object,
        required: true
      },
    },
    components: {
      StepNavigationItem
    },
    methods: {
      handleItemClick(i, e) {
        this.$emit('itemClicked', i, e);
      }
    }
  }
</script>

<style>
  .s-calculator__navigation-title {
    text-transform: uppercase;
    font-family: 'Futura PT heavy';
    margin-bottom: 2.375rem;
  }

  .s-calculator__navigation {
    font-size: 1em;
  }

  .s-calculator__navigation-list {
    font-family: 'Futura PT medium';
    list-style: none;
  }

  .s-calculator__navigation-list li {
    color: #c1bfbf;
    font-family: 'Futura PT book';
    letter-spacing: 0.001em;
    line-height: 1.3;
    margin-bottom: .625rem;
    transition: 0.4s all ease-in;
    pointer-events: none;
    cursor: not-allowed;
    position: relative;
  }

  .s-calculator__navigation-icon {
    display: inline-block;
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    fill: #2a8ed9;
    width: .75rem;
    margin-right: .625rem;
  }

  .s-calculator__navigation-icon svg {
    display: inline-block;
    margin: auto;
    width: 100%;
    height: auto;
  }

  .s-calculator__navigation-list li:last-child {
    margin-bottom: 0;
  }



  .s-calculator__navigation-list li.active {
    color: #303030;
    font-family: 'Futura PT medium';
    cursor: pointer;
    pointer-events: initial;
  }

  .s-calculator__navigation-list li.answered {
    color: #c1bfbf;
    cursor: pointer;
    pointer-events: initial;
  }
</style>
