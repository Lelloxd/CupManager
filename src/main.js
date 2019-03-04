import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import TeamReg from './components/Regs/TeamReg'

Vue.use(Vuelidate);
Vue.use(BootstrapVue);

Vue.config.productionTip = false
Vue.config.ApiUrl = process.env.VUE_APP_API;
Vue.config.env = process.env.NODE_ENV;

new Vue({
  render: h => h(App),
  router,
  components: TeamReg
}).$mount('#app')
