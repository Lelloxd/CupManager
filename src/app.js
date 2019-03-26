import Vuelidate from 'vuelidate';
import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';
import axios from 'axios';
import { store } from './store/index'

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
  store
}).$mount('#app');

axios.interceptors.request.use((config) => {
  if (sessionStorage.getItem('token')) {
    const tokenData = sessionStorage.getItem('token')
    config.headers['Authorization'] = 'Bearer ' + tokenData
  }
  return config
}, (error) => {
  console.log('request failed')
  return Promise.reject(error)
})

