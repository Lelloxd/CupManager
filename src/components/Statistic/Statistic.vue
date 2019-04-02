<template>
  <div v-if="!loading" class="statistic min-h-100">
    <br>
    <div class="container col-11 data detail-row">
      <span>
        {{statisticMatch.date | formatDate}} - {{matchType}}
        <img class="ml-2 icon" src="../../assets/whistle.png">
        {{statisticMatch.referee}}
        <img class="ml-2 icon" src="../../assets/stadium.png"> Rovarè Stadium
      </span>
    </div>
    <br>
    <img v-if="status.loggedIn" src="~@/assets/logo.png">
    <div class="container col-12 father">
      <div class="container col-10 mt-4">
        <div class="row risultato">
          <div class="col-5">
            <a>{{statisticMatch.homeTeam}}</a>
          </div>
          <div
            class="col-2 score"
            v-bind:class="{ blinking: statisticMatch.status === 'InCorso' }"
            style="background-color:#e90052 "
          >{{statisticMatch.homeResult}} - {{statisticMatch.guestResult}}</div>
          <div class="col-5">{{statisticMatch.guestTeam}}</div>
        </div>
      </div>
      <div class="container col-12">
        <div class="row">
          <div class="col-6 mt-2" style="text-align: right; ">
            <div v-for="[name, gol] of mapGoalHome" v-bind:key="name">
              <div class="gol">
                {{name}} {{gol}}
                <img src="../../assets/soccer-ball.png">
              </div>
            </div>
          </div>
          <div class="col-1 vl"></div>
          <div class="col-6 mt-2" style="text-align: left;">
            <div v-for="[name, gol] of mapGoalGuest" v-bind:key="gol">
              <div class="gol">
                <img src="../../assets/soccer-ball.png">
                {{name}} {{gol}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container col-10 mt-4">
      <div class="row">
        <div class="col-sm-4 players">
          <b-card class="card">
            <b-card-text>
              <h4 class="mt-3">Giocatori</h4>
              <b-table
                :small="true"
                class="mt-1"
                striped
                hover
                :items="statisticMatch.homePlayers"
                :fields="fields"
              >
                <template slot="numberOfMesh" slot-scope="data" hide>
                  <div class="ml-5" style="text-align: right">{{ data.item.numberOfMesh}}.</div>
                </template>
                <template slot="name" slot-scope="data" hide>
                  <div style="text-align: left">
                    {{ data.item.name}} {{ data.item.surname}}
                    <div
                      class="inLine"
                      v-for="index in getNumberOfGoal(data.item, true)"
                      v-bind:key="index"
                    >
                      <img src="../../assets/gol.png">
                    </div>
                    <div class="inLine">
                      <div
                        class="inLine"
                        v-for="index in getNumberOfCard(data.item, true, 'Ammonizione')"
                        v-bind:key="index"
                      >
                        <img src="../../assets/yellow_card.svg.png">
                      </div>
                      <div
                        class="inLine"
                        v-for="index in getNumberOfCard(data.item, true, 'Espulsione')"
                        v-bind:key="index"
                      >
                        <img src="../../assets/red_card.png">
                      </div>
                    </div>
                    <div
                      class="inLine"
                      v-for="index in getNumberOfStar(data.item, true)"
                      v-bind:key="index"
                    >
                      <img class="icon2" src="../../assets/star.png">
                    </div>
                  </div>
                </template>
              </b-table>
            </b-card-text>
          </b-card>
        </div>
        <div class="col-sm-4 statistic-detail">
          <b-card class="card">
            <b-card-text class="mt-1">
              <div>
                <span>Tiri in porta</span>
                <div class="row">
                  <div class="pr-0 mb-0 col-2">{{statisticMatch.homeShotsOnGol}}</div>
                  <div class="pl-0 pr-0 col-8">
                    <b-progress variant="primary" :value="onShotValue"/>
                  </div>
                  <div class="pl-0 mb-0 col-2">{{statisticMatch.guestShotsOnGol}}</div>
                </div>
              </div>
              <div class="mt-2">
                <span>Tiri fuori</span>
                <div class="row">
                  <div class="pr-0 mb-0 col-2">{{statisticMatch.homeShotsOutGol}}</div>
                  <div class="pl-0 pr-0 col-8 mt-1">
                    <b-progress variant="primary" :value="outShotValue"/>
                  </div>
                  <div class="pl-0 mb-0 col-2">{{statisticMatch.guestShotsOutGol}}</div>
                </div>
              </div>
              <div class="mt-2">
                <span>Angoli</span>
                <div class="row">
                  <div class="pr-0 mb-0 col-2">{{statisticMatch.homeCorners}}</div>
                  <div class="pl-0 pr-0 col-8 mt-1">
                    <b-progress variant="primary" :value="cornerValue"/>
                  </div>
                  <div class="pl-0 mb-0 col-2">{{statisticMatch.guestCorners}}</div>
                </div>
              </div>
              <div class="mt-2">
                <span>Ammonizioni</span>
                <div class="row">
                  <div class="pr-0 mb-0 col-2">{{totalYellowHome}}</div>
                  <div class="pl-0 pr-0 col-8 mt-1">
                    <b-progress variant="primary" :value="yellowValue"/>
                  </div>
                  <div class="pl-0 mb-0 col-2">{{totalYellowGuest}}</div>
                </div>
              </div>
              <div class="mt-2">
                <span>Espulsioni</span>
                <div class="row">
                  <div class="pr-0 mb-0 col-2">{{totalRedHome}}</div>
                  <div class="pl-0 pr-0 col-8 mt-1">
                    <b-progress variant="primary" :value="redValue"/>
                  </div>
                  <div class="pl-0 mb-0 col-2">{{totalRedGuest}}</div>
                </div>
              </div>
              <br>
            </b-card-text>
          </b-card>
        </div>
        <div class="col-sm-4 players">
          <b-card class="card">
            <h4 class="mt-3">Giocatori</h4>
            <b-card-text>
              <b-table
                :small="true"
                class="mt-1"
                striped
                hover
                :items="statisticMatch.guestPlayers"
                :fields="fields"
              >
                <template slot="numberOfMesh" slot-scope="data" hide>
                  <div class="ml-5" style="text-align: right">{{ data.item.numberOfMesh}}.</div>
                </template>
                <template slot="name" slot-scope="data" hide>
                  <div style="text-align: left">
                    {{ data.item.name}} {{ data.item.surname}}
                    <div
                      class="inLine"
                      v-for="index in getNumberOfGoal(data.item, false)"
                      v-bind:key="index"
                    >
                      <img src="../../assets/gol.png">
                    </div>
                    <div class="inLine">
                      <div
                        class="inLine"
                        v-for="index in getNumberOfCard(data.item, false, 'Ammonizione')"
                        v-bind:key="index"
                      >
                        <img src="../../assets/yellow_card.svg.png">
                      </div>
                      <div
                        class="inLine"
                        v-for="index in getNumberOfCard(data.item, false, 'Espulsione')"
                        v-bind:key="index"
                      >
                        <img src="../../assets/red_card.png">
                      </div>
                    </div>
                    <div
                      class="inLine"
                      v-for="index in getNumberOfStar(data.item, false)"
                      v-bind:key="index"
                    >
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

