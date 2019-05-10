<template>
  <footer :class="['footer', classObject]">
    <div class="container">
      <div class="footer__wrapper flex jc-sb ai-fs">
        <div class="footer__info footer__col">
          <Logo
            view="FOOTER"
            :logo="logo"
          />
          <FooterItem
            :item="footer.info.copyright"
            view="FOOTER_LEFT"
          />
          <FooterItem
            :item="footer.info.address"
            view="FOOTER_LEFT"
          />
          <FooterItem
            :item="footer.info.schedule"
            view="FOOTER_LEFT"
          />
        </div>
        <div class="footer__contacts footer__col footer--padding">
          <p class="footer__col-title">{{this.footer.contacts.title}}</p>
          <div class="footer__col-item">

            <FooterItem
              :item="footer.contacts.phones"
              view="FOOTER_CONTACTS"
            >
              <PhonesList
                :phones="footer.contacts.phones.items"
                view="FOOTER"
              />
            </FooterItem>

            <FooterItem
              :item="footer.contacts.email"
              view="FOOTER_CONTACTS"
            />
            <FooterItem
              :item="footer.contacts.skype"
              view="FOOTER_CONTACTS"
            />
          </div>
        </div>
        <div class="footer__services footer__col footer--padding">
          <p class="footer__col-title">{{this.footer.services.title}}</p>
          <div class="footer__col-item">
            <NavList
              :menu="footer.services.menu"
              view="FOOTER"
            />
          </div>
        </div>
        <div class="footer__briefs footer__col footer--padding">
          <p class="footer__col-title">{{this.footer.briefs.title}}</p>
          <div class="footer__col-item">
            <NavList
              :menu="footer.briefs.menu"
              view="FOOTER"
            />
          </div>
        </div>
        <div class="footer__informations footer__col footer--padding">
          <p class="footer__col-title">{{this.footer.informations.title}}</p>
          <div class="footer__col-item">
            <NavList
              :menu="footer.informations.menu"
              view="FOOTER"
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import Logo from '~/components/Shared/Logo.vue'
  import PhonesList from '~/components/Shared/PhonesList.vue'
  import NavList from '~/components/Shared/NavList.vue'
  import FooterItem from '~/components/Shared/FooterItem'

  export default {
    components: {
      FooterItem,
      Logo,
      PhonesList,
      NavList
    },
    computed: {
      classObject() {
        return {
          'footer--line': this.view === 'PAGE_SERVICES_CATEGORY_INNER' || this.view === 'PAGE_CONTACTS',
          'footer--margin': this.view === 'PAGE_SERVICES_CATEGORY_INNER'
        }
      },
      logo() {
        return this.$store.state.global.logo;
      },
      footer() {
        return this.$store.state.global.footer;
      }
    },
    props: {
      view: {
        type: String,
        required: false
      },
    },
  }
</script>


<style>
  .footer {
    width: 100%;
    padding: 3.75rem 0 3.125rem;
    font-size: 1em;
  }

  .footer.footer--line {
    border-top: 1px solid #e8e8e8;
  }

  .footer.footer--margin {
    margin-bottom: 89px;
  }

  .footer a:hover,
  .footer__item a:hover {
    background: linear-gradient( 90deg, rgb(47,139,218) 0%, rgb(0,171,211) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .footer__contacts-item {
    margin-bottom: .75rem;
  }

  .footer__contacts-item a {
    text-decoration: none;
    color: inherit;
  }

  .footer__contacts-item:last-child {
    margin-bottom: 0;
  }

  .footer--padding {
    padding-top: 0.3rem;
  }

  .footer__info-row {
    margin-top: 1.65rem;
  }

  .footer__col {
    margin-right: 2.5rem;
  }

  .footer__wrapper {
    font-size: .875em;
    letter-spacing: 0.001em;
    margin-right: -2.5rem;
    color: #666666;
    font-family: 'Futura PT medium';
  }

  .footer__info-value {
    text-decoration: none;
    color: inherit;
    font-family: 'Futura PT medium';
  }

  .footer__info-title {
    text-transform: uppercase;
    margin-bottom: .2rem;
    font-family: 'Futura PT medium';
  }

  .footer__col-title {
    font-size: 1.14285714em;
    font-family: 'Futura PT heavy';
    letter-spacing: 0.025em;
    text-transform: uppercase;
    color: #303030;
  }

  .footer__col-item {
    margin-top: 2.25rem;
  }

  @media screen and (max-width: 1500px) {
    .footer.footer--margin {
      margin-bottom: 85px;
    }
  }

  @media screen and (max-width: 1300px) {
    .footer.footer--margin {
      margin-bottom: 80px;
    }
  }

  @media screen and (max-width: 991px) {
    .footer.footer--margin {
      margin-bottom: 76px;
    }
  }

  @media screen and (max-width: 650px) {
    .footer.footer--margin {
      margin-bottom: 0px;
    }
  }

  @media screen and (max-width: 1100px) {
    .footer__info {
      width: 100%;
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      order: 1;
      margin-right: 0;
    }

    .footer--padding {
      padding-top: 0;
    }

    .footer__info-row {
      margin-top: 0;
    }

    .footer__wrapper {
      flex-wrap: wrap;
      margin-right: 0;
    }
  }

  @media screen and (max-width: 850px) {
    .footer__wrapper > *:not(.footer__info) {
      display: none;
    }

    .footer__info {
      text-align: center;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 0;
    }

    .footer__info-row {
      margin-top: 1.7rem;
    }

    .footer {
      padding: 2.5rem 0;
    }
  }
</style>
