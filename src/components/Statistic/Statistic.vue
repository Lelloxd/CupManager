<template>
  <div class="statistic h-100" :style="{'background-image': 'url(' + require('../../assets/sfondo.jpg') + ')'}">
  <br>
    <div class="container col-12 mt-3 data">
      <span style="color:white">{{statisticMatch.date}}   Rovarè Stadium</span>
    </div>
    <br>
    <img class="text-center" src="../../assets/LOGO_TORNEO.png" style="margin-top:20px">
    <div class="container col-12 father">
      <div class="container col-10 mt-3">
        <b-card class="risultato">
          <b-card-text>
            <div class="row">
              <div class="col-sm-4 team-name">{{statisticMatch.homeTeam}}</div>
              <div class="col-sm-4 team-name" >{{statisticMatch.homeResult}} - {{statisticMatch.guestResult}}</div>
              <div class="col-sm-4 team-name">{{statisticMatch.guestTeam}}</div>
            </div>
          </b-card-text>
        </b-card>
      </div>
      <div class="container col-3">
        <div class="row">
          <div class="col-sm-6 mt-2" style="text-align: right;">
            <div class="inLine" v-for="goal in statisticMatch.homeGoals" v-bind:key="goal.id">
              <span style="font-size: 15px; color:white">{{getGolPlayerNameHome(goal.id)}} {{goal.minute}}'</span>
            </div>
          </div>
          <div class="col-sm-1 vl"></div>
          <div class="col-sm-6 mt-2" style="text-align: left;">
            <div class="inLine" v-for="goal in statisticMatch.guestGoals" v-bind:key="goal.id">
              <span style="font-size: 15px; color:white">{{getGolPlayerNameGuest(goal.id)}} {{goal.minute}}'</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container col-10 mt-3">
      <div class="row">
        <div class="col-sm-4">
          <b-card class="card" title="Giocatori">
            <b-card-text>
              <b-table class="mt-3" striped hover :items="statisticMatch.homePlayers" :fields="fields">
                <template slot="name" slot-scope="data" hide>
                  {{ data.item.name}} {{ data.item.surname}}
                  <div class="inLine" v-for="goal in data.item.goals" v-bind:key="goal.id">
                    <img src="../../assets/gol.png">
                  </div>
                  <div class="inLine" v-for="card in data.item.cards" v-bind:key="card.id">
                    <div v-if="card.type == 'Ammonizione'">
                      <img src="../../assets/yellow_card.svg.png">
                    </div>
                    <div v-if="card.type == 'Espulsione'">
                      <img src="../../assets/red_card.png">
                    </div>
                  </div>
                </template>
              </b-table>
            </b-card-text>
          </b-card>
        </div>
        <div class="col-sm-4">
          <b-card class="card">
            <b-card-text>
              <div>
                <span>Tiri in porta</span>
                <div class="row">
                   <div class="pr-0 mb-0 col-sm-2">
                     {{statisticMatch.homeShotsOnGol}}
                   </div>
                   <div class="pl-0 pr-0 col-sm-8">
                      <b-progress variant="primary" class="mt-1" :value="onShotValue"/>
                   </div>
                   <div class="pl-0 mb-0 col-sm-2">
                     {{statisticMatch.guestShotsOnGol}}
                   </div>
                </div>
              </div>
              <div class="mt-3">
                <span>Tiri fuori</span>
                <div class="row">
                   <div class="pr-0 mb-0 col-sm-2">
                     {{statisticMatch.homeShotsOutGol}}
                   </div>
                   <div class="pl-0 pr-0 col-sm-8">
                      <b-progress variant="primary" class="mt-1" :value="outShotValue"/>
                   </div>
                   <div class="pl-0 mb-0 col-sm-2">
                     {{statisticMatch.guestShotsOutGol}}
                   </div>
                </div>
              </div>
              <div class="mt-3">
                <span>Angoli</span>
                <div class="row">
                   <div class="pr-0 mb-0 col-sm-2">
                     {{statisticMatch.homeCorners}}
                   </div>
                   <div class="pl-0 pr-0 col-sm-8">
                      <b-progress variant="primary" class="mt-1" :value="cornerValue"/>
                   </div>
                   <div class="pl-0 mb-0 col-sm-2">
                     {{statisticMatch.guestCorners}}
                   </div>
                </div>
              </div>
              <div class="mt-3">
                <span>Ammonizioni</span>
                <div class="row">
                   <div class="pr-0 mb-0 col-sm-2">
                     {{totalYellowHome}}
                   </div>
                   <div class="pl-0 pr-0 col-sm-8">
                      <b-progress variant="primary" class="mt-1" :value="yellowValue"/>
                   </div>
                   <div class="pl-0 mb-0 col-sm-2">
                     {{totalYellowGuest}}
                   </div>
                </div>
              </div>
              <div class="mt-3">
                <span>Espulsioni</span>
                <div class="row">
                   <div class="pr-0 mb-0 col-sm-2">
                     {{totalRedHome}}
                   </div>
                   <div class="pl-0 pr-0 col-sm-8">
                      <b-progress variant="primary" class="mt-1" :value="redValue"/>
                   </div>
                   <div class="pl-0 mb-0 col-sm-2">
                     {{totalRedGuest}}
                   </div>
                </div>
              </div>
            </b-card-text>
          </b-card>
        </div>
        <div class="col-sm-4">
          <b-card class="card" title="Giocatori">
            <b-card-text>
              <b-table class="mt-3" striped hover :items="statisticMatch.guestPlayers" :fields="fields">
                <template slot="name" slot-scope="data">
                  {{ data.item.name}} {{ data.item.surname}}
                  <div class="inLine" v-for="goal in data.item.goals" v-bind:key="goal.id">
                    <img src="../../assets/gol.png">
                  </div>
                  <div class="inLine" v-for="card in data.item.cards" v-bind:key="card.id">
                    <div v-if="card.type == 'Ammonizione'">
                      <img src="../../assets/yellow_card.svg.png">
                    </div>
                    <div v-else>
                      <img src="../../assets/red_card.png">
                    </div>
                  </div>
                </template>
              </b-table>
            </b-card-text>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Statistic.js"></script>

<style>
.team-name{
  font-size: 30px;
}
.statistic{
  background-color: black;
  margin-top: -40px;
}
.inLine{
  display: inline-block
}
.data{
   background-color:rgba(34, 3, 70, 0.589);
   text-align: left
}
.risultato{
  color:white;
  background-color: rgb(34, 3, 70);
}
.father{
  background-color: rgba(34, 3, 70, 0.589);
  text-align: center;
}
.vl {
  border-left: 1px dotted white;
  height: 100%;
  position: absolute;
  left: 50%;
  }
</style>

