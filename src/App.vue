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

import VueResource from 'vue-resource';

import Bests from "./components/Bests/Bests.vue";

import Calendar from "./components/Calendar/Calendar.vue";

import Capocannoniere from "./components/Capocannoniere/Capocannoniere.vue";
import Cards from "./components/Cards/Cards.vue";
import Contact from "./components/Contact/Contact.vue";

import FinalPhase from "./components/FinalPhase/FinalPhase.vue"
import FinalPhaseEuroCup from '@/components/FinalPhase/FinalPhaseEuroCup.vue';

import ModalGroupDetails from "./components/ModalGroupDetails/ModalGroupDetails.vue";
import ModalGroupNew from "./components/ModalGroupNew/ModalGroupNew.vue";

import Home from "./components/Home/Home.vue";

import Login from "./components/Login/Login.vue";

import Match from "./components/Match/Match.vue";
import Matches from "./components/Matches/Matches.vue";

import Navbar from "./components/Navbar/Navbar.vue";
import NewMatch from "./components/NewMatch/NewMatch.vue";
import NewPlayer from "./components/NewPlayer/NewPlayer.vue";
import NewTeam from "./components/NewTeam/NewTeam.vue";

import Ranking from "./components/Ranking/Ranking.vue";

import Statistic from "./components/Statistic/Statistic.vue";

import Team from "./components/Team/Team.vue";

import ViewGroups from "./components/Groups/ViewGroups.vue";

export default {
  name: 'app',

  components: {
    Bests,

    Calendar,

    Capocannoniere,
    Cards,
    Contact,

    FinalPhase,
    FinalPhaseEuroCup,

    Home,

    Login,

    Matches,
    ModalGroupDetails,
    ModalGroupNew,

    Navbar,
    NewMatch,
    NewPlayer,
    NewTeam,

    Ranking,

    Statistic,

    Team,

    ViewGroups,
  }
};
</script>

<style src="./app.scss" lang="scss"></style>
