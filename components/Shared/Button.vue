<template>
  <div class="btn__wrap">
    <nuxt-link
      v-if="btn.type === 'link'" 
      :to="btn.link"
      :class="['btn', classObject]"
      :target="btn.target"
    >
      <div v-if="btn.iconPosition === 'before'" class="btn__wrap-inner">
        <i v-if="btn.icon"  class="btn__wrap-icon">
          <span v-html="btn.icon" class="btn__wrap-icon-inner inline-flex ai-c jc-c"></span>
        </i>
        <span class="btn__wrap-text">
          {{btn.text}}
        </span>
      </div>

      <div v-else class="btn__wrap-inner">
        <span class="btn__wrap-text">
          {{btn.text}}
        </span>
        <i v-if="btn.icon"  class="btn__wrap-icon">
          <span v-html="btn.icon" class="btn__wrap-icon-inner inline-flex ai-c jc-c"></span>
        </i>
      </div>

    </nuxt-link>

    <button
      v-if="btn.type === 'button'"
      type="submit"
      :class="['btn', classObject]"
    >
      <div v-if="btn.iconPosition === 'before'" class="btn__wrap-inner">
        <i v-if="btn.icon"  class="btn__wrap-icon">
          <span v-html="btn.icon" class="btn__wrap-icon-inner inline-flex ai-c jc-c"></span>
        </i>
        <span class="btn__wrap-text">
          {{btn.text}}
        </span>
      </div>

      <div v-else class="btn__wrap-inner">
        <span class="btn__wrap-text">
          {{btn.text}}
        </span>
        <i v-if="btn.icon"  class="btn__wrap-icon">
          <span v-html="btn.icon" class="btn__wrap-icon-inner inline-flex ai-c jc-c"></span>
        </i>
      </div>

    </button>
  </div>
</template>

<script>
export default {
  props: {
    btn: {
      type: Object,
      required: true
    },
    view: {
      type: String,
      required: true
    },
  },
  computed: {
    classObject() {
      return {
        'header__btn btn--filled': this.view === 'HEADER',
        'sidebar__modal-btn btn--filled': this.view === 'SIDEBAR_MODAL',
        'header__modal-btn btn--filled': this.view === 'HEADER_MODAL',
        'p-portfolio__btn btn--filled': this.view === 'PAGE_PORTFOLIO',
        's-discuss-btn btn--filled': this.view === 'SECTION_DISCUSS',
        's-services__presentation-btn btn--inline': this.view === 'SECTION_SERVICES_PRESENTATION',
        's-services__block-btn btn--icon': this.view === 'SECTION_SERVICES_BLOCK',
        'p-about__block-btn btn--icon': this.view === 'PAGE_ABOUT_BLOCK',
        's-portfolio__btn btn--filled': this.view === 'SECTION_PORTFOLIO',
        's-team__btn btn--filled': this.view === 'SECTION_TEAM',
        'p-blog__btn btn--filled': this.view === 'PAGE_BLOG',
        'sidebar-mobile__btn btn--filled': this.view === 'SIDEBAR',
        'p-services-category__btn btn--icon': this.view === 'PAGE_SERVICES_CATEGORY',
        'fluid__form__btn fluid__form__btn--question btn--linear': this.view === 'FLUID_FORM_QUESTION',
        'fluid__form__btn fluid__form__btn--project btn--filled': this.view === 'FLUID_FORM_PROJECT',
        'btn--filled p-contacts__bottom-form-btn': this.view === 'CONTACTS_FORM',
      }
    }
  }
}
</script>

