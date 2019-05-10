<template>
  <ul class="sidebar__languages" v-in-viewport>
    <SideBarLanguagesItem
      v-for="language, i in languages"
      :key="i"
      @handleLanguageChange="handleLanguageChange"
      :isActive="language.isActive"
    >
      {{language.text}}
    </SideBarLanguagesItem>
  </ul>
</template>

<script>
import SideBarLanguagesItem from './SideBarLanguagesItem.vue'

export default {
  components: {
    SideBarLanguagesItem
  },
  props: {
    languages: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleLanguageChange() {
      this.$store.commit('changeLanguage');
    }
  }
}
</script>

<style>
  .sidebar__languages {
    list-style-type: none;
    transform: translateY(-35%);
    opacity: 0;
    transition: 0.15s all ease-in 0.1s;
  }

  .sidebar__languages.in-viewport, .sidebar__languages.above-viewport, .sidebar__languages.below-viewport {
    transform: translateY(0%);
    opacity: 1;
  }

  .sidebar__languages.above-viewport {
    transform: translateY(0%) !important;
    opacity: 1 !important;
    transition: none !important;
  }

  .sidebar__languages li {
    margin-bottom: 0.2rem;
  }

  .sidebar__languages li:hover button {
    background: linear-gradient( 90deg, rgb(47,139,218) 0%, rgb(0,171,211) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .sidebar__languages li:last-of-type {
    margin-bottom: 0;
  }

  .sidebar__languages button {
    background-color: transparent;
    border: 0;
    line-height: 1;
    cursor: pointer;
    font-family: 'Futura PT medium';
    letter-spacing: 0.01em;
    color: #747474;
    font-size: 100%;
  }
</style>

