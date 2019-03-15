import axios from 'axios';
import Vue from 'vue';

export default {
  name: 'modalGroupDetails',
  props: ['groupid'],
  data() {
    return {
      allTeams: [],
      group: {},
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
        action: {
          label: '#',
        },
      },
      loading: true,
      teamSelected: {},
      selectableTeams: [],
      ranking: {
        team: {},
        group: {},
      },
    };
  },
  methods: {
    createRanking() {
      this.ranking.group = this.group;
      this.ranking.team = this.teamSelected;
      axios.post(`${Vue.config.ApiUrl}/ranking`, this.ranking)
        .then(() => {
          this.getGroup(this.groupid);
          this.getTeams();
          this.getSelectableTeams();
        });
    },
    deleteGroup() {
      const url = `${Vue.config.ApiUrl}/group?id=${this.groupid}`;
      axios.delete(url)
        .then(() => {
          this.$refs.modalDelete.hide();
        });
    },
    deleteRanking(id) {
      const url = `${Vue.config.ApiUrl}/ranking?id=${id}`;
      axios.delete(url)
        .then(() => {
          this.$refs.modalDelete.hide();
          this.getGroup(this.groupid);
          this.getSelectableTeams();
        });
    },
    getGroup(id) {
      const url = `${Vue.config.ApiUrl}/group?id=${id}`;
      axios.get(url)
        .then((response) => {
          this.group = response.data;
          this.loading = false;
        });
    },
    getSelectableTeams() {
      const url = `${Vue.config.ApiUrl}/team/selectable`;
      axios.get(url)
        .then((response) => {
          this.selectableTeams = response.data;
          this.loading = false;
        });
    },
    getTeamName(rankingId) {
      console.log(rankingId);
      console.log(this.allTeams);
      let name = '';
      this.allTeams.forEach((team) => {
        if (team.ranking !== null && team.ranking !== undefined) {
          if (team.ranking.id === rankingId) {
            name = team.name;
          }
        }
      });
      return name;
    },
    getTeams() {
      const url = `${Vue.config.ApiUrl}/team/all`;
      axios.get(url)
        .then((response) => {
          this.allTeams = response.data;
          this.loading = false;
        });
    },
  },
  mounted: function () { // eslint-disable-line
    this.getGroup(this.groupid);
    this.getSelectableTeams();
    this.getTeams();
  },
  watch: {
    groupid: function (newVal) { // eslint-disable-line
      this.getGroup(newVal);
      this.getSelectableTeams();
    },
  },
};
