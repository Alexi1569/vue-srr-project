<template>
  <li
    @mouseover="handleHover"
    @mouseleave="handleLeave"
    :class="classObject"
    @click="handleInnerItemClick"
  >
    <nuxt-link v-if="!item.isAbsoluteLink" :to="item.link">
      <slot></slot>
    </nuxt-link>

    <a v-else :href="item.link" :target="this.item.isBlank ? '_blank' : false" :download="this.item.isDownload ? '' : false">
      <slot></slot>
    </a>

    <transition name="nav-inner-fade">
      <ul
        class="nav__list-inner"
        v-if="item.inner"
        v-show="showInner"
      >
        <li
          v-for="el, i in item.inner"
          :key="i"
        >
          <nuxt-link :to="el.link">{{el.text}}</nuxt-link>
        </li>
      </ul>
    </transition>
  </li>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object
      }
    },
    data() {
      return {
        showInner: false,
      }
    },
    computed: {
      classObject() {
        return {
            'active': this.showInner,
          'nav__item--big': this.item.size === 'big'
        }
      }
    },
    methods: {
      handleHover() {
        this.showInner = true;
      },
      handleLeave() {
        this.showInner = false;
      },
      handleInnerItemClick() {
        this.showInner = false;
      }
    }
  }
</script>

<style>
  .nav__list-inner {
    position: absolute;
    left: -1.5rem;
    right: -1.5rem;
    min-width: 15.25rem;
    top: 100%;
    z-index: 1;
    background-color: #fff;
    padding: 1.5rem;
    text-transform: none;
    letter-spacing: 0;
    font-family: 'Futura PT medium';
    list-style-type: none;

  }

  .nav__list-inner li {
    margin-bottom: .4rem;
  }

  .nav__list-inner li:last-child {
    margin-bottom: 0;
  }

  .nav-inner-fade-enter-active {
    transition: opacity .5s;
  }

  .nav-inner-fade-leave-active {
    transition: none;
  }

  .nav-inner-fade-enter, .nav-inner-fade-leave-to {
    opacity: 0;
  }
</style>
