<template>
  <div class="p-about">
    <div class="container">
      <Breadcrumbs
        :title="pageContent.pageTitle"
      />
      <div class="p-services__top">
        <Caption
          view="PAGE_BRIEFS"
          :caption="pageContent.caption"
        />
      </div>
      <div class="p-about__head flex jc-sb ai-s">
        <div v-in-viewport class="p-about__head-left">
          <p class="p-about__head-label p-about__head--lighter">{{this.pageContent.top.left.year}}</p>
          <p class="p-about__head-title">{{this.pageContent.top.left.caption}}</p>
          <div class="p-about--text p-about__head-content" v-html="pageContent.top.left.content"></div>
        </div>
        <div v-in-viewport class="p-about__head-right flex fd-c ai-fs jc-fs">
          <p class="p-about__head-label p-about__head--lighter">{{this.pageContent.top.right.now}}</p>
          <div class="p-about__head-items flex fw-w jc-sb ai-s">
            <AboutAdvantage
              v-for="item, i in pageContent.top.right.items"
              :key="i"
              :advantage="item"
              view="PAGE_ABOUT_TOP"
            />
            <TitleImg
              view="PAGE_ABOUT"
              :img="pageContent.top.right.img"
              v-in-viewport
            />
          </div>
        </div>
      </div>
    </div>
    <Instagram
      :instagram="pageContent.instagram"
    />
    <div class="p-about__answers">
      <div class="container">
        <div class="p-about__answers-items flex ai-s jc-sb">
          <AboutAdvantage
            v-for="item, i in pageContent.answers"
            :key="i"
            :advantage="item"
            view="PAGE_ABOUT_ANSWERS"
            v-in-viewport
          />
        </div>

        <div class="p-about__question flex ai-c jc-sb">
          <div class="p-about__video">
            <Video
              v-in-viewport
              view="PAGE_ABOUT"
              :video="pageContent.question.video"
            />
          </div>
          <Info
            v-in-viewport
            :info="pageContent.question.info"
          />
        </div>
      </div>
    </div>
    <div class="p-about__advantages">
      <div class="container">
        <div class="p-about__advantages-items flex jc-sa ai-fs">
          <AboutAdvantage
            v-for="item, i in pageContent.advantages"
            :key="i"
            v-in-viewport
            :advantage="item"
            view="PAGE_ABOUT_ADVANTAGES"
          />
        </div>
      </div>
    </div>

    <div class="p-about__blocks">
      <div class="container">
        <div class="p-about__blocks-inner">
          <Block
            :item="pageContent.bottom.team"
          />
          <Block
            :item="pageContent.bottom.office"
          />
          <Block
            :item="pageContent.bottom.awards"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Caption from '~/components/Shared/Caption'
  import Breadcrumbs from '~/components/Shared/Breadcrumbs'
  import AboutAdvantage from '~/components/About/AboutAdvantage'
  import ArtMarksTitleImg from '~/components/Shared/ArtMarksTitleImg'
  import Instagram from '~/components/Instagram/Instagram'
  import Video from '~/components/Shared/Video'
  import AboutInfo from '~/components/About/AboutInfo'
  import AboutBlock from '~/components/About/AboutBlock'

  export default {
    components: {
      Breadcrumbs,
      Caption,
      AboutAdvantage,
      TitleImg: ArtMarksTitleImg,
      Instagram,
      Video,
      Info: AboutInfo,
      Block: AboutBlock
    },
    head() {
      return {
        title: this.pageContent.pageTitle
      }
    },
    data() {
      return {
        bottom: {
          team: {
            type: 'team',
            btn: {
              type: 'link',
              iconPosition: 'before',
            },
          },
          office: {
            type: 'office',
            btn: {
              type: 'link',
              iconPosition: 'before',
            },
          },
          awards: {
            type: 'awards',
            btn: {
              type: 'link',
              iconPosition: 'before',
            },
          },
        },
      }
    },
    computed: {
      pageContent() {
        return this.extend(
          {},
          this.$store.state.aboutPage,
          {
            bottom: Object.assign(
              {},
              this.$store.state.aboutPage.bottom,
              this.bottom
            )
          },
        )
      }
    }
  }