<style>
  .btn {
    display: inline-block;
    font-family: 'Futura PT demi';
    font-size: 0.8125em;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 0.025em;
    text-align: center;
    min-width: 10.9375rem;
    cursor: pointer;
    line-height: 1;
    text-decoration: none;
    padding: 0.7rem;
    border: 0;
    transition: 0.4s all ease-in;
    background: transparent;
  }

  .p-about__block-btn {
    margin-top: 2.2rem;
  }

  .p-portfolio__btn {
    margin-top: 2.8125rem;
  }

  .p-blog__btn {
    margin-top: 4.375rem;
  }

  .fluid__form__btn {
    padding-left: 0;
    padding-right: 0;
    width: 17em;
    min-width: auto;
    margin: 0 1.25rem;
  }

  .btn.btn--linear {
    border: 1px solid #cccccc;
    padding-top: .63rem;
    padding-bottom: .63rem;
    color: #333333;
  }

  .s-portfolio__btn {
    margin: 3.75rem auto 0;
  }

  .s-team__btn {
    margin: 2.8125rem auto 0;
  }

  .s-services__block-btn {
    margin-top: 2.2rem;
  }

  .btn--icon:hover .btn__wrap-inner:before {
    width: 100%;
  }

  .btn--icon:hover .btn__wrap-text {
    color: #fff;
  }

  .btn__wrap-text {
    display: inline-block;
    transition: 0.3s all ease-in;
  }

  .btn.btn--filled {
    background-image: linear-gradient( 90deg, rgb(47,139,218) 0%, rgb(0,171,211) 100%);
    position: relative;
    transition: .2s all ease;
  }

  .btn.btn--filled:before {
    content: '';
    display: block;
    position: absolute;
    left: 2px;
    right: 2px;
    top: 2px;
    bottom: 2px;
    background-color: #fff;
    transform: scale(0.5);
    opacity: 0;
    transition: .3s all cubic-bezier(.17, .67, .6, .88);
  }

  .btn.btn--filled .btn__wrap-inner {
    position: relative;
    z-index: 1;
  }

  .btn.btn--filled .btn__wrap-text {
    transition: none;
  }

  .btn.btn--filled:hover:before {
    transform: scale(1);
    opacity: 1;
  }

  .btn.btn--filled:hover {
    box-shadow: 0 7px 12px 0px rgba(43, 142, 217, .2);
  }

  .btn.btn--filled:hover .btn__wrap-text {
    color: #2b8ed9;
  }

  .btn.btn--icon {
    padding: 0;
    color: inherit;
  }

  .btn--icon .btn__wrap-inner {
    position: relative;
    display: inline-flex;
    justify-content: flex-end;
    align-items: flex-start;
  }

  .btn--icon .btn__wrap-inner:before {
    content: '';
    display: inline-block;
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    z-index: -1;
    left: 0;
    width: 2.1875rem;
    transition: 0.4s all ease-in;
    background-image: linear-gradient( 90deg, rgb(47,139,218) 0%, rgb(0,171,211) 100%);
  }

  .btn--icon .btn__wrap-icon-inner {
    height: 100%;
    width: 100%;
  }

  .btn--icon .btn__wrap-icon {
    display: inline-block;
    height: 2.1875rem;
    width: 2.1875rem;
  }

  .btn.btn--icon .btn__wrap-text {
    padding: 0.7rem 1.75rem 0.7rem 0.625rem;
  }

  .btn.btn--inline .btn__wrap-text {
    color: #2b8ed9;
  }
  .s-services__presentation-btn {
    font-size: 0.9375em;
    letter-spacing: 0.05em;
    text-align: left;
    font-family: 'Futura PT heavy';
    line-height: 1.86666667;
    width: 12.8125rem;
    min-width: auto;
    padding: 0;
    margin-bottom: 1.8rem;
  }

  .s-services__presentation-btn .btn__wrap-text {
    display: inline;
  }

  .s-services__presentation-btn .btn__wrap-icon-inner {
    width: 1.5625rem;
    height: 1rem;
    margin-left: .625rem;
  }

  .s-services__presentation-btn .btn__wrap-icon {
    display: inline;
  }


  .s-services__presentation-btn .btn__wrap-icon-inner {
    background-image: linear-gradient( 90deg, rgb(47,139,218) 0%, rgb(0,171,211) 100%);
  }

  .btn__wrap-icon svg {
    fill: #fff;
    height: 0.5rem;
    width: auto;
    display: inline-block;
    vertical-align: middle;
  }

  @media screen and (max-width: 1500px) {
    .s-services__presentation-btn {
      font-size: .85em;
    }
  }

  @media screen and (max-width: 1300px) {
    .s-services__presentation-btn {
      width: 13.8rem;
    }
  }

  @media screen and (max-width: 991px) {
    .s-services__presentation-btn {
      width: 15rem;
    }
  }

  @media screen and (max-width: 850px) {
    .s-services__presentation-btn {
      width: 14rem;
    }
  }

  @media screen and (max-width: 767px) {
    .p-blog__btn {
      margin-top: 2.8rem;
    }
  }

  @media screen and (max-width: 450px) {
    .s-services__presentation-btn {
      width: 16rem;
    }
  }

</style>
