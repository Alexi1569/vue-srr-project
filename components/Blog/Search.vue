<template>
  <div :class="['search', classObject]">
    <div class="search-inner">
      <Input
        :input="inputRes"
      />
    </div>
  </div>
</template>

<script>
  import Input from '~/components/Shared/Input'

  export default {
    props: {
      view: {
        type: String,
        required: true
      },
      input: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        inputData: {
          view: 'input',
          type: 'text',
          required: true,
          name: 'usersearch',
          value: '',
        }
      }
    },
    components: {
      Input
    },
    computed: {
      classObject() {
        return {
          'p-blog__search': this.view === 'PAGE_BLOG'
        }
      },
      inputRes () {
        return this.extend(
          {},
          this.inputData,
          this.input
        )
      }
    }
  }
</script>

<style>
  .p-blog__search {
    width: 49.2%;
  }

  @media screen and (max-width: 991px) {
    .p-blog__search {
      width: 48.5%;
    }
  }

  @media screen and (max-width: 767px) {
    .p-blog__search {
      width: 47.5%;
    }
  }

  @media screen and (max-width: 550px) {
    .p-blog__search {
      width: 100%;
      margin-bottom: 1.4rem;
      order: 1;
    }
  }
</style>
