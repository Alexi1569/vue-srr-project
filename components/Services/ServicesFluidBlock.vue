<template>
  <div :style="{paddingRight: this.paddingRight}" class="fluid__form">
    <div class="fluid__form-inner flex jc-c ai-c">
      <Button
        :btn="fluid.questionBtn"
        :view="fluid.questionBtn.view"
        @click.native="showQuestionModal"
      />
      <Button
        :btn="fluid.projectBtn"
        :view="fluid.projectBtn.view"
        @click.native="showRequestModal"
      />
    </div>
  </div>
</template>

<script>
  import Button from '~/components/Shared/Button'

  export default {
    components: {
      Button
    },
    methods: {
      showRequestModal() {
        this.$store.commit('showRequestModal');
      },
      showQuestionModal() {
        this.$store.commit('showQuestionModal');
      },
    },
    computed: {
      isScrollBlocked() {
        return this.$store.state.isScrollBlocked;
      },
      paddingRight() {
        if (this.isScrollBlocked) {
          return `${window.innerWidth - document.body.getBoundingClientRect().width}px`;
        } else {
          return '0px';
        }
      },
    },
    props: {
      fluid: {
        type: Object,
        require: true
      }
    }
  }
</script>

<style>
  .fluid__form {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-color: #ffffff;
    z-index: 1;
    padding: 1.6875rem 0;
  }

  @media screen and (max-width: 650px) {
    .fluid__form {
      display: none;
    }
  }
</style>
