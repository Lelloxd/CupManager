<template>
  <div v-if="!loading" class="statistic min-h-100">
  <br>
    <div class="container col-11 data detail-row">
      <span>
        {{statisticMatch.date | formatDate}} - {{matchType}}<img class= "ml-2 icon" src="../../assets/whistle.png"/>  {{statisticMatch.referee}} <img class= "ml-2 icon"  src="../../assets/stadium.png"/> Rovarè Stadium
      </span>
    </div>
    <br>
    <img v-if="status.loggedIn" src="~@/assets/logo.png">
    <div class="container col-12 father">
      <div class="container col-10 mt-4">
        <div class="row risultato">
          <div class="col-sm-5 team-name"><a>{{statisticMatch.homeTeam}}</a></div>
          <div class="col-sm-2 team-name" v-bind:class="{ blinking: statisticMatch.status === 'InCorso' }" style="background-color:#e90052" ><strong>{{statisticMatch.homeResult}} - {{statisticMatch.guestResult}}</strong></div>
          <div class="col-sm-5 team-name">{{statisticMatch.guestTeam}}</div>
        </div>
      </div>
      <div class="container col-12">
        <div class="row">
          <div class="col-sm-6 mt-2" style="text-align: right; ">
            <div v-for="[name, gol] of mapGoalHome" v-bind:key="name">
              <div style="font-size: 15px; color:white">
                {{name}} {{gol}} <img src="../../assets/soccer-ball.png"/>
              </div>
            </div>
          </div>
          <div class="col-sm-1 vl"></div>
          <div class="col-sm-6 mt-2" style="text-align: left;">
            <div v-for="[name, gol] of mapGoalGuest" v-bind:key="gol">
              <div style="font-size: 15px; color:white">
                <img src="../../assets/soccer-ball.png"/> {{name}} {{gol}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container col-10 mt-4 players">
      <div class="row">
        <div class="col-sm-4">
          <b-card class="card">
            <b-card-text>
              <h4 class="mt-3">Giocatori</h4>
              <b-table :small=true class="mt-1" striped hover :items="statisticMatch.homePlayers" :fields="fields">
                <template slot="numberOfMesh" slot-scope="data" hide>
                  <div class="ml-5" style="text-align: right">
                    {{ data.item.numberOfMesh}}.
                  </div>
                </template>
                <template slot="name" slot-scope="data" hide>
                  <div style="text-align: left">
                    {{ data.item.name}} {{ data.item.surname}}
                    <div class="inLine" v-for="index in getNumberOfGoal(data.item, true)" v-bind:key="index">
                      <img src="../../assets/gol.png">
                    </div>
                    <div class="inLine" >
                      <div class="inLine" v-for="index in getNumberOfCard(data.item, true, 'Ammonizione')" v-bind:key="index">
                        <img src="../../assets/yellow_card.svg.png">
                      </div>
                      <div class="inLine" v-for="index in getNumberOfCard(data.item, true, 'Espulsione')" v-bind:key="index">
                        <img src="../../assets/red_card.png">
                      </div>
                    </div>
                    <div class="inLine" v-for="index in getNumberOfStar(data.item, true)" v-bind:key="index">
                      <img class="icon2" src="../../assets/star.png">
                    </div>
                  </div>
                </template>
              </b-table>
            </b-card-text>
          </b-card>
        </div>
        <div class="col-sm-4">
          <b-card class="card">
            <b-card-text class="mt-1">
              <div>
                <span>Tiri in porta</span>
                <div class="row">
                   <div class="pr-0 mb-0 col-sm-2" style="font-size: 17px">
                     {{statisticMatch.homeShotsOnGol}}
                   </div>
                   <div class="pl-0 pr-0 col-sm-8 mt-1">
                      <b-progress height="10px" variant="primary" class="mt-1" :value="onShotValue"/>
                   </div>
                   <div class="pl-0 mb-0 col-sm-2" style="font-size: 17px">
                     {{statisticMatch.guestShotsOnGol}}
                   </div>
                </div>
              </div>
              <div class="mt-2">
                <span>Tiri fuori</span>
                <div class="row">
                   <div class="pr-0 mb-0 col-sm-2" style="font-size: 17px">
                     {{statisticMatch.homeShotsOutGol}}
                   </div>
                   <div class="pl-0 pr-0 col-sm-8 mt-1">
                      <b-progress height="10px" variant="primary" class="mt-1" :value="outShotValue"/>
                   </div>
                   <div class="pl-0 mb-0 col-sm-2" style="font-size: 17px">
                     {{statisticMatch.guestShotsOutGol}}
                   </div>
                </div>
              </div>
              <div class="mt-2">
                <span>Angoli</span>
                <div class="row">
                   <div class="pr-0 mb-0 col-sm-2" style="font-size: 17px">
                     {{statisticMatch.homeCorners}}
                   </div>
                   <div class="pl-0 pr-0 col-sm-8 mt-1">
                      <b-progress height="10px" variant="primary" class="mt-1" :value="cornerValue"/>
                   </div>
                   <div class="pl-0 mb-0 col-sm-2" style="font-size: 17px">
                     {{statisticMatch.guestCorners}}
                   </div>
                </div>
              </div>
              <div class="mt-2">
                <span>Ammonizioni</span>
                <div class="row">
                   <div class="pr-0 mb-0 col-sm-2" style="font-size: 17px">
                     {{totalYellowHome}}
                   </div>
                   <div class="pl-0 pr-0 col-sm-8 mt-1">
                      <b-progress height="10px" variant="primary" class="mt-1" :value="yellowValue"/>
                   </div>
                   <div class="pl-0 mb-0 col-sm-2" style="font-size: 17px">
                     {{totalYellowGuest}}
                   </div>
                </div>
              </div>
              <div class="mt-2">
                <span>Espulsioni</span>
                <div class="row">
                   <div class="pr-0 mb-0 col-sm-2" style="font-size: 17px">
                     {{totalRedHome}}
                   </div>
                   <div class="pl-0 pr-0 col-sm-8 mt-1">
                      <b-progress height="10px" variant="primary" class="mt-1" :value="redValue"/>
                   </div>
                   <div class="pl-0 mb-0 col-sm-2" style="font-size: 17px">
                     {{totalRedGuest}}
                   </div>
                </div>
              </div>
              <br/>
            </b-card-text>
          </b-card>
        </div>
        <div class="col-sm-4">
          <b-card class="card">
            <h4 class="mt-3">Giocatori</h4>
            <b-card-text>
              <b-table :small=true class="mt-1" striped hover :items="statisticMatch.guestPlayers" :fields="fields">
                <template slot="numberOfMesh" slot-scope="data" hide>
                  <div class="ml-5" style="text-align: right">
                    {{ data.item.numberOfMesh}}.
                  </div>
                </template>
                <template slot="name" slot-scope="data" hide>
                  <div style="text-align: left">
                    {{ data.item.name}} {{ data.item.surname}}
                    <div class="inLine" v-for="index in getNumberOfGoal(data.item, false)" v-bind:key="index">
                      <img src="../../assets/gol.png">
                    </div>
                    <div class="inLine" >
                      <div class="inLine" v-for="index in getNumberOfCard(data.item, false, 'Ammonizione')" v-bind:key="index">
                        <img src="../../assets/yellow_card.svg.png">
                      </div>
                      <div class="inLine" v-for="index in getNumberOfCard(data.item, false, 'Espulsione')" v-bind:key="index">
                        <img src="../../assets/red_card.png">
                      </div>
                    </div>
                    <div class="inLine" v-for="index in getNumberOfStar(data.item, false)" v-bind:key="index">
                       <img class="icon2" src="../../assets/star.png">
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
<style src="./Statistic.scss" lang="scss"></style>

