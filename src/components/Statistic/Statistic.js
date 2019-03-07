import axios from 'axios';
import Vue from 'vue';

export default {
  name: 'statistic',
    data() {
        return {
            loading: false,
            statisticMatch: {
              homeTeam: '',
              guestTeam: '',
              homeResult: '',
              guestResult:'',
              homePlayers: [{}],
              guestPlayers: [{}],
            },
            fields:{
              numberOfMesh:{
                label: ""
              },
              name: {
                label: ""
              }
            },
            onShotValue: 0,
            outShotValue: 0,
            cornerValue: 0,
            yellowValue: 0,
            redValue: 0,
            totalYellowHome: 0,
            totalRedHome: 0,
            totalYellowGuest: 0,
            totalRedGuest: 0,
            mapGoalHome: new Map(),
            mapGoalGuest: new Map()
        }
    },
    methods: {
      getStatisticsMatch() {
        this.loading = true;
        const url = Vue.config.ApiUrl + '/match/statistics?id='+ this.$route.query.id;
        axios.get(url).then(response => {
            this.statisticMatch = response.data;

            this.onShotValue = (response.data.homeShotsOnGol * 100) / (response.data.homeShotsOnGol + response.data.guestShotsOnGol);
            this.outShotValue = (response.data.homeShotsOutGol * 100) / (response.data.homeShotsOutGol + response.data.guestShotsOutGol);
            this.cornerValue = (response.data.homeCorners * 100) / (response.data.homeCorners + response.data.guestCorners);
            response.data.homeCards.forEach(card => {
              if(card.type === 'Ammonizione'){
                this.totalYellowHome = this.totalYellowHome + 1;
              } else{
                this.totalRedHome = this.totalRedHome + 1;
              }
            });
            response.data.guestCards.forEach(card => {
              if(card.type === 'Ammonizione'){
                this.totalYellowGuest = this.totalYellowGuest + 1;
              } else{
                this.totalRedGuest = this.totalRedGuest + 1;
              }
            });
            this.yellowValue = (this.totalYellowHome * 100) / (this.totalYellowHome + this.totalYellowGuest);
            this.redValue = (this.totalRedHome * 100) / (this.totalRedHome + this.totalRedGuest);

            this.statisticMatch.homeGoals.forEach(gol => {
              var key = this.getGolPlayerNameHome(gol.id);
              var goals = this.mapGoalHome.get(key);
              var result = '';
              if(goals === undefined){
                result = gol.minute + "'"
              } else{
                var result = goals + ' ' + + gol.minute + "'"
              }
              this.mapGoalHome.set(key,result);
            });

            this.statisticMatch.guestGoals.forEach(gol => {
              var key = this.getGolPlayerNameGuest(gol.id);
              var goals = this.mapGoalGuest.get(key);
              var result = '';
              if(goals === undefined){
                result = gol.minute + "'"
              } else{
                var result = goals + ' ' + gol.minute + "'"
              }
              this.mapGoalGuest.set(key,result);
            });

            this.loading = false;
        })
      },
      getGolPlayerNameHome(goalId){
        var name='';
        this.statisticMatch.homePlayers.forEach(player => {
          player.goals.forEach(goal => {
            if(goal.id === goalId){
              name =  player.name + ' ' + player.surname;
            }
          });
        });
        return name;
      },
      getGolPlayerNameGuest(goalId){
        var name='';
        this.statisticMatch.guestPlayers.forEach(player => {
          player.goals.forEach(goal => {
            if(goal.id === goalId){
              name =  player.name + ' ' + player.surname;
            }
          });
        });
        return name;
      }
  },mounted: function() {
    this.getStatisticsMatch();
  }
}
