<template>
  <div class="s-calculator__step-item flex ai-c jc-c">
    <div class="s-calculator__step-item-inner flex fd-c jc-fs ai-fs">
      <div class="s-calculator__step-item-icon inline-flex ai-c jc-c">
        <i v-html="item.icon"></i>
        <span :style="{borderColor: figureColor}" :class="['s-calculator__step-item-figure', classObject]"></span>
      </div>
      <p class="s-calculator__step-item-title">{{item.title}}</p>
      <i class="s-calculator__step-item-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 129 129" enable-background="new 0 0 129 129"><g><path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z"></path></g></svg>
      </i>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        required: true
      },
      activeColor: {
        type: String,
        required: true
      }
    },
    data() {
      return {

      }
    },
    computed: {
      figureColor() {
        return this.activeColor === ''
          ? `transparent transparent transparent ${this.item.color}`
          : `transparent transparent transparent ${this.activeColor}`;
      },
      classObject() {
        return this.activeColor === '' ? '' : 'show--on-hover';
      }
    },
  }
</script>


<style>
  .s-calculator__step-item {
    text-align: left;
    position: relative;
    z-index: 0;
    width: 20%;
    cursor: pointer;
  }

  .s-calculator__step-item:nth-child(2) {
    transition-delay: 0.05s;
  }

  .s-calculator__step-item:nth-child(3) {
    transition-delay: 0.1s;
  }

  .s-calculator__step-item:nth-child(4) {
    transition-delay: 0.15s;
  }

  .s-calculator__step-item:nth-child(5) {
    transition-delay: 0.2s;
  }

  .s-calculator__step-item-inner {
    min-height: 10.7rem;
    width: 100%;
    padding: 2rem 1.5rem 1rem;
    transition: 0.4s all ease-in;
    margin-right: 3rem;
    position: relative;
  }

  .s-calculator__step-item-arrow {
    display: none;
    width: 1.6rem;
  }

  .s-calculator__step-item-arrow svg {
    display: block;
    width: 100%;
    height: auto;
    fill: #bfbfbf;
  }

  .s-calculator__step-item:hover .s-calculator__step-item-inner {
    box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, .07);
  }

  .s-calculator__step-item:last-child {
    margin-right: 0;
  }

  .s-calculator__step-item-figure {
    position: absolute;
    z-index: -1;
    width: 0;
    height: 0;
    left: 0;
    top: 50%;
    transform: translate(0%, -50%);
    border-style: solid;
    transition: 0.25s transform ease-in, 0.1s opacity ease-in;
    border-width: 1.1875rem 0 1.1875rem 4rem;
  }

  .s-calculator__step-item:hover .s-calculator__step-item-figure.show--on-hover {
    opacity: 1;
    transform: translate(0%, -50%);
  }

  .s-calculator__step-item-figure.show--on-hover {
    opacity: 0;
    transform: translate(-20%, -50%);
  }

  .s-calculator__step-item-icon {
    position: relative;
    width: 6.875rem;
    max-width: 100%;
  }

  .s-calculator__step-item-icon i {
    height: 100%;
    width: 100%;
  }

  .s-calculator__step-item-icon i:before {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    content: "";
  }

  .s-calculator__step-item-icon svg {
    display: inline-block;
    max-height: 100%;
    max-width: 100%;
    height: auto;
    width: auto;
    vertical-align: middle;
  }

  .s-calculator__step-item-title {
    font-size: 1.25em;
    letter-spacing: 0.025em;
    font-family: 'Futura PT demi';
    color: #303030;
    text-transform: uppercase;
    margin-top: 0.65rem;
    line-height: 1;
    flex: 1;
  }

  .s-calculator--company .st0 {
    fill: none;
    stroke: #000;
    stroke-width: 1.1;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .s-calculator--company .st1 {
    fill: none;
    stroke: #000000;
    stroke-width: 1.1;
  }

  .s-calculator--exist-project .st0 {
    fill: none;
    stroke: #000000;
    stroke-width: 4;
    stroke-miterlimit: 10;
  }

  @media screen and (max-width: 1500px) {
    .s-calculator__step-item-icon {
      width: 6rem;
    }

    .s-calculator__content--2 .s-calculator__step-item-title, .s-calculator__content--3 .s-calculator__step-item-title, .s-calculator__content--4 .s-calculator__step-item-title {
      font-size: .95em;
    }

    .s-calculator__step-item-inner {
      margin-right: 1.8rem;
    }
  }


  @media screen and (max-width: 1020px) {
    .s-calculator__step-item .s-calculator__step-item-inner {
      margin-right: 2.5%;
    }

    .s-calculator__step-item:last-of-type .s-calculator__step-item-inner {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 650px) {
    .s-calculator__step-item {
      width: 100%;
    }

    .s-calculator__form {
      margin-left: 0;
      padding-top: 2rem;
    }

    .s-calculator__step-item .s-calculator__step-item-inner {
      margin-right: 0;
    }

    .s-calculator__content-body {
      flex-wrap: wrap;
    }

    .s-calculator__content-body {
      margin-left: 0;
    }

    .s-calculator__step-item-arrow {
      display: inline-block;
    }

    .s-calculator__step-item-inner {
      flex-direction: row;
      align-items: center;
      padding: 1.2rem;
      min-height: auto;
    }

    .s-calculator__step-item-title {
      margin: 0 1.3rem;
      flex: 1;
    }

    .s-calculator__content .s-calculator__step-item-title {
      margin-top: 0;
    }

    .s-calculator__content-title {
      margin-bottom: 0;
      padding-bottom: 1.2rem;
    }

    .s-calculator__step-item-title {
      font-size: 1em;
    }

    .s-calculator__content-title {
      border-bottom: 1px solid #e1e1e1;
    }

    .s-calculator__step-item {
      border-bottom: 1px solid #e1e1e1;
    }

    .s-calculator__step-item:hover .s-calculator__step-item-inner {
      box-shadow: none;
    }
  }


</style>
