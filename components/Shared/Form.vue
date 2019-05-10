<template>
  <form
    :class="['form', classObject]"
  >
    <Caption
      :view="form.caption.view"
      :caption="form.caption"
      v-if="form.caption.view !== 'CALCULATOR_SERVICES'"
    />
    <div class="form__inner flex ai-s jc-sb">
      <template v-if="type !== 'SINGLE_FORM'">
        <div class="form__inner-part">
          <Input
            :input="form.inputs.name"
          />
          <Input
            :input="form.inputs.phone"
          />
          <Input
            :input="form.inputs.email"
          />
        </div>
        <div class="form__inner-part flex fd-c jc-sb ai-fs">
          <Input
            :input="form.inputs.text"
          />
          <Input
            v-if="form.inputs.file"
            :input="form.inputs.file"
            @handleFileInputChange="$root.$emit('handleFileInputChange', $event)"
          />
        </div>
      </template>
      <template v-else-if="type === 'SINGLE_FORM'">
        <Input
          :input="form.inputs.name"
        />
        <Input
          :input="form.inputs.phone"
        />
      </template>
    </div>
    <Button
      :btn="form.btn"
      :view="form.btn.view"
    />

  </form>
</template>

<script>
  import Input from '~/components/Shared/Input.vue'
  import Button from '~/components/Shared/Button.vue'
  import Caption from '~/components/Shared/Caption.vue'

  export default {
    props: {
      form: {
        type: Object,
        require: true
      },
      view: {
        type: String,
        required: false
      },
      type: {
        type: String,
        require: false
      }
    },
    components: {
      Input,
      Caption,
      Button
    },
    computed: {
      classObject() {
        return {
          'header__discuss-form': this.view === 'HEADER',
          'sidebar__form': this.view === 'SIDEBAR',
          'p-contacts__form': this.view === 'PAGE_CONTACTS',
          'discuss__project-form s-discuss__form': this.view === 'SECTION_DISCUSS',
          's-calculator__form': this.view === 'SECTION_CALCULATOR',
          'p-services-item__form': this.view === 'PAGE_SERVICES_CATEGORY_INNER',
        }
      }
    }
  }
</script>

<style>
  .form__inner {
    margin-top: 2.6rem;
    margin-bottom: 4.6875rem;
  }

  .p-contacts__form {
    text-align: center;
  }

  .form__inner-part:first-child {
    width: 35%;
  }

  .s-calculator__form .form__inner {
    margin-top: 0;
  }

  .sidebar__form .form__inner {
    flex-wrap: wrap;
  }

  .form__inner-part:last-child {
    width: 49%;
  }

  .p-services-item__form textarea {
    max-height: 10.375rem;
  }

  .header__discuss-form .form__inner-part:first-child {
    width: 40%;
  }

  .header__discuss-form .form__inner-part:last-child {
    width: 53%;
  }

  .s-calculator__form {
    width: 100%;
    margin-left: 1.2rem;
  }

  .s-calculator__form .form__inner-part:first-child {
    width: 72.22%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 3.125rem;
  }

  .s-calculator__form .form__inner-part:first-child .form-input {
    width: 26.9%;
  }

  .s-calculator__form .form-input {
    margin-bottom: 0;
  }

  .s-calculator__form .form-input--textarea {
    width: 72.22%;
  }

  .s-calculator__form .form__inner-part:last-child .form-input:last-child {
    width: auto;
    flex: 1;
    margin-left: 7.8%;
  }

  .s-calculator__form .form__inner {
    margin-bottom: 1rem;
    flex-wrap: wrap;
  }

  .s-calculator__form .form__inner-part:last-child {
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-between;
    height: 6.25rem;
  }

  .s-calculator__form textarea {
    max-height: 5.5rem;
  }

  @media screen and (max-width: 1500px) {
    .p-services-item__form textarea {
      max-height: 10.5rem;
    }
  }

  @media screen and (max-width: 1300px) {
    .p-services-item__form textarea {
      max-height: 10.93rem;
    }
  }

  @media screen and (max-width: 991px) {
    .p-services-item__form textarea {
      max-height: 11.3rem;
    }
  }

  @media screen and (max-width: 767px) {
    .p-services-item__form textarea {
      max-height: 10.6rem;
    }
  }

  @media screen and (max-width: 500px) {
    .form .form__inner-part:first-child,
    .form .form__inner-part:last-child {
      width: 100%;
    }

    .form .form__inner {
      margin-bottom: 2.2rem;
    }

    .s-calculator__form .form__inner-part:first-child .form-input {
      width: 100%;
    }

    .s-calculator__form .form__inner-part:first-child {
      flex-wrap: wrap;
    }

    .s-calculator__form .form-input {
      margin-bottom: 2rem;
    }

    .s-calculator__form .form-input:last-child {
      margin-bottom: 0rem;
    }

    .s-calculator__form .form__inner-part:last-child {
      height: auto;
    }

    .s-calculator__content--5 .s-calculator__content-body {
      text-align: center;
    }

    .s-calculator__left {
      min-height: 44rem;
    }

    .s-calculator__form .form__inner-part:last-child .form-input:last-child {
      margin-left: 0;
      width: 100%;
      flex-basis: 100%;
    }

    .form .form__inner-part:first-child {
      margin-bottom: 2rem;
    }

    .form .form__inner-part:last-child {
      flex-direction: row;
      flex-wrap: wrap;
    }

    .form .form__inner {
      flex-wrap: wrap;
    }

    .form .form-input--textarea {
      height: auto;
      flex: 0;
      flex-basis: 100%;
      width: 100%;
    }
  }

  @media screen and (max-width: 380px) {
    .s-calculator__arrow {
      left: -1.5rem;
    }
  }

</style>
