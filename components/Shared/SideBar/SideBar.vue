<template>
  <div :class="['sidebar flex fd-c ai-s jc-sb', {'opened': sidebar.isOpened}]">
    <SideBarToggler
      view="SIDEBAR"
      :isOpened="sidebar.isOpened"
      :toggler="sidebar.data.toggler"
      @togglerClicked="$emit('togglerClicked')"
    />

    <div class="flex sidebar__right-wrap fd-c ai-fs jc-sb">
      <NavList :menu="sidebar.data.menu" view="SIDEBAR" @click.native="$emit('menuClicked', $event)"/>

      <div class="sidebar__mobile flex ai-c jc-sb">
        <Button :btn="btn" view="SIDEBAR" @click.native="headerModalShow"/>
        <PhonesList :phones="phones" view="SIDEBAR"/>
      </div>

      <div class="sidebar__bottom flex fd-c ai-s jc-sb">
        <SideBarLanguages :languages="sidebar.data.languages"/>
        <SocialsList :socials="sidebar.data.socials" view="SIDEBAR"/>
        <SideBarButtons :buttons="sidebar.data.buttons"/>
        <SideBarArrow :arrow="sidebar.data.arrow"/>
      </div>
    </div>
  </div>
</template>

<script>
import SideBarToggler from "~/components/Shared/SideBar/SideBarToggler.vue";
import SideBarLanguages from "~/components/Shared/SideBar/SideBarLanguages.vue";
import SocialsList from "~/components/Shared/SocialsList.vue";
import SideBarButtons from "~/components/Shared/SideBar/SideBarButtons.vue";
import SideBarArrow from "~/components/Shared/SideBar/SideBarArrow.vue";
import NavList from "~/components/Shared/NavList.vue";
import Button from "~/components/Shared/Button.vue";
import PhonesList from "~/components/Shared/PhonesList.vue";

export default {
  components: {
    SideBarToggler,
    SideBarLanguages,
    SocialsList,
    SideBarButtons,
    SideBarArrow,
    NavList,
    Button,
    PhonesList
  },
  props: {
    phones: {
      type: Array,
      required: true
    },
    btn: {
      type: Object,
      required: true
    },
    allowClick: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    headerModalShow() {
      if (this.allowClick) {
        this.$store.commit("showProjectModal");
        this.$emit("togglerClicked");
      }
    }
  },
  computed: {
    sidebar() {
      return this.$store.state.global.sidebar;
    }
  }
};
</script>

<style>
.sidebar__text {
  letter-spacing: 0.025em;
  font-family: "Futura PT medium";
  color: #666666;
  font-size: 0.875em;
  cursor: pointer;
}

.sidebar__mobile {
  display: none;
}

.sidebar__nav-list li {
  position: relative;
}

.sidebar__nav-list {
  will-change: transform;
  z-index: 1;
}

.sidebar__nav-list a {
  transition: 0.3s all ease-in;
}

