<template>
  <div id="app">
    <navbar/>
    <div class="row justify-content-center" style="margin-top: 20px">
      <div class="col-12">
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
    ViewGroups
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
}
.logo {
  width: 200px;
  margin-bottom: 50px;
}
</style>
