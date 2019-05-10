<template>
  <div :class="['select', classObject]">
    <div @click="toggleSelect" class="select__top flex jc-sb ai-fe">
      <p class="select__selected">
        {{this.selectedItem ? this.selectedItem : this.select.defaultVal}}
      </p>
      <i class="select__arrow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129"><path d="M121.3 34.6c-1.6-1.6-4.2-1.6-5.8 0l-51 51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l53.9 53.9c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2.1-5.8z"/></svg>
      </i>
    </div>
    <div class="select__inner">
      <ul>
        <li
          @click="selectItem(item)"
          v-for="item, i in select.options"
          :key="i"
          :data-val="items[i]"
        >
          {{item}}
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  import cyrillicToTranslit from 'cyrillic-to-translit-js'

  export default {
    computed: {
      classObject() {
        return {
          'opened': this.isOpened,
          'p-portfolio__select': this.view === 'PAGE_PORTFOLIO',
          'p-blog__select': this.view === 'PAGE_BLOG',
        }
      },
      items() {
        return this.select.options.map(el => {
          return cyrillicToTranslit().transform(el, '_').toLowerCase()
        })
      }
    },
    data() {
      return {
        isOpened: false,
        selectedItem: null,
      }
    },
    methods: {
      toggleSelect() {
        this.isOpened = !this.isOpened
      },
      selectItem(item) {
        this.selectedItem = item
        this.toggleSelect()
      },
      clickHandler(e) {
        if ((e.target.closest('.select') === null ||  !e.target.closest('.select').isEqualNode(this.$el)) && this.$el.classList.contains('opened')) {
          this.toggleSelect();
        }
      }
    },
    mounted() {
      document.addEventListener('click', this.clickHandler);
    },
    beforeDestroy() {
      document.removeEventListener('click', this.clickHandler);
    },
    props: {
      view: {
        type: String,
        required: false
      },
      select: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style>
  .select__arrow {
    display: inline-block;
    width: 12px;
    margin-left: 8px;
  }

  .select__top {
    line-height: 1;
    color: #303030;
    text-transform: uppercase;
    font-family: 'Futura PT heavy';
    letter-spacing: 0.025em;
    cursor: pointer;
    border-bottom: 1px solid #d7d7d7;
    padding-bottom: .3rem;
  }

  .p-portfolio__select .select__top {
    padding-bottom: 1.5rem;
    border-bottom: 0;
  }

  .p-portfolio__select {
    margin: 0 2.8125rem 2rem;
  }

  .p-portfolio__select .select__inner {
    margin-top: 0;
  }

  .p-portfolio__select .select__inner ul {
    border-top: 1px solid #ebebeb;
    padding-top: 1.5rem;
  }

  .select__arrow svg {
    width: 100%;
    display: block;
    height: auto;
    fill: #000000;
  }

  .select__selected {
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .p-portfolio__select .select__inner {
    left: 50%;
    transform: translateX(-50%) translateY(-30%);
  }

  .select.opened .select__inner {
    transform: translateY(0);
  }

  .p-portfolio__select.opened .select__inner {
    transform: translateX(-50%) translateY(0);
  }

  .select__inner {
    position: absolute;
    top: 100%;
    z-index: -1;
    margin-top: .8rem;
    left: -1rem;
    max-width: 280px;
    opacity: 0;
    transform: translateY(-30%);
    min-width: calc(100% + 1rem);
    transition: 0.2s all ease-in;
    text-align: left;
    font-size: 0.9375em;
    font-family: 'Futura PT medium';
    color: #333333;
    background-color: #fff;
    padding: 0 1.75rem 1.4rem;
  }

  .select__inner li:hover {
    color: #2d8cda;
  }

  .select *::selection {
    background: transparent;
  }

  .select {
    position: relative;
    text-align: left;
    font-size: 1em;
  }

  .select.opened .select__inner {
    z-index: 1;
    opacity: 1;
  }

  .select__inner li {
    width: 100%;
    display: block;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: inherit;
    margin-bottom: .4rem;
  }

  .select__inner li:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 550px) {
    .p-blog__select {
      order: 2;
    }
  }
</style>
