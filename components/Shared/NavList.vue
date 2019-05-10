<template>
  <nav class="nav__wrap">
    <ul
      :class="['nav__list', classObject]"
      v-in-viewport
    >
      <NavItem
        v-for="item, i in menu"
        :key="i"
        :item="item"
      >
        {{item.text}}
      </NavItem>
      <div v-if="view === 'SIDEBAR'" class="nav__fill"></div>
    </ul>
  </nav>
</template>

<script>
import NavItem from '~/components/Shared/NavItem.vue'

export default {
  components: {
    NavItem
  },
  props: {
    menu: {
      type: Array,
      required: true,
    },
    view: {
      required: true,
      type: String
    }
  },
  computed: {
    classObject() {
      return {
        'header__nav-list flex ai-c jc-fe': this.view === 'HEADER',
        'sidebar__nav-list': this.view === 'SIDEBAR',
        's-services__nav-list flex fw-w jc-fs': this.view === 'SECTION_SERVICES',
        'footer__nav-list': this.view === 'FOOTER',
        'briefs__nav-list': this.view === 'PAGE_BRIEFS',
        'error__nav-list flex jc-c ai-c': this.view === 'PAGE_ERROR',
      }
    }
  }
}
</script>

<style>
  .header__nav-list {
    font-size: 0.9375em;
    color: #303030;
    font-family: 'Futura PT heavy';
    letter-spacing: 0.025em;
    text-transform: uppercase;
    margin-right: 7.5rem;
  }

  .nav__fill {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: -1;
  }

  .header__nav-list > li.active > a,
  .nav__list-inner li:hover a {
    background: linear-gradient( 90deg, rgb(47,139,218) 0%, rgb(0,171,211) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .nav__list {
    list-style-type: none;
  }

  .footer__nav-list li {
    margin-bottom: .75rem;
  }

  .footer__nav-list li:last-child {
    margin-bottom: 0;
  }

  .error__nav-list {
    font-size: 1em;
    margin-top: 1.875rem;
  }

  .error__nav-list li {
    position: relative;
    padding-right: 1.875rem;
    margin-right: 1.875rem;
  }

  .error__nav-list li:hover a {
    color: #415b91;
  }

  .error__nav-list li:last-of-type {
    padding-right: 0;
    margin-right: 0;
  }

  .error__nav-list li:last-of-type:after {
    display: none;
  }

  .error__nav-list li:after {
    content: '';
    width: 4px;
    height: 4px;
    background-color: #415b91;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
  }

  .error__nav-list a {
    display: block;
    font-family: 'Futura PT medium';
    border-bottom: 1px solid #636363;
    text-decoration: none;
    color: inherit;
    transition: .3s all ease;
  }

  .footer__nav-list a {
    text-decoration: none;
    color: inherit;
    display: block;
  }

  .header__nav-list li {
    margin-right: 3.375rem;
    position: relative;
  }

  .sidebar__nav-list li:first-child {
    margin-top: 5.8rem;
  }

  .header__nav-list li:last-of-type {
    margin-right: 0;
  }

  .sidebar__nav-list {
    letter-spacing: 0.025em;
    font-family: 'Futura PT heavy';
    padding: 2.8125rem 8.12500rem 0 5.3125rem;
    transition: 1.2s all cubic-bezier(.19,1,.22,1);
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
  }

  .s-services__nav-list {
    font-size: 1em;
  }

  .briefs__nav-list {
    margin-left: 1.8rem;
  }

  .briefs__nav-list li:first-child {
    margin-top: .75rem;
  }

  .briefs__nav-list a {
    color: inherit;
    position: relative;
    padding-left: 1.25rem;
    display: block;
    width: 100%;
    text-decoration: none;
    padding-right: 1.37500em;
    transition: .4s all ease-in;
  }

  .s-services__nav-list a {
    color: inherit;
    font-family: 'Futura PT medium';
    text-decoration: none;
    position: relative;
    padding-left: 1.25rem;
    display: block;
    width: 100%;
    padding-right: 1.37500em;
    transition: .4s all ease-in;
  }

  .s-services__nav-list a:before,
  .briefs__nav-list a:before {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    background-image: linear-gradient( 90deg, rgb(47,139,218) 0%, rgb(0,171,211) 100%);
    left: 0;
    top: 8px;
  }

  .s-services__nav-list li {
    margin-bottom: .3rem;
    width: 48%;
    margin-right: 4%;
  }

  .s-services__nav-list li:nth-child(2n) {
    margin-right: 0;
  }

  .s-services__nav-list li:hover a:before,
  .briefs__nav-list li:hover a:before {
    height: 2px;
    top: 9px;
    width: 2rem;
    transition: .4s width ease-in;
  }

  .s-services__nav-list li:hover a,
  .briefs__nav-list li:hover a {
    padding-left: 2.625rem;
    padding-right: 0em;
  }

  .sidebar__nav-list li {
    font-size: 1.75em;
    text-transform: uppercase;
    color: #303030;
    margin-bottom: .8rem;
  }

  .sidebar__nav-list li:last-child {
    margin-bottom: 0;
  }

  .sidebar__nav-list li.nav__item--big {
    font-size: 2.875em;
  }

  @media screen and (max-width: 1650px) {
    .header__nav-list {
      margin-right: 4rem;
    }

    .header__nav-list li {
      margin-right: 2.5rem;
    }
  }

  @media screen and (max-width: 1450px) {
    .header__nav-list {
      margin-right: 2.8rem;
    }

    .header__nav-list li {
      margin-right: 1.7rem;
    }

    .btn.header__btn {
      padding: .7rem 1.3rem;
      font-size: .75em;
    }
  }

  @media screen and (max-width: 1300px) {
    .s-services__nav-list {
      font-size: .9em;
    }

    .s-services__nav-list li {
      margin-bottom: .7rem;
    }

    .header__nav-list {
      font-size: .85em;
    }
  }

  @media screen and (max-width: 1199px) {
    body .header__nav-list {
      display: none;
    }

    .header__phones {
      font-size: .9em;
    }

    .logo.header__logo {
      width: 8rem;
    }
  }

  @media screen and (max-width: 420px) {
    .s-services__nav-list li {
      width: 100%;
      margin-right: 0;
    }
  }
</style>
