import { required } from 'vuelidate/lib/validators';
import axios from 'axios';
import Vue from 'vue';
import moment from 'moment';

export default {
  name: 'team',
    data() {
        return {
            loading: false,
            selected: false,
            teams: this.getTeams(),
            team: [],
            player: [],
            players: [],
            id: null,
            fields: {
              name: {
                label: 'Nome',
              },
              surname: {
                label: 'Cognome',
              },
              birthOfDay: {
                label: 'Data di nascita',
                formatter: value => moment(String(value)).format('DD/MM/YYYY')
              },
              action:{
                label: '#'
              }
            }
        }
    },

    methods: {
      getTeams(id) {
        this.id = id;
        this.loading = true;
        this.selected = true;
        const url = Vue.config.ApiUrl + '/team/all';
        axios.get(url).then(response => {
            this.teams = response.data;
            this.loading = false;
        })
      },
      getTeam(id) {
          this.id = id;
          this.loading = true;
          this.selected = true;
          const url = Vue.config.ApiUrl + '/team?id='+ id;
          axios.get(url).then(response => {
              this.team = response.data;
              this.players = this.team.players;
              this.loading = false;
          })
      },
      reload() {
          window.location = '';
      },
      remove(){
        const url = Vue.config.ApiUrl + '/team?id='+ this.id;
          axios.delete(url).then(response => {
            this.getTeams();
          })
      },
      removePlayer(){
        const url = Vue.config.ApiUrl + '/player?id='+ this.player.id;
          axios.delete(url).then(response => {
              this.getTeam(this.id);
              this.$refs.modalDelete.hide()
          })
      },
      setPlayerId(player){
        this.player = player;
      }
  }
}
