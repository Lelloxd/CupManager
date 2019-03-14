import axios from 'axios'
import Vue from 'vue'

export default {
  name: 'groupDetail',
    props: ["groupid"],
    data() {
        return {
            loading: true,
            group: {},
            selectableTeams:[],
            allTeams:[],
            teamSelected:{},
            ranking:{
              team: {},
              group:{}
            },
            fields: {
              team:{
                label: 'Squadra',
              },
              points:{
                label: 'Punti'
              },
              goalsMade: {
                label: 'GF'
              },
              goalsConceded :{
                label: 'GS'
              },
              won: {
                label: 'V'
              },
              lost: {
                label: 'P'
              },
              drawn: {
                label: 'N'
              },
              action: {
                label: "#"
              }
            }
        }
    },
    methods: {
      getGroup(id) {
        const url = Vue.config.ApiUrl + '/group?id='+id;
        axios.get(url).then(response => {
            this.group = response.data;
            this.loading = false;
        })
      },
      deleteGroup() {
        const url = Vue.config.ApiUrl + '/group?id='+this.groupid;
        axios.delete(url).then(response => {
            this.$refs.modalDelete.hide()
        })
      },
      deleteRanking(id) {
        const url = Vue.config.ApiUrl + '/ranking?id='+id;
        axios.delete(url).then(response => {
            this.$refs.modalDelete.hide()
            this.getGroup(this.groupid);
            this.getSelectableTeams();
        })
      },
      getTeams(){
        const url = Vue.config.ApiUrl + '/team/all';
        axios.get(url).then(response => {
            this.allTeams = response.data;
            this.loading = false;
        })
      },
      getSelectableTeams(){
        const url = Vue.config.ApiUrl + '/team/selectable';
        axios.get(url).then(response => {
            this.selectableTeams = response.data;
            this.loading = false;
            console.log(this.addTeam)
        })
      },
      createRanking(){
        this.ranking.group = this.group;
        this.ranking.team = this.teamSelected;
        axios.post(Vue.config.ApiUrl + "/ranking", this.ranking).then(response => {
          this.getGroup(this.groupid);
          this.getSelectableTeams();
          this.getTeams();
        }).catch(error => {
          console.log(error);
      });
      },
      getTeamName(rankingId){
        var name='';
        this.allTeams.forEach(team => {
          if(team.ranking != undefined){
            if( team.ranking.id === rankingId){
              name =  team.name;
            }
          }
        });
        return name;
      }
  },
  watch: {
    groupid: function (newVal) {
      this.getGroup(newVal);
      this.getSelectableTeams();
    }
  },
  mounted: function() {
    this.getGroup(this.groupid);
    this.getSelectableTeams();
    this.getTeams();
  }
}
