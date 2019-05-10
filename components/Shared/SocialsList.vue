<template>
  <ul :class="classObject" v-in-viewport>
    <SocialsListItem
      v-for="social, i in socials"
      :key="i"
      :social="social"
    />
  </ul>
</template>

<script>
import SocialsListItem from '~/components/Shared/SocialsListItem.vue'

export default {
  props: {
    socials: {
      type: Array,
      required: true
    },
    view: {
      type: String,
      required: true
    }
  },
  computed: {
    classObject() {
      return {
        'header__socials flex fd-c ai-fe jc-fe': this.view === 'SIDEBAR',
        'p-team__socials flex fw-w ai-c jc-c': this.view === 'PAGE_TEAM',
      }
    }
  },
  components: {
    SocialsListItem
  }
}
</script>

<style>
  .p-team__socials {
    list-style-type: none;
    margin-top: 1rem;
    margin-bottom: -5px;
    opacity: 0;
    transition: .3s all ease-in;
  }

  .p-team__socials li {
    margin: 0 5px 5px;
  }

  .p-team__socials a {
    width: 1.875rem;
    height: 1.875rem;
    line-height: 1;
    border-radius: 3px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient( 135deg, rgb(151,47,218) 0%, rgb(50,47,184) 100%);
  }

  .p-team__socials svg {
    display: block;
    fill: #fff;
  }

  .header__socials {
    list-style-type: none;
    transform: translateY(35%);
    opacity: 0;
    transition: 0.15s all ease-in;
  }

  .header__socials.in-viewport, .header__socials.above-viewport, .header__socials.below-viewport {
    transform: translateY(0%);
    opacity: 1;
  }

  .header__socials.above-viewport {
    transform: translateY(0%) !important;
    opacity: 1 !important;
    transition: none !important;
  }

  .header__socials li:hover svg {
    fill: url('#blue-gradient')
  }


  .header__socials a {
    display: block;
    width: 1.1875rem;
    height: 1.25rem;
  }

  .header__socials li {
    margin-bottom: 0.6rem;
  }

  .header__socials li:last-child {
    margin-bottom: 0;
  }

  .header__socials svg {
    height: 100%;
    display: block;
    fill: #9d9d9d;
    transition: 0.4s all ease-in;
  }
</style>
