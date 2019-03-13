import Vuelidate from 'vuelidate';
import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';

import App from './App.vue';
import router from './router';

Vue.use(BootstrapVue);
Vue.use(Vuelidate);

Vue.config.ApiUrl = process.env.VUE_APP_API;
Vue.config.env = process.env.NODE_ENV;
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
