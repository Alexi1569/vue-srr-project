<template>
  <header :class="['header', classObject]">
    <div class="container">
      <div class="header__line flex jc-sb ai-c">
        <div class="header__left">
          <Logo
            view="HEADER"
            :logo="logo"
          />
        </div>
        <div class="header__right flex jc-fe ai-c">
          <NavList
            :menu="header.menu"
            view="HEADER"
            @click.native="handleMenuClicked"
          />
          <PhonesList
            :phones="header.phones"
            view="HEADER"
          />
          <Button
            :btn="header.btn"
            view="HEADER"
            @click.native="headerModalShow"
          />
          <SideBarToggler
            view="HEADER"
            :isOpened="isOpened"
            :toggler="toggler"
            @togglerClicked="handleTogglerClick"
          />
        </div>
      </div>
    </div>
    <SideBar
      :phones="header.phones"
      :btn="header.btn"
      @togglerClicked="handleTogglerClick"
      :allowClick="allowClick"
      @menuClicked="handleMenuClicked"
    />
    <Modal
      v-show="modals.showProjectModal"
      @closeModal="handleModalClose"
      view="HEADER"
    >
      <Form
        :form="header.headerFormContent"
        view="HEADER"
      />
    </Modal>

    <Modal
      v-show="modals.requestThankModal.show"
      view="THANK"
      @closeModal="$store.commit('hideRequestThankModal')"
    >
      <ThankMessage
        :msg="modals.requestThankModal.msg"
      />
    </Modal>

    <Modal
      v-show="modals.showCallbackModal"
      @closeModal="handleModalClose"
      view="SIDEBAR"
    >
      <Form
        :form="header.sidebarFormContent"
        view="SIDEBAR"
        type="SINGLE_FORM"
      />
    </Modal>
  </header>
</template>

