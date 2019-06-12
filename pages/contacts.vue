<template>
  <div class="p-contacts">
    <div class="container">
      <Breadcrumbs
        :title="pageContent.pageTitle"
      />
      <div class="p-services__top">
        <Caption
          view="PAGE_CONTACTS_TOP"
          :caption="pageContent.caption"
        />
      </div>
    </div>
    <div class="p-contacts__top">
      <div class="container">
        <ContactsBlock
          :title="pageContent.top.title"
          view="PAGE_CONTACTS_TOP"
        >
          <FooterItem
            :item="pageContent.top.phones"
            view="PAGE_CONTACTS"
          >
            <PhonesList
              :phones="pageContent.top.phones.items"
              view="PAGE_CONTACTS"
            />
          </FooterItem>

          <FooterItem
            :item="pageContent.top.email"
            view="PAGE_CONTACTS"
          />

          <FooterItem
            :item="pageContent.top.skype"
            view="PAGE_CONTACTS"
          />
        </ContactsBlock>

      </div>
      <div
        class="p-contacts__top-bg"
        :style="{backgroundImage: `url(${this.pageContent.top.background})`}"
      ></div>
    </div>

    <div class="p-contacts__bottom">
      <div class="container">
        <div class="p-contacts__bottom-inner flex ai-s jc-sb">
          <div class="p-contacts__bottom-left flex fd-c ai-fs jc-c">
            <div class="p-contacts__bottom-left-inner">
              <Form
                view="PAGE_CONTACTS"
                :form="pageContent.form"
                @handleFileInputChange="handleFileInputChanges"
              />
            </div>
          </div>

          <div class="p-contacts__bottom-right">
            <ContactsBlock
              :title="pageContent.bottom.title"
              view="PAGE_CONTACTS_BOTTOM"
            >
              <FooterItem
                :item="pageContent.bottom.address"
                view="PAGE_CONTACTS"
              />

              <FooterItem
                :item="pageContent.bottom.schedule"
                view="PAGE_CONTACTS"
              />
            </ContactsBlock>

            <GmapMap
              :center="pageContent.map.center"
              :zoom="pageContent.map.zoom"
              :map-type-id="pageContent.map.mapTypeId"
              :options="pageContent.map.options"
              style="width:100%; height: 100%;"
            >
              <GmapMarker
                :position="pageContent.map.center"
                :icon="pageContent.map.icon"
              />
            </GmapMap>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Breadcrumbs from '~/components/Shared/Breadcrumbs'
  import Caption from '~/components/Shared/Caption'
  import FooterItem from '~/components/Shared/FooterItem'
  import PhonesList from '~/components/Shared/PhonesList'
  import Form from '~/components/Shared/Form'
  import ContactsBlock from '~/components/Contacts/ContactsBlock'


  export default {
    components: {
      Breadcrumbs,
      Caption,
      FooterItem,
      PhonesList,
      ContactsBlock,
      Form
    },
    head() {
      return {
        title: this.pageContent.pageTitle
      }
    },
    created() {
      this.$root.$on('handleFileInputChange', this.handleFileInputChanges);
    },
    methods: {
      handleFileInputChanges(files) {
        this.form.inputs.file.value = [...files];
      }
    },
    computed: {
      emails() {
        return this.$store.state.contactsPage.top.email.values
      },
      skypes() {
        return this.$store.state.contactsPage.top.skype.values
      },
      pageContent() {
        return this.extend(
          {},
          this.$store.state.contactsPage,
          {
            form: Object.assign(
              {},
              this.$store.state.contactsPage,
              this.form
            )
          },
          {
            top: {
              email: {
                values: [
                  ...this.top.email.values.map((item, i) => {
                    return Object.assign(
                      {},
                      item,
                      this.emails[i]
                    )
                  })
                ]
              },
              skype: {
                values: [
                  ...this.top.skype.values.map((item, i) => {
                    return Object.assign(
                      {},
                      item,
                      this.skypes[i]
                    )
                  })
                ]
              },
            }
          },
        );
      }
    },
    data() {
      return {
        form: {
          caption: {
            view: 'PAGE_CONTACTS_BOTTOM'
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
              value: [],
              id: 'header-modal-file'
            }
          },
          btn: {
            type: 'button',
            view: 'CONTACTS_FORM'
          }
        },
        top: {
          email: {
            values: [
              {
                type: 'link',
              }
            ]
          },
          skype: {
            values: [
              {
                type: 'link',
              }
            ]
          }
        },
      }
    }
  }
</script>

<style>
  .p-contacts__top {
    margin-top: 6.875rem;
    position: relative;
  }

  .p-contacts__top > .container {
    position: absolute;
    top: -3.75rem;
    left: 0;
  }

  .p-contacts__top-bg {
    background-position: center;
    -webkit-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 30.625rem;
  }

  .p-contacts__bottom-left {
    width: 47.3%;
  }

  .p-contacts__bottom-inner {
    padding: 5.9375rem 0 4.375rem;
  }

  .p-contacts__bottom-right {
    width: 39.8%;
  }

  .p-contacts__bottom-left-inner {
    width: 100%;
  }

  .p-contacts__bottom-right {
    position: relative;
    min-height: 380px;
  }

  .p-contacts__bottom > .container {
    padding-right: 0;
    margin-right: 0;
  }

  @media screen and (max-width: 1199px) {
    .p-contacts__bottom-left {
      width: 50%;
    }
  }

  @media screen and (max-width: 900px) {
    .p-contacts__bottom-left {
      width: 100%;
      order: 2;
      margin-top: 3.2rem;
    }

    .p-contacts__bottom-right{
      width: 100%;
      order: 1;
    }

    .p-contacts__bottom-inner {
      flex-wrap: wrap;
    }
  }

  @media screen and (max-width: 650px) {
    .p-contacts__bottom > .container {
      margin-right: 15px;
      padding-right: 1.8rem;
    }
  }

  @media screen and (max-width: 500px) {
    .p-contacts__top > .container {
      right: 0;
      display: flex;
      justify-content: center;
    }

    .p-contacts__bottom-inner {
      padding-top: 9rem;
    }

    .contacts__block.contacts__block--bottom.in-viewport {
      transform: translateX(50%) !important;
    }
  }

  @media screen and (max-width: 450px) {
    .p-contacts__bottom > .container {
      padding-right: 1.4rem;
    }
  }

  @media screen and (max-width: 380px) {
    .p-contacts__bottom > .container {
      padding-right: 0.5rem;
    }
  }
</style>
