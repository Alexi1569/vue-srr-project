<template>
  <li
    @mouseover="handleHover"
    @mouseleave="handleLeave"
    :class="classObject"
    @click="handleInnerItemClick($event)"
  >
    <nuxt-link v-if="!item.isAbsoluteLink" :to="item.link">
      <slot></slot>
    </nuxt-link>

    <a
      v-else
      :href="item.link"
      :target="this.item.isBlank ? '_blank' : false"
      :download="this.item.isDownload ? '' : false"
    >
      <slot></slot>
    </a>
    <i v-if="showInnerMenu === 'without' ? false : showInnerMenu" class="nav__list-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129"><path d="M121.3 34.6c-1.6-1.6-4.2-1.6-5.8 0l-51 51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l53.9 53.9c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2.1-5.8z"/></svg></i>

    <transition name="nav-inner-fade">
      <ul class="nav__list-inner" v-if="item.inner && showInnerMenu === 'without' ? true : showInnerMenu" v-show="showInner ">
        <li v-for="el, i in item.inner" :key="i">
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
    },
    showMobile: {
      type: Boolean
    }
  },
  data() {
    return {
      showInner: false,
      windowWidth: 0
    };
  },
  mounted() {
    this.windowWidth = window.innerWidth;

    window.addEventListener("resize", e => {
      this.windowWidth = window.innerWidth;
    });
  },
  computed: {
    classObject() {
      return {
        active: this.showInner,
        "nav__item--big": this.item.size === "big",
        "with-arrow": this.showInnerMenu
      };
    },
    showInnerMenu() {
      return this.showMobile === undefined
      ? 'without'
        : this.windowWidth > 650
          ? false
          : true
    }
  },
  methods: {
    handleHover() {
      if (this.windowWidth > 650) {
        this.showInner = true;
      }
      
    },
    handleLeave() {
      if (this.windowWidth > 650) {
        this.showInner = false;
      }
      
    },
    handleInnerItemClick(e) {
      if (e.target.closest('.nav__list-arrow')) {
        this.showInner = !this.showInner;
      } else {
        this.showInner = false;
      }
    },
  }
};
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
  font-family: "Futura PT medium";
  list-style-type: none;
}

.nav__list-inner li {
  margin-bottom: 0.4rem;
}

.nav__list-inner li:last-child {
  margin-bottom: 0;
}

.nav-inner-fade-enter-active {
  transition: opacity 0.5s;
}

.nav-inner-fade-leave-active {
  transition: none;
}

.nav-inner-fade-enter,
.nav-inner-fade-leave-to {
  opacity: 0;
}


</style>
