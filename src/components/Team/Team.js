import axios from 'axios';
import moment from 'moment';
import Vue from 'vue';

export default {
  name: 'team',

  data() {
    return {
      fields: {
        numberOfMesh: {
          label: 'N.',
        },
        name: {
          label: 'Nome',
        },
        surname: {
          label: 'Cognome',
        },
        birthOfDay: {
          label: 'Data di nascita',
          formatter: value => moment(String(value)).format('DD/MM/YYYY'),
        },
        action: {
          label: '#',
        },
      },
      id: null,
      loading: true,
      player: [],
      players: [],
      selected: false,
      team: [],
      teams: this.getTeams(),
    };
  },

  methods: {
    getTeam(id) {
      this.id = id;
      this.loading = true;
      this.selected = true;
      const url = `${Vue.config.ApiUrl}/team?id=${id}`;
      axios.get(url)
        .then((response) => {
          this.team = response.data;
          this.players = this.team.players;
          this.loading = false;
        });
    },

    getTeams() {
      this.loading = true;
      this.selected = true;
      const url = `${Vue.config.ApiUrl}/team/all`;
      axios.get(url)
        .then((response) => {
          this.teams = response.data;
          this.loading = false;
        });
    },

    reload() {
      window.location = '';
    },

    remove() {
      const url = `${Vue.config.ApiUrl}/team?id=${this.id}`;
      axios.delete(url)
        .then(() => {
          this.getTeams();
        });
    },

    removePlayer() {
      const url = `${Vue.config.ApiUrl}/player?id=${this.player.id}`;
      axios.delete(url)
        .then(() => {
          this.getTeam(this.id);
          this.$refs.modalDelete.hide();
        });
    },

    setPlayerId(player) {
      this.player = player;
    },
  },
};
