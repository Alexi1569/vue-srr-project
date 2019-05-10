<template>
  <div
    :class="['form-input', classObject]"
  >
    <div class="form-input__inner">
      <label v-if="input.label && input.type !== 'file'" :for="input.id">{{input.label}}</label>
      <input
        v-if="input.view === 'input' && input.type !== 'file' && input.type === 'tel'"
        :type="input.type"
        :placeholder="input.placeholder"
        :required="input.required"
        :name="input.name"
        v-model="input.value"
        v-mask="input.mask"
        @focus="handleFocus"
        @blur="handleBlur"
      />

      <input
        v-else-if="input.view === 'input' && input.type !== 'file'"
        :type="input.type"
        :placeholder="input.placeholder"
        :required="input.required"
        :name="input.name"
        v-model="input.value"
        @focus="handleFocus"
        @blur="handleBlur"
      />

      <label
        v-else-if="input.view === 'input' && input.type === 'file'"
        :for="input.id"
        :class="['flex ai-fe jc-fs', fileInputClass]"
      >
        <input
          :type="input.type"
          :placeholder="input.placeholder"
          :required="input.required"
          :name="input.name"
          :multiple="input.multiple"
          :id="input.id"
          @change="handleFileInputChange"
        />
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 22" style="enable-background:new 0 0 20 22;" xml:space="preserve"><path d="M15.8,0c2.2,0,3.9,1.8,3.9,3.9c0,0.4-0.1,1.7-1.2,2.8l-8.5,8.5c-0.6,0.7-2.1,1.3-3.3,0.1c-1.2-1.2-0.6-2.7,0.1-3.3l4.4-4.4 L12,8.3l-3.2,3.2l0,0l-1.4,1.4l0,0c-1,1.2,0.6,2.9,2,1.6l8.4-8.4c0.7-0.7,0.9-1.4,0.9-2.2c0-1.6-1.3-2.9-2.9-2.9 c-0.8,0-1.5,0.3-2,0.8l0,0C13.2,2.4,2.3,13.3,2.3,13.4l0,0C1.5,14.2,1,15.3,1,16.5C1,19,3,21,5.5,21c0.6,0,1.8,0,3.5-1.7L19.3,9.1 L20,9.8L9.5,20.2c-1,1.1-2.4,1.8-4,1.8c-3,0-5.5-2.5-5.5-5.5c0-1.6,0.7-3,1.7-4C12.4,1.8,12.6,1.7,13,1.2C13.3,0.9,14.2,0,15.8,0"/></svg>
        <span v-if="input.value.length > 0">{{input.loaded}}</span>
        <span v-else>{{input.label}}</span>
      </label>


      <textarea
        @input="handleInput"
        v-else
        rows="1"
        :type="input.type"
        :placeholder="input.placeholder"
        :required="input.required"
        :name="input.name"
        v-model="input.value"
        @focus="handleFocus"
        @blur="handleBlur"
      >
      </textarea>
      <i v-if="input.type !== 'file'" class="form-input__line"></i>
      <i v-if="input.icon" v-html="input.icon" class="input-icon"></i>
    </div>
    <span class="form-message"></span>
  </div>
</template>

<script>
  import {mask} from 'vue-the-mask'

  export default {
    props: {
      input: {
        required: true,
        type: Object
      }
    },
    directives: {
      mask
    },
    data() {
      return {
        isFocused: false
      }
    },
    methods: {
      handleInput(e) {
        if (e.target.scrollHeight > e.target.clientHeight) {
          e.target.setAttribute('rows', parseInt(e.target.getAttribute('rows'), 10) + 1)
        }
      },
      handleFileInputChange (e) {
        if (e.target.files.length > 0) {
          this.$emit('handleFileInputChange', [...e.target.files]);
        } else {
          this.$emit('handleFileInputChange', []);
        }
      },
      handleFocus() {
        this.isFocused = true;
      },
      handleBlur() {
        this.isFocused = false;
      }
    },
    computed: {
      classObject() {
        return {
          'form-input--focused': this.isFocused,
          'form-input--textarea': this.input.view === 'textarea',
          'form-input--file': this.input.type === 'file',
        }
      },
      fileInputClass() {
        return {
          'file--loaded': this.input.value.length > 0
        }
      }
    }
  }
