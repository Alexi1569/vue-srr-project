<template>
  <div class="brief__content">
    <div
      v-for="item, i in block.links"
      :key="i"
      class="brief__content-item"
    >
      <Toggler
        view="PAGE_BRIEFS"
      >
        <template slot="top">
          <div class="brief__content-top flex ai-c jc-fs">
            <i>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129"><path d="M121.3 34.6c-1.6-1.6-4.2-1.6-5.8 0l-51 51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l53.9 53.9c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2.1-5.8z"></path></svg>
            </i>
            <p>{{item.top}}</p>
          </div>
        </template>
        <template slot="bottom">
          <div class="brief__content-links">
            <NavList
              :menu="item.items"
              view="PAGE_BRIEFS"
            />
          </div>
        </template>
      </Toggler>
    </div>
  </div>
</template>

<script>
  import NavList from '~/components/Shared/NavList'
  import Toggler from '~/components/Shared/Toggler'

  export default {
    components: {
      NavList,
      Toggler
    },
    props: {
      block: {
        type: Object,
        required: true
      }
    },
  }
</script>

<style>
  .brief__content {
    font-size: 1em;
    font-family: 'Futura PT medium';
  }

  .brief__content-item {
    margin-bottom: .75rem;
  }

  .brief__content-item:last-child {
    margin-bottom: 0;
  }

  .brief__content-top i {
    display: inline-block;
    width: 8px;
    margin-right: 10px;
  }

  .brief__content-top svg {
    display: block;
    width: 100%;
    height: auto;
    fill: #333333;
  }
</style>
