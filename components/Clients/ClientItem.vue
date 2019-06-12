<template>
  <div :class="['s-clients__item inline-flex ai-c jc-c', classObject]">
    <div v-in-viewport class="s-clients__item-inner">
      <div @click="handleItemClick" class="s-clients__item-img">
        <img :src="client.src" :alt="client.alt">
        <transition name="client-fade">
          <div v-show="isActive" class="s-clients__item-btns flex fd-c ai-s jc-s">
            <nuxt-link v-for="btn, i in client.buttons" :to="btn.link" :key="i">{{btn.text}}</nuxt-link>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    client: {
      type: Object,
      required: true
    },
    isItemsDisabled: {
      type: Boolean,
      required: true
    },
    num: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    handleItemClick() {
      this.$emit("disableItems", this.num);
      this.isActive = true;
    }
  },
  computed: {
    classObject() {
      return {
        disabled: this.isItemsDisabled && !this.isActive
      };
    }
  }
};
</script>

<style>
.client-fade-enter-active,
.client-fade-leave-active {
  transition: 0.2s all ease-in;
}

.client-fade-enter,
.client-fade-leave-to {
  opacity: 0;
}

.s-clients__item {
  position: relative;
  cursor: pointer;
  transition: 1.2s all cubic-bezier(0.19, 1, 0.22, 1);
  margin-bottom: 2.5rem;
}

.s-clients__item-inner {
  opacity: 0;
  transition: 0.2s all ease-in;
  transform: translateY(25%);
}

.s-clients__item-inner.in-viewport {
  opacity: 1;
  transform: translateY(0);
}

.s-clients__item-inner.above-viewport {
  transform: translateY(0%) !important;
  opacity: 1 !important;
  transition: none !important;
}

.s-clients__item:nth-child(6n) {
  margin-right: 0;
}

.s-clients__item.disabled {
  opacity: 0.4;
  pointer-events: none;
  cursor: not-allowed;
}

.s-clients__item-btns {
  position: absolute;
  right: 0;
  font-size: 0.875em;
  top: 50%;
  transform: translateY(-50%);
}

.s-clients__item-btns a {
  font-family: "Futura PT demi";
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  position: relative;
  padding: 0.625rem 1.125rem;
  line-height: 1;
  color: inherit;
  transition: 0.4s all ease-out;
  background-color: #f5f5f5;
  overflow: hidden;
  background-image: none;
  z-index: 0;
  margin-bottom: 0.625rem;
}

.s-clients__item-btns a:before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  right: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    90deg,
    rgb(47, 139, 218) 0%,
    rgb(0, 171, 211) 100%
  );
  opacity: 0;
  transform: translateX(-80%);
  transition: 0.3s transform ease-out, 0.2s opacity 0.1s;
}

.s-clients__item-btns a:hover {
  background-color: transparent;
  color: #fff;
}

.s-clients__item-btns a:hover:before {
  transform: translateX(0);
  opacity: 1;
}

.s-clients__item-btns a:last-child {
  margin-bottom: 0;
}

.s-clients__item-img img {
  max-width: 100%;
  display: block;
  height: auto;
  max-height: 4.0625rem;
  width: auto;
}

@media screen and (min-width: 1351px) {
  .s-clients__item {
    width: 14.5%;
  }
  .s-clients__item:nth-child(6n) {
    margin-right: 0;
  }
  .s-clients__item:not(:nth-child(6n)) {
    margin-right: 2.6%;
  }
}

@media screen and (min-width: 1101px) and (max-width: 1350px) {
  .s-clients__item {
    width: 17.5%;
  }
  .s-clients__item:nth-child(5n) {
    margin-right: 0;
  }
  .s-clients__item:not(:nth-child(5n)) {
    margin-right: 3.125%;
  }
}

@media screen and (min-width: 851px) and (max-width: 1100px) {
  .s-clients__item {
    width: 22.5%;
  }

  .s-clients__item:nth-child(4n) {
    margin-right: 0;
  }

  .s-clients__item:not(:nth-child(4n)) {
    margin-right: 3.33%;
  }
}

@media screen and (min-width: 651px) and (max-width: 850px) {
  .s-clients__item {
    width: 29%;
  }
  .s-clients__item:not(:nth-child(3n)) {
    margin-right: 6.5%;
  }
  .s-clients__item:nth-child(3n) {
    margin-right: 0;
  }
}

@media screen and (min-width: 300px) and (max-width: 650px) {
  .s-clients__item {
    width: 43%;
  }
  .s-clients__item:not(:nth-child(2n)) {
    margin-right: 14%;
  }
  .s-clients__item:nth-child(2n) {
    margin-right: 0;
  }
}
</style>