</script>

<style>
  .form-input__inner {
    position: relative;
  }

  .form-input--file .file--loaded span {
    color: #2a8ed9;
  }

  .form-input--file .file--loaded svg {
    fill: #2a8ed9;
  }

  .input-icon {
    position: absolute;
    right: 0;
    top: 50%;
    width: 1rem;
    transform: translateY(-50%);
  }

  .input-icon svg {
    display: block;
    width: 100%;
    height: auto;
    fill: #939393;
  }

  .form-input.form-input--focused .form-input__line {
    transform: translateX(0%);
    opacity: 1;
  }

  .form-input.form-input--focused input,
  .form-input.form-input--focused textarea {
    border-color: transparent;
  }

  ::-webkit-input-placeholder {
    color: #919191;
  }

  .form-input__textarea-text {
    position: absolute;
    left: 0;
    top: 0;
    padding: 0.25rem 0;
    width: 100%;
    font-family: 'Futura PT medium';
    font-size: 16px;
    letter-spacing: 0.005em;
    text-align: left;
    right: 0;
    white-space: pre-wrap;
    z-index: -1;
    padding: .25rem 0;
  }

  :-moz-placeholder {
    color: #919191;
  }

  ::-moz-placeholder {
    color: #919191;
  }

  :-ms-input-placeholder {
    color: #919191;
  }

  .form-input {
    overflow: hidden;
    margin-bottom: 2.375rem;
  }

  .form-input:last-child {
    margin-bottom: 0;
  }

  .form-input__line {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    opacity: 0;
    height: 2px;
    background-color: #00abd3;
    transform: translateX(-50%);
    transition: 0.4s all ease-out;
  }

  input:not([type="submit"], [type="file"], [type="range"]),
  textarea {
    border: 0;
    border-bottom: 1px solid #dddddd;
    padding: 0.25rem 0;
    width: 100%;
    font-family: 'Futura PT medium';
    font-size: 16px;
    letter-spacing: 0.005em;
    background-color: transparent;
    color: #303030;
    transition: 0.4s all ease-out;
    display: block;
  }

  textarea {
    resize: none;
    max-height: 7.5rem;
  }

  .form-input--file .form-input__inner {
    padding-bottom: 0.375rem;
  }

  .form-input--file svg {
    margin-bottom: 0.1875rem;
  }

  .form-input--file span,
  .form-input--file svg {
    transition: .2s all ease;
  }

  .form-input--textarea {
    margin-bottom: 1rem;
  }

  .form-input--textarea .form-input__inner {
    max-height: 100%;
  }

  input:not([type="submit"]), textarea {
    height: 100%;
  }

  .form-input--file input[type="file"] {
    opacity: 0;
    position: absolute;
    z-index: 1;
    left: 0;
    width: 1px;
    height: 1px;
    top: 0;
    bottom: 0;
    right: 0;
    cursor: pointer;
  }

  .form-input--file {
    position: relative;
  }

  .form-input--file label {
    width: 100%;
    height: 100%;
    cursor: pointer;
    text-align: left;
  }

  .form-input {
    width: 100%;
  }

  .form-input--textarea textarea {
    height: auto;
  }

  .form-input--file span {
    display: block;
    font-size: .875em;
    font-family: 'Futura PT medium';
    cursor: pointer;
  }

  .form-input--file svg {
    display: inline-block;
    width: 1rem;
    height: auto;
    fill: #303030;
    margin-right: .5rem;
  }

  @media screen and (max-width: 1199px) {
    input:not([type="submit"]):not([type="file"]), textarea {
      font-size: 15px !important;
    }
  }

  @media screen and (max-width: 991px) {
    input:not([type="submit"]):not([type="file"]), textarea {
      font-size: 14px !important;
    }
  }

  @media screen and (max-width: 767px) {
    .form-input {
      margin-bottom: 2rem;
    }
  }

</style>
