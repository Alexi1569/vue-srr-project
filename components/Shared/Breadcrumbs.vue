<template>
  <div class="breadcrumbs">
    <ul class="breadcrumbs__list flex jc-fs fw-w ai-s">
      <li>
        <nuxt-link :to="homeLink.link">{{homeLink.text}}</nuxt-link>
      </li>
      <li
        v-for="item, i in breadcrumbs"
        :key="i"
      >
        <nuxt-link :to="item.link">{{item.text}}</nuxt-link>
      </li>
      <li>
        {{this.title}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        links: [],
        homeLink: {
          text: 'ART MARKS',
          link: '/'
        }
      }
    },
    computed: {
      breadcrumbs() {
        const _breadcrumbs = this.$store.state.global.siteMap;
        const splittedPath = this.$route.path.split('/');
        const resPath = splittedPath.splice(1, splittedPath.length);

        let res = [];
        let tmp = {};

        for (let i = 0; i < resPath.length - 1; i++) {
          if (i === 0) {
            res.push({
              text: _breadcrumbs[resPath[i]].text,
              link: _breadcrumbs[resPath[i]].link
            });

            tmp = _breadcrumbs[resPath[i]].inner;
          } else {
            res.push({
              text: tmp[resPath[i]].text,
              link: tmp[resPath[i]].link
            });

            tmp = tmp[resPath[i]].inner;
          }
        }

        return res;
      }
    },
    props: {
      title: {
        type: String,
        required: false,
      }
    },
  }
</script>

<style>
  .breadcrumbs {
    padding: 1.5rem 0 1.2rem;
  }

  .breadcrumbs__list {
    list-style-type: none;
    color: #303030;
    letter-spacing: 0.025em;
    font-size: .875em;
  }

  .breadcrumbs__list a {
    text-decoration: none;
    color: inherit;
  }

  .breadcrumbs__list li {
    position: relative;
    padding-right: .875rem;
    margin-right: 1rem;
    font-family: 'Futura PT medium';
  }

  .breadcrumbs__list li:first-child {
    font-family: 'Futura PT demi';
  }

  .breadcrumbs__list li:after {
    content: '';
    position: absolute;
    width: 3px;
    height: 3px;
    background-color: #2393d8;
    right: 0;
    top: 50%;
    margin-top: -1px;
  }

  .breadcrumbs__list li:last-child {
    color: #797979;
    padding-right: 0;
    margin-right: 0;
  }

  .breadcrumbs__list li:last-child:after {
    display: none;
  }
</style>
