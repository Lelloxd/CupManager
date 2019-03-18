import axios from 'axios';
import Vue from 'vue';

export default {
  name: 'capocannoniere',

  data() {
    return {
      capocannoniere: this.getCapocannoniere(),
      fields: {
        name: {
          label: 'Giocatore',
          tdClass: 'rowStyle',
        },
        gol: {
          label: 'Gol fatti',
          tdClass: 'rowStyle',
        },
      },
      loading: true,
    };
  },
  methods: {
    getCapocannoniere() {
      this.loading = true;
      const url = `${Vue.config.ApiUrl}/capocannoniere`;
      axios.get(url)
        .then((response) => {
          this.capocannoniere = response.data;
          this.loading = false;
        });
    },
  },
};
