<template>
  <transition name="modal">
    <div @click="handleCloseModal" :class="['modal-mask', classObject]">
      <div class="modal-wrapper">
        <div class="modal-container">
          <button class="modal-close">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><path d="M11,10.3L21.3,0L22,0.7L11.7,11L22,21.3L21.3,22L11,11.7L0.7,22L0,21.3L10.3,11L0,0.7L0.7,0C0.7,0,11,10.3,11,10.3z"/></svg>
          </button>
          <div class="modal-body">
            <slot>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    handleCloseModal(e) {
      if (!e.target.closest('.modal-container') || e.target.closest('.modal-close')) {
        this.$emit('closeModal')
      }
    }
  },
  computed: {
    classObject() {
      return {
        'sidebar__modal': this.view === 'SIDEBAR',
        'header__modal': this.view === 'HEADER',
        'p-services-item__modal': this.view === 'PAGE_SERVICES_CATEGORY_INNER',
        'thank__modal': this.view === 'THANK',
      }
    }
  },
  props: {
    view: {
      type: String,
      required: true
    }
  }
}
</script>


<style>
  .sidebar__modal form {
    padding: 0 0.4375rem;
  }

  .header__modal .modal-container,
  .p-services-item__modal .modal-container {
    max-width: 54.375rem;
  }

  .thank__modal .modal-container {
    max-width: 29rem;
    padding-top: 8.4375rem;
    padding-bottom: 8.4375rem;
  }

  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity 1s cubic-bezier(.19,1,.22,1);
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }

  .sidebar__modal .modal-container {
    max-width: 28.5rem;
  }

  .modal-container {
    margin: 0px auto;
    padding: 3.4375rem 3.75rem 2rem;
    background-color: #fff;
    transition: all 1s cubic-bezier(.19,1,.22,1);
    display: inline-block;
    position: relative;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
  }

  .modal-header p {
    font-size: 1.5em;
    font-family: 'Futura PT heavy';
    margin-bottom: 3.4375rem;
  }

  .modal-close {
    width: 18px;
    height: 18px;
    display: block;
    position: absolute;
    border: 0;
    background: transparent;
    cursor: pointer;
    right: 16px;
    top: 16px;
  }

  .modal-close svg {
    width: 10px;
    height: 10px;
    display: inline-block;
    margin: auto;
    fill: #8a8a8a;
  }

  .modal-default-button {
    float: right;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  @media screen and (max-width: 767px) {
    .modal-container {
      padding: 3.2rem 2.8rem 2.4rem;
    }

    .modal-header p {
      margin-bottom: 2.2rem;
      font-size: 1.4em;
    }
  }

  @media screen and (max-width: 450px) {
    .modal-container {
      padding: 3rem 2rem 2.2rem;
    }
  }
</style>

