import axios from 'axios';
import Vue from 'vue';

export default {
  name: 'ranking',

  data() {
    return {
      allTeams: this.getTeams(),
      groups: this.getGroups(),
      fields: {
        team: {
          label: 'Squadra',
        },
        points: {
          label: 'Punti',
        },
        goalsMade: {
          label: 'GF',
        },
        goalsConceded: {
          label: 'GS',
        },
        won: {
          label: 'V',
        },
        lost: {
          label: 'P',
        },
        drawn: {
          label: 'N',
        },
      },
      loading: true,
    };
  },

  methods: {
    getGroups() {
      const url = `${Vue.config.ApiUrl}/group/all`;
      this.loading = true,
      axios.get(url)
        .then((response) => {
          this.groups = response.data;
          this.loading = false;
        });
    },

    getTeamName(rankingId) {
      let name = '';
      this.allTeams.forEach((team) => {
        if (team.ranking !== undefined) {
          if (team.ranking.id === rankingId) {
            name = team.name;
          }
        }
      });
      return name;
    },

    getTeams() {
      const url = `${Vue.config.ApiUrl}/team/all`;
      this.loading = true,
      axios.get(url)
        .then((response) => {
          this.allTeams = response.data;
          this.loading = false;
        });
    },
  },
};
