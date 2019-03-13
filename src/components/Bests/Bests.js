import axios from 'axios';
import Vue from 'vue';

export default {
  name: 'bests',

  data() {
    return {
      bests: this.getBests(),
      fields: {
        name: {
          label: 'Nome',
          tdClass: 'rowStyle',
        },
        best: {
          label: 'Migliore in campo',
          tdClass: 'rowStyle',
        },
      },
      loading: false,
    };
  },
  methods: {
    getBests() {
      this.loading = true;
      const url = `${Vue.config.ApiUrl}/bests`;
      axios.get(url)
        .then((response) => {
          this.bests = response.data;
          this.loading = false;
        });
    },
  },
};
