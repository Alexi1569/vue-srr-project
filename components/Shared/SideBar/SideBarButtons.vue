<template>
  <div class="sidebar__buttons" v-in-viewport>
    <div 
      class="sidebar__buttons-message"
      @mouseover="handleMessageHover"
      @mouseleave="handleMessageLeave"
    >
      <SideBarButton 
        :button="buttons.sideBarButtons.message"
        :isActive="showMessage"
      />
      <div 
        :class="[{'show': showMessage} ,'sidebar__buttons-inner']"
      >
        <SideBarButton 
          :button="buttons.sideBarButtons.telegram"
        />
        <SideBarButton 
          :button="buttons.sideBarButtons.messenger"
        />
      </div>
    </div>
    <div 
      class="sidebar__button-phone"
      @click.prevent="sideBarModalShow"
    >
      <SideBarButton 
        :button="buttons.sideBarButtons.phone"
      />
    </div>


  </div>
</template>

<script>
import SideBarButton from '~/components/Shared/SideBar/SideBarButton.vue'


export default {
  components: {
    SideBarButton
  },
  props: {
    buttons: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showMessage: false
    }
  },
  methods: {
    handleMessageHover() {
      this.showMessage = true;
    },
    handleMessageLeave() {
     this.showMessage = false;
    },
    sideBarModalShow() {
      this.$store.commit('showCallbackModal');
      this.$store.commit('allowScroll');
      this.$store.commit('closeSidebar');
    }
  }
}
</script>

<style>
  .sidebar__buttons-inner .sidebar__button {
    position: absolute;
    opacity: 0;
    transition: 0.45s all ease-out;
    top: 0;
    left: 0;
    transform: scale(.5) translateX(0%) translateY(0%);;
  }

  .sidebar__buttons-message:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    width: 100%;
    top: 50%;
    height: 250%;
    transform: translate(-20%, -50%);
    z-index: -1;
  }

  .sidebar__buttons-message:hover:before {
    z-index: 1;
  }

  .sidebar__buttons {
    transform: translateY(35%);
    opacity: 0;
    transition: 0.15s all ease-in 0.1s;
  }

  .sidebar__buttons.in-viewport, .sidebar__buttons.above-viewport, .sidebar__buttons.below-viewport {
    opacity: 1;
    transform: translateY(0);
  }

  .sidebar__buttons.above-viewport {
    transform: translateY(0%) !important;
    opacity: 1 !important;
    transition: none !important;
  }

  .sidebar__buttons-inner.show .sidebar__button {
    opacity: 1;
  }

  .sidebar__buttons-inner.show .sidebar__button:first-child {
    transform: scale(1) translateX(-120%) translateY(-75%);
  }

  .sidebar__buttons-inner.show .sidebar__button:last-child {
    transform: scale(1) translateX(-120%) translateY(75%);
  }

  .sidebar__button {
    width: 2.5rem;
    cursor: pointer;
    height: 2.5rem;
    border-radius: 0.3125rem;
    background-image: linear-gradient( 90deg, rgb(47,139,218) 0%, rgb(0,171,211) 100%);
    border: 0;
    background-color: transparent;
    transition: 0.3s all ease-out;
  }

  .sidebar__button.active {
    background-image: linear-gradient( 90deg, rgba(47,139,218, 0) 0%, rgba(0,171,211, 0) 100%);
    border: 1px solid #2b8ed9;
  }

  .sidebar__button.active svg {
    fill: #2b8ed9;
  }

  .sidebar__button:focus {
    outline: 0;
  }

  .sidebar__button svg {
    width: 50%;
    fill: #fff;
    transition: 0.15s all ease-out;
  }

  .sidebar__buttons-message {
    position: relative;
    margin-bottom: 3.75rem;
  }
</style>
