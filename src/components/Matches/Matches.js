import axios from 'axios';
import Vue from 'vue';

export default {
  name: 'matches',

  data() {
    return {
      fields: {
        homeTeam: {
          label: 'Home Team',
        },
        risultato: {
          label: 'Risultato',
        },
        guestTeam: {
          label: 'Guest Team',
        },
        date: {
          label: 'Data',
          sortable: true
        },
        stato: {
          label: 'Stato',
        },
      },
      groups: [],
      matchTypes: [
        { value: 'Semifinale Euro Cup', text: 'Semifinale Euro Cup' },
        { value: 'Semifinale Rovarè Cup', text: 'Semifinale Rovarè Cup' },
        { value: 'Finale Euro Cup', text: 'Finale Euro Cup' },
        { value: 'Finale Rovarè Cup', text: 'Finale Rovarè Cup' }
      ],
      loading: true,
      matches: [],
      filter: null
    };
  },

  computed: {
    items () {
      if (this.groups.includes(this.filter)){
        return this.matches.filter(item => (item.group != null && item.group.name === this.filter))
      } else{
        return this.filter
          ? this.matches.filter(item => item.matchType === this.filter)
          : this.matches
      }
    }
  },

  methods: {
    getGroups() {
      const url = `${Vue.config.ApiUrl}/group/all`;
      this.loading = true;

      axios.get(url)
        .then((response) => {
          const tmp = [];
          this.groups = response.data;
          this.groups.forEach(element => {
            tmp.push(element.name);
          });
          this.groups = tmp;
          this.matchTypes = tmp.concat(this.matchTypes);
          this.loading = false;
        });
    },

    getMatches() {
      const url = `${Vue.config.ApiUrl}/match/all/statistics`;
      this.loading = true;

      axios.get(url)
        .then((response) => {
          this.matches = response.data;
          this.loading = false;
        });
    },

    rowSelected(item) {
      this.$router.push({
        name: 'match',
        query: {
          id: item[0].matchId,
        },
      });
    },
  },

  mounted: function() {
    this.getMatches();
    this.getGroups();
  }
};
