<template>
  <div class="p-main">
    <Banner
      view="MAIN_PAGE"
      :banner="pageContent.banner"
    >
      <Mouse />
    </Banner>

    <Services
      :services="pageContent.services"
    />

    <Calculator
      :calculator="pageContent.calculator"
    />

    <Clients
      :clients="pageContent.clients"
    />

    <Portfolio
      view="MAIN_PAGE"
      :portfolio="pageContent.portfolio"
    />

    <Team
      :team="pageContent.team"
    />

    <DiscussProject
      view="PAGE_MAIN"
    />

  </div>

</template>

<script>
  import Banner from '~/components/Banner/Banner.vue'
  import Mouse from '~/components/Banner/Mouse.vue'
  import Services from '~/components/Services/Services.vue'
  import Calculator from '~/components/Calculator/Calculator.vue'
  import Clients from '~/components/Clients/Clients.vue'
  import Portfolio from '~/components/Portfolio/Portfolio.vue'
  import Team from '~/components/Team/Team.vue'
  import DiscussProject from '~/components/Shared/DiscussProject'


  export default {
    head () {
      return {
        title: `ART MARKS`
      }
    },
    components: {
      Banner,
      Mouse,
      Services,
      Calculator,
      Clients,
      Portfolio,
      Team,
      DiscussProject
    },
    computed: {
      pageContent() {
        return this.$store.state.homePage;
      },

    },
  }
</script>
