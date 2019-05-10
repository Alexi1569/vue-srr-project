<template>
  <div :class="['caption', classObject]">
    <div class="caption__inner" v-in-viewport>
      <p class="caption__main" v-html="caption.text"></p>
      <p
        v-if="this.caption.subtext"
        class="caption__additional"
        v-html="this.caption.subtext"
      ></p>
      <div
        v-if="this.caption.content"
        class="caption__content"
        v-html="this.caption.content"
      ></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      caption: {
        type: Object,
        required: true
      },
      view: {
        type: String,
        required: false
      }
    },
    beforeUpdate() {
      this.$el.classList.remove('caption--services--visible');

      setTimeout(() => {
        this.$el.classList.add('caption--services--visible');
      }, 0);
    },
    mounted() {
      this.$el.classList.add('caption--services--visible');
    },
    computed: {
      classObject() {
        return {
          'caption--centered': this.view === 'SECTION_SERVICES' || this.view === 'SECTION_CLIENTS' || this.view === 'SECTION_PORTFOLIO' || this.view === 'SECTION_TEAM' || this.view === 'SECTION_DISCUSS' || this.view === 'PAGE_SERVICES_ITEM_FAQ' || this.view === 'PAGE_SERVICES_CATEGORY_INNER_PROCESS',
          'caption--clients': this.view === 'SECTION_CLIENTS',
          'caption--team': this.view === 'SECTION_TEAM',
          'header-modal__caption': this.view === 'HEADER_MODAL',
          'sidebar-modal__caption': this.view === 'SIDEBAR_MODAL',
          'caption--services': this.view === 'CALCULATOR_SERVICES',
          'caption--left': this.view === 'PAGE_BLOG',
          'caption--big p-portfolio-item__caption': this.view === 'PAGE_PORTFOLIO_ITEM',
          'p-blog__inner-caption': this.view === 'PAGE_BLOG_INNER_RIGHT',
          'caption--big p-services__caption': this.view === 'PAGE_SERVICES',
          'caption--big': this.view === 'PAGE_SERVICES_CATEGORY' || this.view === 'PAGE_SERVICES_ITEM' || this.view === 'PAGE_CONTACTS_TOP' || this.view === 'PAGE_BLOG' || this.view === 'PAGE_BRIEFS',
          'caption--small caption--centered': this.view === 'PAGE_SERVICES_CATEGORY_PROCESS' || this.view === 'PAGE_SERVICES_CATEGORY_TECHNOLOGIES',
          'caption--small p-services-item__popular-title': this.view === 'PAGE_SERVICES_ITEM_POPULAR',
          'caption--smallest p-contacts__bottom-caption': this.view === 'PAGE_CONTACTS_BOTTOM',
        }
      }
    }
  }
</script>

<style>
  .caption {
    font-size: 1em;
    line-height: 1.2;
    margin: 0 auto;
  }

  .caption--clients {
    width: 28%;
    transition: 1.3s transform cubic-bezier(.19,1,.22,1), .85s opacity cubic-bezier(.19,1,.22,1) 0.1s;
  }

  .p-blog__inner-caption .caption__main {
    font-size: 1.125em;
    letter-spacing: 0;
  }
  
  .caption--left {
    text-align: left;
  }

  .sidebar-modal__caption .caption__main {
    font-size: 1.5em;
    text-transform: none;
    letter-spacing: 0;
  }

  .caption.header-modal__caption .caption__main {
    font-size: 1.5em;
  }

  .caption.caption--smallest .caption__main {
    font-size: 1.125em;
    letter-spacing: 0.001em;
    line-height: 1.2;
  }

  .p-portfolio-item__caption .caption__content {
    margin-top: .3rem;
    font-style: normal;
    font-family: 'Futura PT medium';
    letter-spacing: 0.015em;
  }

  .caption.p-contacts__bottom-caption {
    margin-bottom: 2.8125rem;
    margin-left: 0;
    margin-right: 0;
    text-align: left;
  }

  .caption.caption--big .caption__main {
    font-size: 3rem;
    letter-spacing: 0.05em;
    font-family: 'Futura PT demi';
    line-height: 0.958333333;
  }

  .caption.caption--small .caption__main {
    font-size: 1.625em;
    font-family: 'Futura PT demi';
  }

  .p-services-item__popular-title.caption--small .caption__main {
    font-family: 'Futura PT heavy';
    letter-spacing: 0;
  }

  .caption__inner {
    opacity: 0;
    transform: translateY(20%);
    transition: 1.2s transform cubic-bezier(.19,1,.22,1), .8s opacity cubic-bezier(.19,1,.22,1) 0.1s;
  }

  .caption__inner.in-viewport, .caption__inner.above-viewport, .caption__inner.fully-in-viewport {
    opacity: 1;
    transform: translateY(0);
  }

  .caption__inner.above-viewport.above-viewport {
    transform: translateY(0%) !important;
    opacity: 1 !important;
    transition: none !important;
  }

  .p-services__caption .caption__content {
    width: 45.7%;
  }

  .caption__content {
    color: #333333;
    letter-spacing: 0.001em;
    font-size: 1.0625em;
    font-style: italic;
    line-height: 1.05882353;
  }

  .caption__content p {
    margin-bottom: .875rem;
  }

  .caption__content p:last-child {
    margin-bottom: 0;
  }

  .caption__content {
    margin-top: 3.125rem;
  }

  .caption--services {
    opacity: 0;
    transform: translateY(-40%);
  }

  .caption--services.caption--services--visible {
    opacity: 1;
    transition: 0.4s all ease-in 0.4s;
    transform: translateY(0%);
  }

  .caption--team {
    width: 40%;
  }

  .caption__main {
    color: inherit;
    text-transform: uppercase;
    font-family: 'Futura PT heavy';
    font-size: 2.125em;
    letter-spacing: 0.025em;
  }

  .caption__additional {
    color: #666666;
    font-size: 1.0625em;
    line-height: 1.23529412;
    margin-top: 1.5rem;
    letter-spacing: 0.001em;
  }

  .caption--centered {
    text-align: center;
  }

  @media screen and (max-width: 1650px) {
    .caption--team {
      width: 60%;
    }
  }

  @media screen and (max-width: 1600px) {
    .caption--clients {
      width: 40%;
    }
  }

  @media screen and (max-width: 1199px) {
    .caption {
      font-size: .9em;
    }

    .caption__content {
      margin-top: 2.9rem;
    }

    .caption.caption--big .caption__main {
      font-size: 2.7em;
    }

    .p-services__caption .caption__content {
      width: 54%;
    }
  }

  @media screen and (max-width: 1100px) {
    .caption--clients {
      width: 53%;
    }
  }

  @media screen and (max-width: 1050px) {
    .caption--team {
      width: 80%;
    }
  }

  @media screen and (max-width: 991px) {
    .caption {
      font-size: .8em;
    }

    .caption__content {
      margin-top: 2.7rem;
    }

    .caption.caption--big .caption__main {
      font-size: 2.5em;
    }

    .p-services__caption .caption__content {
      width: 100%;
    }

    .caption__additional {
      margin-top: 1rem;
    }
  }

  @media screen and (max-width: 767px) {
    .caption--clients {
      width: 70%;
    }

    .caption.caption--big .caption__main {
      font-size: 2em;
    }

    .caption__main {
      font-size: 1.9em;
    }

    .caption--team {
      width: 100%;
    }
  }

  @media screen and (max-width: 580px) {
    .caption--clients {
      width: 80%;
    }
  }

  @media screen and (max-width: 450px) {
    .caption--clients {
      width: 100%;
    }
  }
</style>
