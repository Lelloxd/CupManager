import axios from 'axios';
import Vue from 'vue';

export default {
  name: 'capocannoniere',
    data() {
        return {
            loading: false,
            capocannoniere: this.getCapocannoniere(),
        }
    },
    methods: {
      getCapocannoniere() {
        this.loading = true;
        const url = Vue.config.ApiUrl + '/capocannoniere';
        axios.get(url).then(response => {
            this.capocannoniere = response.data;
            this.loading = false;
        })
      }
  }
}
