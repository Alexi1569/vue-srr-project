<template>
  <button @click="$emit('togglerClicked')" :class="['sidebar__toggler', classObject]">
    <div class="sidebar__toggler-inner" v-in-viewport>
      <div class="sidebar__toggler-lines">
        <span class="sidebar__toggler-line"></span>
      </div>
      <p class="sidebar__toggler-text sidebar__text">{{this.toggler.text}}</p>
    </div>
  </button>
</template>

<script>
  export default {
    props: {
      view: {
        type: String,
        required: true
      },
      isOpened: {
        type: Boolean,
        required: true
      },
      toggler: {
        type: Object,
        required: true
      }
    },
    watch: {
      isScrollBlocked() {
        if (this.isScrollBlocked) {
          document.documentElement.style.overflow = 'hidden';
        } else {
          document.documentElement.style.overflow = 'auto';
        }
      }
    },
    computed: {
      isScrollBlocked() {
        return this.$store.state.global.isScrollBlocked;
      },
      classObject() {
        return {
          'active': this.isOpened,
          'sidebar__toggler--header': this.view === 'HEADER',
          'sidebar__toggler--sidebar': this.view === 'SIDEBAR',
        }
      }
    },
  }
</script>


<style>
  .sidebar__toggler {
    background: transparent;
    border: 0;
    font-size: 100%;
    position: relative;
    z-index: 3;
    cursor: pointer;
  }

  .sidebar__toggler-inner {
    transform: translateY(-35%);
    opacity: 0;
    transition: 0.15s all ease-in;
  }

  .sidebar__toggler-inner.in-viewport, .sidebar__toggler-inner.above-viewport, .sidebar__toggler-inner.below-viewport {
    transform: translateY(0%);
    opacity: 1;
  }

  .sidebar__toggler-inner.above-viewport {
    transform: translateY(0%) !important;
    opacity: 1 !important;
    transition: none !important;
  }

  .sidebar__toggler.active .sidebar__toggler-text {
    opacity: 0;
  }

  .sidebar__toggler.active .sidebar__toggler-line {
    transform: rotate(45deg);
    top: 50%;
  }

  .sidebar__toggler.active .sidebar__toggler-line:before {
    transform: rotate(-90deg);
    top: 0;
  }

  .sidebar__toggler.active .sidebar__toggler-line:after {
    width: 0;
  }

  .sidebar__toggler-lines {
    position: relative;
    height: 1rem;
    width: 2.125rem;
  }

  .sidebar__toggler-text {
    margin-top: 0.375rem;
    transition: 0.4s all ease-out;
    min-width: 2.5rem;
  }

  .sidebar__toggler-line,
  .sidebar__toggler-line:before,
  .sidebar__toggler-line:after {
    height: 2px;
    background-color: #393939;
    display: inline-block;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    transition: 0.35s all ease-out;
  }

  .sidebar__toggler-line {
    top: 0;
  }

  .sidebar__toggler-line:before,
  .sidebar__toggler-line:after {
    content: '';
  }

  .sidebar__toggler-line:before {
    top: calc(1rem / 2 - 1px);
  }

  .sidebar__toggler-line:after {
    top: calc(1rem - 2px);
    width: 73.5%;
    right: 0;
    left: auto;
  }

  .sidebar__toggler--header {
    display: none;
  }

  @media screen and (max-width: 650px) {
    .sidebar__toggler--sidebar {
      display: none;
    }

    .sidebar__toggler.sidebar__toggler--header {
      display: inline-block;
      margin-left: 1.6rem;
    }

    .sidebar__toggler.sidebar__toggler--header .sidebar__toggler-text {
      display: none;
    }
  }
</style>
