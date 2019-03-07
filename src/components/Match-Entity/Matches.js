import axios from 'axios';
import Vue from 'vue';

export default {
  name: 'matches',
    data() {
        return {
            loading: false,
            fields: {
              homeTeam: {
                label: 'Home Team'
              },
              risultato: {
                label: 'Risultato'
              },
              guestTeam: {
                label: 'Guest Team'
              },
              date: {
                label: 'Data'
              },
              stato: {
                label: 'Stato'
              }
            },
            matches: this.getMatches(),
        }
    },
    methods: {
      getMatches(id) {
        this.id = id;
        this.loading = true;
        const url = Vue.config.ApiUrl + '/match/all/statistics';
        axios.get(url).then(response => {
            this.matches = response.data;
            this.loading = false;
        })
      },
      rowSelected(item) {
        this.$router.push({ name: 'match', query: { id: item[0].matchId } })
      }
  }
}
