<template>
  <div id="app">
    <img class="logo" alt="logo" src="./assets/logo.jpg">
    <div class="row justify-content-center">
      <div class="col-xs-12 col-sm-10 col-md-6">
        <team-reg brackets="{}"/>
      </div>
    </div>
  </div>
</template>

<script>
import Brackets from './components/Brackets.vue'
import Groups from './components/Groups.vue'
import TeamReg from './components/Regs/TeamReg.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'app',
  components: {
    Brackets,
    Groups,
    TeamReg
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
  margin-top: 60px;
}
.logo {
  width: 200px;
  margin-bottom: 50px;
}
</style>
