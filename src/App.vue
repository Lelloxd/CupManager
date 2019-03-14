<template>
  <div class="app container-fluid" id="app">
    <div class="row">
      <navbar />
    </div>

    <div class="app-content row">
      <div class="min-h-100 w-100">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Bests from "./components/Bests/Bests.vue";

import Capocannoniere from "./components/Capocannoniere/Capocannoniere.vue";
import Cards from "./components/Cards/Cards.vue";

import ModalGroupDetails from "./components/ModalGroupDetails/ModalGroupDetails.vue";
import ModalGroupNew from "./components/ModalGroupNew/ModalGroupNew.vue";

import Matches from "./components/Match-Entity/Matches.vue";
import Match from "./components/Match-Entity/Match.vue";

import Navbar from "./components/Navbar/Navbar.vue";
import NewMatch from "./components/NewMatch/NewMatch.vue";
import NewTeam from "./components/Team/NewTeam.vue";

import Ranking from "./components/Ranking/Ranking.vue";

import Statistic from "./components/Statistic/Statistic.vue";

import Team from "./components/Team/Team.vue";
import TeamReg from "./components/Regs/TeamReg.vue";

import ViewGroups from "./components/Groups/ViewGroups.vue";

export default {
  name: 'app',
  components: {
    Bests,

    Capocannoniere,
    Cards,

    Matches,
    ModalGroupDetails,
    ModalGroupNew,

    Navbar,
    NewMatch,
    NewTeam,

    Ranking,

    Statistic,

    Team,
    TeamReg,

    ViewGroups,
  }
};
</script>

<style src="./app.scss" lang="scss"></style>
