<template>
  <div class="p-team">
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

      <div class="p-team__items-wrap">
        <ArtMarksTitleImg
          view="PAGE_TEAM"
          :img="pageContent.img"
          v-in-viewport
        />

        <div class="p-team__items flex fw-w jc-fs ai-s">
          <TeamPersonItem
            v-for="item, i in pageContent.team"
            :key="i"
            :item="item"
            v-in-viewport.once
            view="PAGE_TEAM"
          />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Caption from '~/components/Shared/Caption'
  import Breadcrumbs from '~/components/Shared/Breadcrumbs'
  import TeamPersonItem from '~/components/Team/TeamPersonItem.vue'
  import ArtMarksTitleImg from '~/components/Shared/ArtMarksTitleImg'

  export default {
    components: {
      Breadcrumbs,
      Caption,
      TeamPersonItem,
      ArtMarksTitleImg
    },
    computed: {
      pageContent() {
        return this.$store.state.aboutTeam;
      }
    },
    head() {
      return {
        title: this.pageContent.pageTitle,
      }
    },
  }
</script>

<style>
  .p-team {
    padding-bottom: 4.6875rem;
    color: #333333;
  }

  .p-team__items-wrap {
    position: relative;
  }

  .p-team__items {
    margin-top: 3.4375rem;
  }
</style>
