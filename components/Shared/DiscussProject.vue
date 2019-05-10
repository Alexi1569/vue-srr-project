<template>
  <section :class="['s-discuss', classObject]">
    <div class="container">
      <div class="s-discuss__wrapper">
        <Form
          :form="discussProject"
          view="SECTION_DISCUSS"
          @handleFileInputChange="handleFileInputChanges"
        />
      </div>
    </div>
  </section>
</template>

<script>
  import Form from '~/components/Shared/Form'

  export default {
    methods: {
      handleFileInputChanges(files) {
        this.formContent.inputs.file.value = [...files];
      }
    },
    components: {
      Form
    },
    created() {
      this.$root.$on('handleFileInputChange', this.handleFileInputChanges);
    },
    props: {
      view: {
        type: String,
        required: true,
      }
    },
    computed: {
      classObject() {
        return {
          'p-services-category__discuss': this.view === 'PAGE_SERVICES_CATEGORY',
          'p-services-category-item__discuss': this.view === 'PAGE_SERVICES_CATEGORY_INNER',
        }
      },
      discussProject() {
        return this.extend(
          {},
          this.$store.state.discussProject,
          {
            caption: this.extend(
              {},
              this.$store.state.discussProject.caption,
              this.formContent.caption,
            )
          },
          {
            inputs: this.extend(
              {},
              this.$store.state.discussProject.inputs,
              this.formContent.inputs,
            )
          },
          {
            btn: this.extend(
              {},
              this.$store.state.discussProject.btn,
              this.formContent.btn,
            )
          },
        )
      }
    },
    data() {
      return {
        formContent: {
          caption: {
            view: 'SECTION_DISCUSS'
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
            view: 'SECTION_DISCUSS'
          }
        }
      }
    }
  }
</script>

<style>
  .s-discuss {
    background-color: #f0f5f7;
    padding: 4.5rem 0;
    color: #303030;
    text-align: center;
  }

  .p-services-category-item__discuss.s-discuss {
    background-color: #fff;
    padding-top: 0;
  }

  .s-discuss__wrapper {
    width: 56%;
    margin: 0 auto;
  }

  .p-services-category-item__discuss {
    margin-top: 7.5rem;
  }

  .p-services-category__discuss {
    margin-top: 7.5rem;
  }

  @media screen and (max-width: 1500px) {
    .s-discuss__wrapper {
      width: 70%;
    }

    .s-discuss__form .form__inner-part:first-child {
      width: 40%;
    }
  }

  @media screen and (max-width: 1199px) {
    .s-discuss__wrapper {
      width: 90%;
    }
  }

  @media screen and (max-width: 991px) {
    .s-discuss__wrapper {
      width: 100%;
    }
  }

  @media screen and (max-width: 900px) {
    .s-calculator__form .form__inner-part:first-child {
      width: 100%;
    }

    .s-calculator__form .form__inner-part:last-child .form-input:last-child {
      width: 115px;
      flex: 0;
      flex-basis: 115px;
    }

    .s-calculator__form .form-input--textarea {
      width: auto;
      flex: 1;
    }
  }

  @media screen and (max-width: 767px) {
    .s-calculator__form .form__inner-part:first-child .form-input {
      width: 30%;
    }
  }
</style>
