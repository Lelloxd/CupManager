import { required } from 'vuelidate/lib/validators';
import axios from 'axios';
import Vue from 'vue';

export default {
  name: 'bests',
    data() {
        return {
            loading: false,
            bests: this.getBests(),
        }
    },
    methods: {
      getBests() {
        this.loading = true;
        const url = Vue.config.ApiUrl + '/bests';
        axios.get(url).then(response => {
            this.bests = response.data;
            this.loading = false;
        })
      }
  }
}
