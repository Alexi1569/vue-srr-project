<template>
  <section class="s-team">
    <div class="container">
      <Caption
        view="SECTION_TEAM"
        :caption="teamCalc.caption"
      />
      <div class="s-team__wrapper">
        <div class="s-team__items s-team--padding flex jc-sb ai-s">
          <TeamPersonItem
            v-for="item, i in teamCalc.items"
            :key="i"
            :item="item"
            v-in-viewport
            view="SECTION_TEAM"
          />
        </div>
        <div class="s-team__advantages s-team--padding flex jc-sb ai-s">
          <TeamAdvantageItem
            v-for="item, i in teamCalc.advantages"
            :key="i"
            :item="item"
          />
        </div>
      </div>
      <Button
        view="SECTION_TEAM"
        :btn="teamCalc.btn"
      />
    </div>
  </section>
</template>

<script>
  import Caption from '~/components/Shared/Caption.vue'
  import Button from '~/components/Shared/Button.vue'
  import TeamPersonItem from '~/components/Team/TeamPersonItem'
  import TeamAdvantageItem from '~/components/Team/TeamAdvantageItem'

  export default {
    components: {
      Caption,
      TeamPersonItem,
      TeamAdvantageItem,
      Button
    },
    props: {
      team: {
        type: Object,
        required: true
      }
    },
    computed: {
      teamCalc() {
        return Object.assign(
          {},
          this.team,
          {
            btn: this.extend({}, this.team.btn, this.btn)
          }
        )
      }
    },
    data() {
      return {
        btn: {
          type: 'link',
        }
      }
    }
  }
</script>

<style>
  .s-team {
    padding: 8.125rem 0;
    color: #303030;
  }

  .s-team > .container {
    text-align: center;
  }

  .s-team__items {
    margin-right: -1.5rem;
  }

  .s-team__wrapper {
    padding-top: 3.4375rem;
    width: 79%;
    margin: 0 auto;
    text-align: left;
  }

  .s-team__advantages {
    margin-top: 3.125rem;
    padding-top: 1.5rem;
    margin-right: -1.5rem;
    border-top: 1px solid #e8e8e8;
  }

  .s-team--padding {
    padding-left: 5.1%;
    padding-right: 5.1%;
  }

  @media screen and (max-width: 1400px) {
    .s-team__wrapper {
      width: 100%;
    }
  }

  @media screen and (max-width: 1199px) {
    .s-team {
      padding: 6.8rem 0;
    }
  }

  @media screen and (max-width: 991px) {
    .s-team__advantages {
      flex-wrap: wrap;
      justify-content: space-around;
      margin-bottom: -1.5rem;
      margin-right: 0;
    }
  }

  @media screen and (max-width: 900px) {
    .s-team__items {
      flex-wrap: wrap;
      margin-bottom: -2.5rem;
    }

    .s-team__items {
      width: 65%;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 767px) {
    .s-team {
      padding: 6rem 0;
    }

    .s-team--padding {
      padding-left: 0;
      padding-right: 0;
    }
  }

  @media screen and (max-width: 650px) {
    .s-team__items {
      width: 80%;
    }
  }

  @media screen and (max-width: 500px) {
    .s-team__items {
      width: 100%;
    }
  }
</style>
