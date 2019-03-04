import axios from 'axios';
import Vue from 'vue';

export default {
  name: 'match',
    data() {
        return {
            player: '',
            isHome: true,
            isCompleted: false,
            cardType: '',
            minute: 0,
            goal: {
              match: {}
            },
            best: {
              player: {},
              match: {}
            },
            card: {
              match: {}
            },
            cardTypes: [
              { value: 0, text: 'Ammonizione' },
              { value: 1, text: 'Espulsione' },
            ],
            loading: false,
            statisticMatch: this.getStatisticsMatch(),
            match: this.getMatch(),
            homeTeam: '',
            homeResult: '',
            guestTeam:[],
            guestResult: '',
            selectedTeamPlayers:{},
            selectedTeamGoals:[],
            selectedTeamCards:[],
            selectedTeamBest:[],
            homePlayers:[],
            guestPlayers:[],
            allPlayers: [],
            homeGoals:[],
            guestGoals:[],
            homeBest:[],
            guestBest:[],
            homeCards: [],
            guestCards:[],
            fields:{
              fullName: {
                label: 'Giocatori'
              }
            },
            golFields:{
              player: {
                label: 'Giocatore'
              },
              minute: {
                label: 'Minuto',
                formatter: value => value + '"',
                sortable: true
              },
              info: {
                label: "#"
              }
            },
            cardFields:{
              player: {
                label: 'Giocatore'
              },
              minute: {
                label: 'Minuto',
                formatter: value => value + '"',
                sortable: true
              },
              type:{
                label: 'Tipo'
              },
              info: {
                label: "#"
              }
            },
            bestFields:{
              player: {
                label: 'Giocatore',
              },
              info: {
                label: "#"
              }
            }
        }
    },
    methods: {
      getStatisticsMatch() {
        this.loading = true;
        const url = Vue.config.ApiUrl + '/match/statistics?id='+ this.$route.query.id;
        axios.get(url).then(response => {
            this.statisticMatch = response.data;
            this.homeTeam = this.statisticMatch.homeTeam,
            this.homeResult = this.statisticMatch.homeResult,
            this.guestTeam = this.statisticMatch.guestTeam,
            this.guestResult = this.statisticMatch.guestResult,
            this.homePlayers = this.statisticMatch.homePlayers,
            this.guestPlayers = this.statisticMatch.guestPlayers,
            this.homeGoals = this.statisticMatch.homeGoals,
            this.guestGoals = this.statisticMatch.guestGoals,
            this.homeCards = this.statisticMatch.homeCards,
            this.guestCards = this.statisticMatch.guestCards,
            this.homeBest = this.statisticMatch.homeBest;
            this.guestBest = this.statisticMatch.guestBest;
            this.allPlayers = this.homePlayers.concat(this.guestPlayers);
            this.isCompleted = this.statisticMatch.completed;
            if(this.isHome){
              this.setHomePlayersGoals()
              this.setHomePlayersCards();
              this.setHomePlayersBest();
            }else{
              this.setGuestPlayersGoals();
              this.setGuestPlayersCards();
              this.setGuestPlayersBest();
            }
            this.loading = false;
        })
      },
      addGoal(player){
        this.goal.match = this.match;
        this.goal.player = player;
        this.goal.minute = this.minute;
        axios.post(Vue.config.ApiUrl + "/gol", this.goal).then(response => {
          this.goal = {};
          this.minute = 0;
          this.statisticMatch = this.getStatisticsMatch();
        }).catch(error => {
          console.log(error);
        });
      },
      deleteGoal(goalId){
        axios.delete(Vue.config.ApiUrl + "/gol?id="+ goalId).then(response => {
          this.goal = {};
          this.statisticMatch = this.getStatisticsMatch();
        }).catch(error => {
          console.log(error);
        });
      },
      addBest(player){
        this.best.player = player;
        this.best.match = this.match;
        axios.post(Vue.config.ApiUrl + "/best", this.best).then(response => {
          this.best = {};
          this.statisticMatch = this.getStatisticsMatch();
        }).catch(error => {
          console.log(error);
        });
      },
      deleteBest(bestid){
        axios.delete(Vue.config.ApiUrl + "/best?id="+ bestid).then(response => {
          this.best = {};
          this.statisticMatch = this.getStatisticsMatch();
        }).catch(error => {
          console.log(error);
        });
      },
      deleteMatch(){
        axios.put(Vue.config.ApiUrl + "/ranking/reopenMatch?matchId="+this.match.id).then(response => {
          axios.delete(Vue.config.ApiUrl + "/match?id="+ this.match.id).then(response => {
            this.$router.push({ name: 'all-matches' })
          }).catch(error => {
            console.log(error);
          });
        }).catch(error => {
          console.log(error);
        });
      },
      completedMatch(completed){
        axios.put(Vue.config.ApiUrl + "/match/completedMatch?completed="+completed, this.match).then(response => {
          if(!this.isCompleted){
            axios.put(Vue.config.ApiUrl + "/ranking/match?matchId="+this.match.id).then(response => {
              this.$router.push({ name: 'all-matches' })
            }).catch(error => {
              console.log(error);
            });
          } else{
            axios.put(Vue.config.ApiUrl + "/ranking/reopenMatch?matchId="+this.match.id).then(response => {
              this.$router.push({ name: 'all-matches' })
            }).catch(error => {
              console.log(error);
            });
          }
          this.$router.push({ name: 'all-matches' })
        }).catch(error => {
          console.log(error);
        });
      },
      addCard(player){
        this.card.match = this.match;
        this.card.player = player;
        this.card.minute = this.minute;
        this.card.type = this.cardType;
        axios.post(Vue.config.ApiUrl + "/card", this.card).then(response => {
          this.statisticMatch = this.getStatisticsMatch();
          this.minute = 0;
        }).catch(error => {
          console.log(error);
        });
      },
      deleteCard(cardId){
        axios.delete(Vue.config.ApiUrl + "/card?id="+ cardId).then(response => {
          this.statisticMatch = this.getStatisticsMatch();
        }).catch(error => {
          console.log(error);
        });
      },
      getMatch() {
        const url = Vue.config.ApiUrl + '/match?id='+ this.$route.query.id;
        axios.get(url).then(response => {
            this.match = response.data;
        })
      },
      getGolPlayerName(goalId){
        var name='';
        this.allPlayers.forEach(player => {
          player.goals.forEach(goal => {
            if(goal.id === goalId){
              name =  player.name + ' ' + player.surname;
            }
          });
        });
        return name;
      },
      getCardPlayerName(cardId){
        var name='';
        this.allPlayers.forEach(player => {
          player.cards.forEach(card => {
            if(card.id === cardId){
              name =  player.name + ' ' + player.surname;
            }
          });
        });
        return name;
      },
      getBestPlayerName(bestId){
        var name='';
        this.allPlayers.forEach(player => {
          player.best.forEach(best => {
            if(best.id === bestId){
              name =  player.name + ' ' + player.surname;
            }
          });
        });
        return name;
      },
      setHomePlayersGoals(){
        this.isHome = true;
        this.selectedTeamPlayers = this.homePlayers.reduce((map, obj) => {
          map[obj.id] = obj;
          return map;
        }, {})
        this.selectedTeamGoals = this.homeGoals;
      },
      setGuestPlayersGoals(){
        this.isHome = false;
        this.selectedTeamPlayers = this.guestPlayers.reduce((map, obj) => {
          map[obj.id] = obj;
          return map;
        }, {})
        this.selectedTeamGoals = this.guestGoals;
      },
      setHomePlayersCards(){
        this.isHome = true;
        this.selectedTeamPlayers = this.homePlayers.reduce((map, obj) => {
          map[obj.id] = obj;
          return map;
        }, {})
        this.selectedTeamCards = this.homeCards;
      },
      setGuestPlayersCards(){
        this.isHome = false;
        this.selectedTeamPlayers = this.guestPlayers.reduce((map, obj) => {
          map[obj.id] = obj;
          return map;
        }, {})
        this.selectedTeamCards = this.guestCards;
      },
      setHomePlayersBest(){
        this.isHome = true;
        this.selectedTeamPlayers = this.homePlayers.reduce((map, obj) => {
          map[obj.id] = obj;
          return map;
        }, {})
        this.selectedTeamBest = this.homeBest;
      },
      setGuestPlayersBest(){
        this.isHome = false;
        this.selectedTeamPlayers = this.guestPlayers.reduce((map, obj) => {
          map[obj.id] = obj;
          return map;
        }, {})
        this.selectedTeamBest = this.guestBest;
      },
      addCorner(home){
        axios.put(Vue.config.ApiUrl + "/match/addCorners?isHome=" + home, this.match).then(response => {
          this.statisticMatch = this.getStatisticsMatch();
          this.match = this.getMatch();
        }).catch(error => {
          console.log(error);
        });
      },
      addShotIn(home){
        axios.put(Vue.config.ApiUrl + "/match/addShotIn?isHome=" + home, this.match).then(response => {
          this.statisticMatch = this.getStatisticsMatch();
          this.match = this.getMatch();
        }).catch(error => {
          console.log(error);
        });
      },
      addShotOut(home){
        axios.put(Vue.config.ApiUrl + "/match/addShotOut?isHome=" + home, this.match).then(response => {
          this.statisticMatch = this.getStatisticsMatch();
          this.match = this.getMatch();
        }).catch(error => {
          console.log(error);
        });
      }
  }
}
