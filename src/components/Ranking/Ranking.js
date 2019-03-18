import axios from 'axios';
import Vue from 'vue';

export default {
  name: 'ranking',

  data() {
    return {
      allTeams: [],
      groups: [],
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

    getRankings(groupId) {
      console.log(groupId)
      // const url = `${Vue.config.ApiUrl}/group/rankings?groupId=${groupId}`;
      // this.loading = true,
      // axios.get(url)
      //   .then((response) => {
      //     this.loading = false;
      //     return response.data;
      //   });
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

  mounted: function() {
    this.getGroups();
    this.getTeams();
  }
};
