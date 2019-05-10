<template>
  <div class="p-services-item">
    <div class="container">
      <Breadcrumbs
        :title="pageContent.pageTitle"
      />

      <div class="p-services-category__top">
        <Caption
          view="PAGE_SERVICES_ITEM"
          :caption="pageContent.caption"
        />
      </div>
      <ServicesTasks
        :tasks="pageContent.tasks"
        v-in-viewport
      />
      <PopularFunctional
        :popular="pageContent.popular"
      />

      <ServicesFaq
        :faq="pageContent.faq"
      />

      <CategoryProcess
        :process="pageContent.process"
      />
    </div>

    <Portfolio
      view="PAGE_SERVICES_CATEGORY"
      :portfolio="pageContent.portfolio"
    />
    <DiscussProject
      view="PAGE_SERVICES_CATEGORY_INNER"
    />

    <transition name="fade-fluid">
      <FluidBlock
        v-show="offsetY > 350"
        :fluid="pageContent.fluid"
      />
    </transition>

    <Modal
      v-show="showQuestionModal"
      @closeModal="closeQuestionModal"
      view="PAGE_SERVICES_CATEGORY_INNER"
    >
      <Form
        view="PAGE_SERVICES_CATEGORY_INNER"
        :form="pageContent.questionFormContent"
      />
    </Modal>

    <Modal
      v-show="showRequestModal"
      @closeModal="closeRequestModal"
      view="PAGE_SERVICES_CATEGORY_INNER"
    >
      <Form
        :form="pageContent.requestFormContent"
      />
    </Modal>
  </div>

</template>

<script>
  import Breadcrumbs from '~/components/Shared/Breadcrumbs.vue'
  import Caption from '~/components/Shared/Caption.vue'
  import ServicesTasks from '~/components/Services/ServicesTasks.vue'
  import ServicesPopularFunctional from '~/components/Services/ServicesPopularFunctional.vue'
  import ServicesFaq from '~/components/Services/ServicesFaq.vue'
  import ServicesCategoryProcess from '~/components/Services/ServicesCategoryProcess.vue'
  import ServicesFluidBlock from '~/components/Services/ServicesFluidBlock.vue'
  import Form from '~/components/Shared/Form'
  import Portfolio from '~/components/Portfolio/Portfolio.vue'
  import DiscussProject from '~/components/Shared/DiscussProject'
  import Modal from '~/components/Shared/Modal.vue'

  export default {
    head () {
      return {
        title: this.pageContent.pageTitle
      }
    },
    data() {
      return {
        requestFormContent: {
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
        questionFormContent: {
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
          },
          btn: {
            type: 'button',
            view: 'SECTION_DISCUSS'
          }
        },
        offsetY: 0,
        portfolio: {
          btn: {
            type: 'link',
          },
        },
        fluid: {
          questionBtn: {
            type: 'button',
            view: 'FLUID_FORM_QUESTION',
          },
          projectBtn: {
            type: 'button',
            view: 'FLUID_FORM_PROJECT'
          }
        }
      }
    },
    computed: {
      showQuestionModal() {
        return this.$store.state.global.modals.showQuestionModal;
      },
      showRequestModal() {
        return this.$store.state.global.modals.showRequestModal;
      },
      pageContent() {
        return this.extend(
          {},
          this.$store.state.servicesInnerPage,
          {
            requestFormContent: {
              caption: Object.assign(
                {},
                this.$store.state.servicesInnerPage.requestFormContent.caption,
                this.requestFormContent.caption
              ),
              inputs: Object.assign(
                {},
                this.$store.state.servicesInnerPage.requestFormContent.inputs,
                this.requestFormContent.inputs
              ),
              btn: Object.assign(
                {},
                this.$store.state.servicesInnerPage.requestFormContent.btn,
                this.requestFormContent.btn
              ),
            }
          },
          {
            questionFormContent: {
              caption: Object.assign(
                {},
                this.$store.state.servicesInnerPage.questionFormContent.caption,
                this.questionFormContent.caption
              ),
              inputs: Object.assign(
                {},
                this.$store.state.servicesInnerPage.questionFormContent.inputs,
                this.questionFormContent.inputs
              ),
              btn: Object.assign(
                {},
                this.$store.state.servicesInnerPage.questionFormContent.btn,
                this.questionFormContent.btn
              ),
            }
          },
          {
            portfolio: {
              btn: Object.assign(
                {},
                this.$store.state.servicesInnerPage.portfolio.btn,
                this.portfolio.btn
              ),
            }
          },
          {
            fluid: {
              questionBtn: Object.assign(
                {},
                this.$store.state.servicesInnerPage.fluid.questionBtn,
                this.fluid.questionBtn
              ),
              projectBtn: Object.assign(
                {},
                this.$store.state.servicesInnerPage.fluid.projectBtn,
                this.fluid.projectBtn
              ),
            }
          }
        )
      }
    },
    components: {
      Breadcrumbs,
      Caption,
      ServicesTasks,
      PopularFunctional: ServicesPopularFunctional,
      ServicesFaq,
      CategoryProcess: ServicesCategoryProcess,
      Portfolio,
      DiscussProject,
      FluidBlock: ServicesFluidBlock,
      Modal,
      Form
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        this.offsetY = window.pageYOffset;
      },
      closeQuestionModal() {
        this.$store.commit('closeQuestionModal');
      },
      closeRequestModal() {
        this.$store.commit('closeRequestModal');
      }
    },

  }
</script>

<style>
  .p-services-item {
    color: #333333;
  }

  .fade-fluid-enter-active, .fade-fluid-leave-active {
    transition: all .5s ease-out;
  }
  .fade-fluid-enter, .fade-fluid-leave-to {
    opacity: 0;
    transform: translateY(100%);
  }

  @media screen and (max-width: 1199px) {
    .p-services-item__faq,
    .services-category__process {
      padding-top: 6.8rem;
    }

    .p-services-category-item__discuss {
      margin-top: 6.8rem;
    }
  }

  @media screen and (max-width: 767px) {
    .p-services-item__faq,
    .services-category__process {
      padding-top: 6rem;
    }

    .p-services-category-item__discuss {
      margin-top: 6rem;
    }
  }
</style>
