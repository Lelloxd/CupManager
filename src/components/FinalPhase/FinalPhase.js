import axios from 'axios';
import Vue from 'vue';

export default {
  name: 'final-phase',

  data() {
    return {
      loading: true,
      matches: []
    };
  },

  methods: {

    getMatches(){
      const url = `${Vue.config.ApiUrl}/matchByType?matchType=${this.$route.query.type}`;
      this.loading = false;
      axios.get(url)
        .then((response) => {
          this.loading = true;
        });
    }

  },

  mounted: function() {
    this.getMatches();
  },
};