.sidebar__nav-list li:hover a {
  background: linear-gradient(
    90deg,
    rgb(47, 139, 218) 0%,
    rgb(0, 171, 211) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.sidebar__part {
  transition: 0.4s all ease-in;
}

.sidebar__bottom {
  flex: 1;
  transition: 0.4s all ease-in;
}

.sidebar__right-wrap {
  flex: 1;
}

.sidebar .sidebar__nav-list {
  opacity: 0;
  transform: translateX(100%);
}

.sidebar__toggler {
  margin-bottom: 7.5rem;
}

.sidebar {
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 2;
  top: 0;
  height: 100%;
  padding: 0 2.8125rem 0 2.1875rem;
  text-align: right;
  background-color: #fff;
  padding-top: 6.125rem;
}

@media screen and (max-height: 750px) {
  .sidebar__toggler {
    margin-bottom: 5rem;
  }
}

@media screen and (max-height: 700px) {
  .sidebar__toggler {
    margin-bottom: 3.8rem;
  }
}

@media screen and (max-height: 650px) {
  .sidebar__toggler {
    margin-bottom: 3.2rem;
  }
}

@media screen and (max-height: 600px) {
  .sidebar__toggler {
    margin-bottom: 1.7rem;
  }
}

@media screen and (max-width: 1450px) {
  .sidebar__nav-list li.nav__item--big {
    font-size: 2.3em;
  }

  .sidebar__nav-list li {
    font-size: 1.6em;
  }
}

@media screen and (max-width: 1300px) {
  .sidebar__nav-list li.nav__item--big {
    font-size: 1.9em;
  }

  .sidebar__nav-list li {
    font-size: 1.3em;
  }
}

@media screen and (max-width: 1199px) {
  .sidebar__nav-list li.nav__item--big {
    font-size: 1.7em;
  }

  .sidebar__nav-list li {
    font-size: 1.15em;
  }
}

@media screen and (max-width: 650px) {
  .sidebar {
    bottom: auto;
    left: 0;
    height: auto;
    width: 100%;
    padding-top: 0;
  }

  .sidebar__right-wrap {
    overflow-y: auto;
  }

  .sidebar__bottom {
    margin-top: 20px;
  }

  .sidebar .sidebar__nav-list {
    margin-bottom: 30px;
  }

  .sidebar__mobile {
    display: flex;
    width: 100%;
  }

  .sidebar__nav-list {
    padding-top: 0;
    background-color: transparent;
  }

  .sidebar__nav-list > li:first-child {
    margin-top: 5rem;
  }

  .sidebar__toggler {
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .sidebar__languages,
  .sidebar__buttons {
    flex: 1;
  }

  .sidebar__arrow {
    display: none;
  }

  .sidebar__nav-list {
    padding-left: 0;
    text-align: left;
  }

  .sidebar__right-wrap nav {
    width: 100%;
  }

  .sidebar__arrow {
    text-align: right;
  }

  .sidebar__arrow svg {
    margin-right: 0.67rem;
  }

  .sidebar__toggler {
    display: none;
  }

  .sidebar__text {
    margin-left: 1rem;
    margin-top: 0;
  }

  .sidebar__nav-list {
    opacity: 1;
    z-index: 1;
    transform: translateX(0);
    position: initial;
  }

  .sidebar__right-wrap {
    position: absolute;
    opacity: 0;
    transform: translateX(100%);
    z-index: -1;
    background-color: #fff;
    left: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    padding: 1.4rem 3rem 3rem;
    transition: 0.4s all ease-in;
  }

  .sidebar.opened .sidebar__right-wrap {
    opacity: 1;
    z-index: 1;
    transform: translateX(0);
  }

  .sidebar__bottom {
    transition: 0.4s all ease-in;
    flex-direction: row;
    width: 100%;
    flex: 0;
    align-items: center;
  }

  .sidebar__languages {
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
  }

  .sidebar__nav-list .nav__list-inner {
    padding: 0;
    margin-bottom: 32px;
  }

  .sidebar__nav-list li:not(.nav__item--big) .nav__list-inner li {
    font-size: .8em;
  }

  .sidebar__nav-list li.with-arrow.active .nav__list-arrow svg {
    transform: rotate(180deg);
  }

  .sidebar__nav-list li.with-arrow .nav__list-arrow svg {
    transition: .25s all ease-in;
  }

  .sidebar__nav-list .nav__list-inner li {
    font-size: .65em;
    text-transform: none;
    color: #303030;
  }

  .sidebar__nav-list .nav__list-inner a {
    color: inherit;
    background: none !important;
    -webkit-text-fill-color: inherit !important;
  }

  .sidebar__languages li {
    margin-right: 1.2rem;
  }

  .sidebar__languages li:last-child {
    margin-right: 0;
  }

  .header__socials {
    flex-direction: row;
    align-items: stretch;
  }

  .header__socials li {
    margin-right: 1.2rem;
  }

  .header__socials li:last-child {
    margin-right: 0;
  }

  .sidebar__buttons {
    display: flex;
    justify-content: flex-end;
    align-items: stretch;
  }

  .sidebar__button-phone {
    margin-left: 1.3rem;
  }

  .sidebar__buttons-message {
    margin-bottom: 0;
  }

  .header__socials li {
    margin-bottom: 0;
  }

  .sidebar__languages li {
    margin-bottom: 0;
  }
}

@media screen and (max-width: 450px) {
  .sidebar__right-wrap {
    padding: 0 1.8rem 3rem;
  }

  .btn.sidebar-mobile__btn {
    padding: 0.7rem 1.2rem;
  }

  .phones__list.sidebar-mobile__phones {
    font-size: 0.85em;
  }

  .sidebar__buttons {
    right: 1.8rem;
  }
}

@media screen and (max-width: 420px) {
  .header__btn {
    display: none;
  }
}
</style>
