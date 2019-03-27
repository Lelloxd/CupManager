import axios from 'axios';
import Vue from 'vue';
import {mapState, mapActions} from 'vuex'

export default {
  name: 'ranking',

  computed:{
    ...mapState('account', ['status']),
  },

  data() {
    return {
      allTeams: [],
      groups: [],
      rankings: new Map(),
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
          this.setRankings();
        });
    },

    setRankings() {
      this.loading = true;

      const ids = [];
      const promises = [];

      this.groups.forEach(element => {
        const url = `${Vue.config.ApiUrl}/group/rankings?groupId=${element.id}`;
        ids.push(element.id);
        promises.push(axios.get(url));
      });

      Promise.all(promises)
        .then((responses) => {
          responses.forEach((response, index) => {
            this.rankings.set(ids[index],response.data);

          });
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
      this.loading = true;
      const url = `${Vue.config.ApiUrl}/team/all`;
      return axios.get(url)
        .then((response) => {
          this.allTeams = response.data;
        });
    },
  },

  mounted: function() {
    this.getTeams()
      .then(() => {
        this.getGroups();
      })
  }
};