</script>

<style>
  .p-about {
    color: #333333;
    padding-bottom: 7.5rem;
  }

  .p-about__head {
    padding-top: 3.4375rem;
  }

  .p-about__head-right {
    position: relative;
    width: 51.65%;
    font-family: 'Futura PT medium';
    opacity: 0;
    transition: 1.3s all cubic-bezier(.19,1,.22,1) .2s;
    transform: translateX(20%);
  }

  .p-about__head-right.in-viewport {
    opacity: 1;
    transform: translateX(0%);
  }

  .p-about__head-right.above-viewport {
    transform: translateX(0%) !important;
    opacity: 1 !important;
    transition: none !important;
  }

  .p-about__head-left {
    width: 29.4%;
    opacity: 0;
    transform: translateY(25%);
    transition: 1s all cubic-bezier(.19,1,.22,1);
  }

  .p-about__head-left.in-viewport {
    opacity: 1;
    transform: translateY(0%);
  }

  .p-about__head-left.above-viewport {
    transform: translateY(0%) !important;
    opacity: 1 !important;
    transition: none !important;
  }

  .p-about__head--lighter,
  .p-about--text b {
    color: #7c7c7c;
    line-height: 1.125;
    font-weight: normal;
  }

  .p-about__advantages {
    padding: 5rem 0 4.6875rem;
    background-image: linear-gradient( 90deg, rgb(151,47,218) 0%, rgb(50,47,184) 100%);
  }

  .p-about--text p {
    margin-bottom: 1rem;
  }

  .p-about__video {
    width: 64.2%;
  }

  .p-about--text *:last-child {
    margin-bottom: 0;
  }

  .p-about__head-items {
    margin-bottom: -6.3rem;
  }

  .p-about__question {
    padding-top: 5.5rem;
  }

  .p-about__answers,
  .p-about__blocks {
    padding-top: 8.125rem;
  }

  .p-about__advantages {
    margin-top: 8.125rem;
  }

  .p-about--text {
    font-family: 'Futura PT medium';
    font-size: 1em;
  }

  .p-about__head-label {
    font-size: 1em;
    font-family: 'Futura PT medium';
    margin-bottom: 1.25rem;
  }

  .p-about__head-title {
    font-size: 1.625em;
    font-family: 'Futura PT demi';
    line-height: 1;
    margin-bottom: 2.1rem;
  }

  @media screen and (max-width: 1300px) {
    .p-about__head-title {
      font-size: 1.4em;
      margin-bottom: 1.6rem;
    }

    .p-about--text {
      font-size: .95em;
    }

    .p-about__head-label {
      font-size: .9em;
    }

    .p-about__head-left {
      width: 36%;
    }

    .p-about__head-right {
      width: 55%;
    }

    .p-about__head-items {
      margin-bottom: -5.5rem;
    }

    .p-about__video {
      width: 55%;
    }
  }

  @media screen and (max-width: 930px) {
    .p-about__head-left {
      width: 100%;
    }

    .p-about__head-right {
      width: 100%;
      margin-top: 3rem;
    }

    .p-about__head {
      flex-wrap: wrap;
    }
  }

  @media screen and (max-width: 900px) {
    .p-about__answers-items {
      flex-wrap: wrap;
      align-items: flex-start;
    }

    .p-about__question {
      flex-wrap: wrap;
    }

    .p-about__video {
      width: 70%;
      order: 2;
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media screen and (max-width: 767px) {
    .p-about__video {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
    }

    .p-about__advantages {
      padding: 3.5rem 0;
    }

    .p-about__answers,
    .p-about__question,
    .p-about__blocks {
      padding-top: 4.5rem;
    }

    .p-about {
      padding-bottom: 4.5rem;
    }

    .p-about__advantages {
      margin-top: 4.5rem;
    }
  }

  @media screen and (max-width: 600px) {
    .p-about__advantages-items {
      flex-wrap: wrap;
    }
  }

  @media screen and (max-width: 550px) {
    .p-about__head-items {
      margin-bottom: -3rem;
    }
  }

  @media screen and (max-width: 450px) {
    .p-about__video {
      width: 100%;
    }
  }
</style>
