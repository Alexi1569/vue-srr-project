<template>
  <div :class="['s-clients__logotypes flex fw-w ai-s jc-fs', logotypesClassObject]">
    <ClientItem
      v-for="client, i in clients"
      :client="client"
      :key="i"
      :num="i"
      :isItemsDisabled="isItemsDisabled"
      @disableItems="disableItems"
    />
  </div>
</template>

<script>
  import ClientItem from '~/components/Clients/ClientItem.vue'

  export default {
    components: {
      ClientItem
    },
    props: {
      clients: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        isItemsDisabled: false,
      }
    },
    mounted() {
      document.addEventListener('click', this.clickHandler);
      document.addEventListener('touchstart', this.clickHandler);
    },
    beforeDestroy() {
      document.removeEventListener('click', this.clickHandler);
      document.removeEventListener('touchstart', this.clickHandler);
    },
    computed: {
      logotypesClassObject() {
        return {
          'active': this.isItemsDisabled
        }
      }
    },
    methods: {
      clickHandler(e) {
        if (e.target.closest('.s-clients__item') === null && document.querySelector('.s-clients__logotypes').classList.contains('active')) {
          this.isItemsDisabled = false;
          this.closeAllItems();
        }
      },
      closeAllItems() {
        this.$children.forEach(el => {
          el.isActive = false;
        });
      },
      disableItems(index) {
        if (this.isItemsDisabled) {
          this.closeAllItems();
          this.isItemsDisabled = false;
        } else {

          this.$children.forEach((el, i) => {
            i === index
              ? (el.isActive = true)
              : (el.isActive = false)
          });
          this.isItemsDisabled = true;
        }
      }
    },
  }
</script>
