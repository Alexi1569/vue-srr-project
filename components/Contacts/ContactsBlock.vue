<template>
  <div v-in-viewport :class="['contacts__block', classObject]">
    <p class="contacts__block-title">{{this.title}}</p>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
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
          'contacts__block--top': this.view === 'PAGE_CONTACTS_TOP',
          'contacts__block--bottom': this.view === 'PAGE_CONTACTS_BOTTOM',
        }
      }
    }
  }
</script>

<style>
  .contacts__block {
    box-shadow: 0.845px 1.813px 15px 0px rgba(0, 0, 0, 0.15);
    padding: 2.8125rem 4.375rem;
    background-color: #fff;
    display: inline-block;
    font-size: 1em;
    opacity: 0;
    transition: 1s all cubic-bezier(.19,1,.22,1);
  }

  .contacts__block--top {
    transform: translateX(-10%);
  }

  .contacts__block--bottom {
    transform: translateX(10%);
  }

  .contacts__block.in-viewport {
    opacity: 1;
    transform: translateX(0%);
  }

  .contacts__block.above-viewport {
    transform: translateX(0%) !important;
    opacity: 1 !important;
    transition: none !important;
  }

  .contacts__block-title {
    text-transform: uppercase;
    font-size: 1.125em;
    letter-spacing: 0.001em;
    color: #303030;
    text-align: center;
    font-family: 'Futura PT heavy';
  }

  .contacts__block--top .contacts__block-title {
    margin-bottom: 3em;
  }

  .contacts__block--bottom {
    position: absolute;
    z-index: 1;
    left: -4.375rem;
    top: -8.75rem;
  }

  @media screen and (max-width: 900px) {
    .contacts__block--bottom {
      left: auto;
      right: 3rem;
    }
  }

  @media screen and (max-width: 767px) {
    .contacts__block--top .contacts__block-title {
      margin-bottom: 2rem;
    }
  }

  @media screen and (max-width: 500px) {
    .contacts__block--top {
      width: 23rem;
    }

    .contacts__block--bottom {
      top: -11.85rem;
    }

    .contacts__block--bottom {
      right: 50%;
      width: 23rem;
      transform: translateX(50%);
    }
  }

  @media screen and (max-width: 350px) {
    .contacts__block--top,
    .contacts__block--bottom {
      width: 100%;
    }
  }
</style>