<script>
  import Logo from '~/components/Shared/Logo.vue'
  import NavList from '~/components/Shared/NavList.vue'
  import PhonesList from '~/components/Shared/PhonesList.vue'
  import Button from '~/components/Shared/Button.vue'
  import SideBar from '~/components/Shared/SideBar/SideBar.vue'
  import Modal from '~/components/Shared/Modal.vue'
  import Form from '~/components/Shared/Form'
  import SideBarToggler from '~/components/Shared/SideBar/SideBarToggler.vue'
  import {TimelineMax} from 'gsap'
  import $ from 'jquery'
  import ThankMessage from '~/components/Shared/ThankMessage'

  export default {
    components: {
      Logo,
      NavList,
      PhonesList,
      Button,
      SideBar,
      Modal,
      Form,
      SideBarToggler,
      ThankMessage
    },
    props: {
      view: {
        type: String,
        required: false
      }
    },
    data() {
      return {
        allowClick: true,
        tl: null,
        headerFormContent: {
          caption: {
            view: 'HEADER_MODAL'
          },
          inputs: {
            name: {
              view: 'input',
              type: 'text',
              name: 'username',
              value: ''
            },
            phone: {
              view: 'input',
              type: 'tel',
              name: 'userphone',
              value: '',
            },
            email: {
              view: 'input',
              type: 'email',
              name: 'useremail',
              value: ''
            },
            text: {
              view: 'textarea',
              name: 'usertext',
              value: ''
            },
            file: {
              view: 'input',
              type: 'file',
              name: 'userfile',
              value: '',
              id: 'header-modal-file'
            }
          },
          btn: {
            type: 'button',
            view: 'SECTION_DISCUSS'
          }
        },
        sidebarFormContent: {
          caption: {
            view: 'SIDEBAR_MODAL'
          },
          inputs: {
            name: {
              view: 'input',
              type: 'text',
              name: 'username',
              value: ''
            },
            phone: {
              view: 'input',
              type: 'tel',
              name: 'userphone',
              value: '',
            },
          },
          btn: {
            type: 'button',
            view: 'SIDEBAR_MODAL'
          }
        },
      }
    },
    methods: {
      handleMenuClicked() {
        if ($('.sidebar').hasClass('opened')) {
          this.closeSideBar();
        }
      },
      handleModalClose() {
        this.$store.commit('closeProjectModal');
        this.$store.commit('closeCallbackModal');
      },
      headerModalShow() {
        this.$store.commit('showProjectModal');
        this.$store.commit('closeSidebar');
      },
      sideBarModalShow() {
        this.$store.commit('showCallbackModal');
        this.$store.commit('closeSidebar');
      },
      closeSideBar() {
        this.$store.commit('closeSidebar');
        this.$store.commit('allowScroll');
        this.tl
          .staggerFromTo($('.sidebar__nav-list li'), .5, {autoAlpha: 1, x: 0}, {autoAlpha: 0, x: 150, onStart: () => this.allowClick = false}, .15)
          .fromTo($('.sidebar__nav-list .nav__fill'), .5, {x: '0%', autoAlpha: 1}, {x: '100%', autoAlpha: 0, onComplete: () => this.tl.set($('.sidebar__nav-list .nav__fill'), {autoAlpha: 1})}, '-=.25')
          .fromTo($('.sidebar__nav-list'), .5, {x: '0%', autoAlpha: 1}, {x: '100%', autoAlpha: 0, onComplete: () => setTimeout(() => this.allowClick = true, 250)})
      },
      handleTogglerClick() {
        if (!$('.header').hasClass('disabled')) {
          this.$store.commit('toggleSidebar');

          if (document.body.clientWidth <= 650) {
            this.$store.commit('toggleScroll');
          }

          if ($('.sidebar').hasClass('opened')) {
            this.closeSideBar();
          } else {
            this.tl.fromTo($('.sidebar__nav-list'), .5, {x: '100%', autoAlpha: 0}, {x: '0%', autoAlpha: 1, onStart: () => this.allowClick = false})
              .fromTo($('.sidebar__nav-list .nav__fill'), 1, {x: '100%', scaleX: 1.3, ease: Elastic.easeOut.config(1.2, 0.9)}, {x: '0%', scaleX: 1, ease: Elastic.easeOut.config(1.2, 0.9), onComplete: () => setTimeout(() => this.allowClick = true, 250)}, '+=.085')
              .staggerFromTo($('.sidebar__nav-list li'), .45, {autoAlpha: 0, x: 150}, {autoAlpha: 1, x: 0,}, .15, '-=1.35')
          }
        }
      },
    },
    mounted() {
      document.addEventListener('click', (e) => {
        if (document.body.clientWidth > 650 && this.allowClick) {
          if (e.target.closest('.nav__wrap') === null && document.querySelector('.sidebar').classList.contains('opened') && !e.target.closest('.sidebar__toggler')) {
            this.closeSideBar();
          }
        }
      });
    },
    created() {
      this.tl = new TimelineMax();
    },
    computed: {
      logo() {
        return this.$store.state.global.logo;
      },
      header() {
        return this.extend(
          {},
          this.$store.state.global.header,
          {
            headerFormContent: this.extend(
              {},
              this.$store.state.global.header.headerFormContent,
              this.headerFormContent
            )
          },
          {
            sidebarFormContent: this.extend(
              {},
              this.$store.state.global.header.sidebarFormContent,
              this.sidebarFormContent
            )
          },
        );
      },
      modals() {
        return this.$store.state.global.modals;
      },
      isOpened() {
        return this.$store.state.global.sidebar.isOpened;
      },
      toggler() {
        return this.$store.state.global.sidebar.data.toggler;
      },
      classObject() {
        return {
          'header--main': this.view === 'MAIN_PAGE',
          'disabled': !this.allowClick
        }
      },
    },

  }
</script>

<style>
  header {
    width: 100%;
    border-bottom: 1px solid #e8e8e8;
  }

  .header.header--main {
    border-bottom: 0;
  }

  .header__line {
    padding: 1.8125rem 0;
  }

  header a {
    text-decoration: none;
    color: inherit;
    display: block;
  }

  @media screen and (max-width: 650px) {
    .header__phones {
      display: none;
    }
  }
</style>
