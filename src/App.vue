<template>
  <div id="app">
    <navbar/>
    <div class="row justify-content-center h-100">
      <div class="col-12" >
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Brackets from './components/Brackets.vue'
import Groups from './components/Groups.vue'
import TeamReg from './components/Regs/TeamReg.vue'
import Team from './components/Team/Team.vue'
import NewTeam from './components/Team/NewTeam.vue'
import Navbar from './components/Navbar/Navbar.vue'
import Capocannoniere from './components/Capocannoniere/Capocannoniere.vue'
import Bests from './components/Bests/Bests.vue'
import NewMatch from './components/NewMatch/NewMatch.vue'
import Matches from './components/Match-Entity/Matches.vue'
import Match from './components/Match-Entity/Match.vue'
import Cards from './components/Cards/Cards.vue'
import Group from './components/Groups/Group.vue'
import ViewGroups from './components/Groups/ViewGroups.vue'
import GroupDetail from './components/Groups/GroupDetail.vue'
import Ranking from './components/Groups/Ranking.vue'
import Statistic from './components/Statistic/Statistic.vue'
import moment from 'moment'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


export default {
  name: 'app',
  components: {
    Brackets,
    Groups,
    TeamReg,
    Team,
    NewTeam,
    Navbar,
    Capocannoniere,
    Bests,
    NewMatch,
    Matches,
    Cards,
    Group,
    ViewGroups,
    GroupDetail,
    Ranking,
    Statistic
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  height: 100%;
}

.logo {
  width: 200px;
  margin-bottom: 50px;
}

html, body{
  height: 100%;
}
</style>
