<template>
  <div class="component min-h-100">
    <div class="col-md-8" v-if="!loading">
      <div class="content">
        <div class="mt-5">
          <b-card>
            <b-card-text>Report Partita</b-card-text>

            <div class="container">
              <div class="row">
                <div class="col-sm-5">
                  <h3>{{ homeTeam }}</h3>
                </div>
                <div class="col-sm-2">
                  <h3>{{ homeResult }} - {{ guestResult }}</h3>
                </div>
                <div class="col-sm-5">
                  <h3>{{ guestTeam }}</h3>
                </div>
              </div>
            </div>

            <hr>

            <div class="container">
              <div class="row">
                <div class="col-sm-5">
                  <div v-if="!isCompleted">
                    <b-button
                      class="btn btn-info btn-sm"
                      v-b-modal.modalGol
                      @click="setHomePlayersGoals()"
                    >Gol</b-button>
                    <b-button
                      class="btn btn-info btn-sm"
                      v-b-modal.modalCartellino
                      @click="setHomePlayersCards()"
                    >Cartellino</b-button>
                    <b-button
                      class="btn btn-info btn-sm"
                      v-b-modal.modalBest
                      @click="setHomePlayersBest()"
                    >Migliore in campo</b-button>
                  </div>
                  <b-table
                    :small="true"
                    class="mt-3"
                    triped
                    hover
                    :items="Object.values(homePlayers)"
                    :fields="fields"
                  >
                    <template slot="fullName" slot-scope="data">
                      {{ data.item.numberOfMesh}}. {{ data.item.name}} {{ data.item.surname}}
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
                    </template>
                  </b-table>
                </div>
                <div class="col-sm-2">
                  <div class="mt-2" v-if="!isCompleted">
                    <p>Angoli</p>
                    <b-button
                      class="btn btn-info btn-sm"
                      @click="addCorner(true)"
                    >+ {{statisticMatch.homeCorners}}</b-button>
                    <b-button
                      class="btn btn-info btn-sm"
                      @click="addCorner(false)"
                    >+ {{statisticMatch.guestCorners}}</b-button>
                    <hr>
                    <p>Tiri in porta</p>
                    <b-button
                      class="btn btn-info btn-sm"
                      @click="addShotIn(true)"
                    >+ {{statisticMatch.homeShotsOnGol}}</b-button>
                    <b-button
                      class="btn btn-info btn-sm"
                      @click="addShotIn(false)"
                    >+ {{statisticMatch.guestShotsOnGol}}</b-button>
                    <hr>
                    <p>Tiri fuori</p>
                    <b-button
                      class="btn btn-info btn-sm"
                      @click="addShotOut(true)"
                    >+ {{statisticMatch.homeShotsOutGol}}</b-button>
                    <b-button
                      class="btn btn-info btn-sm"
                      @click="addShotOut(false)"
                    >+ {{statisticMatch.guestShotsOutGol}}</b-button>
                  </div>
                </div>
                <div class="col-sm-5">
                  <div>
                    <div v-if="!isCompleted">
                      <b-button
                        class="btn btn-info btn-sm"
                        v-b-modal.modalGol
                        @click="setGuestPlayersGoals()"
                      >Gol</b-button>
                      <b-button
                        class="btn btn-info btn-sm"
                        v-b-modal.modalCartellino
                        @click="setGuestPlayersCards()"
                      >Cartellino</b-button>
                      <b-button
                        class="btn btn-info btn-sm"
                        v-b-modal.modalBest
                        @click="setGuestPlayersBest()"
                      >Migliore in campo</b-button>
                    </div>
                    <b-table
                      :small="true"
                      class="mt-3"
                      triped
                      hover
                      :items="guestPlayers"
                      :fields="fields"
                    >
                      <template slot="fullName" slot-scope="data">
                        {{ data.item.numberOfMesh}}. {{ data.item.name}} {{ data.item.surname}}
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
                      </template>
                    </b-table>
                  </div>
                </div>
              </div>
            </div>

            <b-button class="mb-3" v-b-modal.modalDelete href="#" variant="warning">Elimina</b-button>
            <b-button
              class="mb-3"
              v-if="!isCompleted"
              v-b-modal.modalCompleted
              href="#"
              variant="warning"
            >Finita</b-button>
            <b-button
              class="mb-3"
              v-if="isCompleted"
              v-b-modal.modalCompleted
              href="#"
              variant="warning"
            >Ri-apri</b-button>
            <b-button
              class="mb-3"
              v-if="isCompleted"
              @click="getStatistic()"
              variant="warning"
            >Genera statistiche</b-button>
          </b-card>
        </div>

        <!-- Elimina -->
        <b-modal id="modalDelete" hide-footer title="Elimina partita">
          <p class="my-4">Confermi di voler elimanare questa partita?</p>
          <a class="btn btn-warning" @click.prevent="deleteMatch()">Elimina</a>
        </b-modal>

        <!-- Completed -->
        <b-modal id="modalCompleted" hide-footer title="Salva partita">
          <p v-if="!isCompleted" class="my-4">Confermi di voler completare questa partita?</p>
          <p v-if="isCompleted" class="my-4">Confermi di voler ri-aggiornare questa partita?</p>
          <a
            v-if="!isCompleted"
            v-b-modal.modalCompleted
            href="#"
            class="btn btn-warning"
            @click.prevent="completedMatch(true)"
          >Finita</a>
          <a
            v-if="isCompleted"
            v-b-modal.modalCompleted
            href="#"
            class="btn btn-warning"
            @click.prevent="completedMatch(false)"
          >Ri-apri</a>
        </b-modal>

        <!-- Migliore in campo -->
        <b-modal id="modalBest" hide-footer title="Migliore in campo">
          <p class="my-2">Seleziona Giocatore</p>
          <select v-model="player">
            <option
              v-for="player in selectedTeamPlayers"
              v-bind:key="player.id"
              v-bind:value="player"
            >{{ player.numberOfMesh}}. {{ player.name }} {{ player.surname }}</option>
          </select>
          <p class="my-4">
            <a v-b-modal.gol href="#" class="btn btn-warning" @click.prevent="addBest(player)">Salva</a>
          </p>
          <b-table class="mt-3" triped hover :items="selectedTeamBest" :fields="bestFields">
            <template slot="player" slot-scope="data">{{ getBestPlayerName(data.item.id) }}</template>
            <template slot="info" slot-scope="data">
              <a class="btn btn-danger btn-sm" @click="deleteBest(data.item.id)">Elimina</a>
            </template>
          </b-table>
        </b-modal>

        <!-- Gol -->
        <b-modal id="modalGol" hide-footer title="Gooool">
          <p class="my-2">Seleziona Giocatore</p>
          <select v-model="player">
            <option
              v-for="player in selectedTeamPlayers"
              v-bind:key="player.id"
              v-bind:value="player"
            >{{ player.numberOfMesh}}. {{ player.name }} {{ player.surname }}</option>
          </select>
          <p class="my-2">Minuto di gioco</p>
          <div class="col-xs-12 col-sm-12 col-md-4 mx-auto">
            <b-form-input v-model="minute" type="number"/>
          </div>
          <p class="my-4">
            <a v-b-modal.gol href="#" class="btn btn-warning" @click.prevent="addGoal(player)">Salva</a>
          </p>
          <b-table class="mt-3" triped hover :items="selectedTeamGoals" :fields="golFields">
            <template slot="player" slot-scope="data">{{ getGolPlayerName(data.item.id) }}</template>
            <template slot="info" slot-scope="data">
              <a class="btn btn-danger btn-sm" @click="deleteGoal(data.item.id)">Elimina</a>
            </template>
          </b-table>
        </b-modal>

        <!-- Cartellini -->
        <b-modal id="modalCartellino" hide-footer title="Cartellini">
          <div class="container">
            <div class="row">
              <div class="col-sm">
                <p class="my-2">Seleziona Giocatore</p>
                <select v-model="player">
                  <option
                    v-for="player in Object.values(selectedTeamPlayers)"
                    v-bind:key="player.id"
                    v-bind:value="player"
                  >{{ player.numberOfMesh}}. {{ player.name }} {{ player.surname }}</option>
                </select>
              </div>
              <div class="col-sm">
                <p class="my-2">Seleziona cartellino</p>
                <select v-model="cardType">
                  <option
                    v-for="cardType in cardTypes"
                    v-bind:key="cardType.value"
                    v-bind:value="cardType.value"
                  >{{ cardType.text }}</option>
                </select>
              </div>
            </div>
          </div>
          <p class="my-2">Minuto di gioco</p>
          <div class="col-xs-12 col-sm-12 col-md-4 mx-auto">
            <b-form-input v-model="minute" type="number"/>
          </div>
          <p class="my-4">
            <a
              v-b-modal.showCartellino
              href="#"
              class="btn btn-warning"
              @click.prevent="addCard(player)"
            >Salva</a>
          </p>
          <b-table class="mt-3" triped hover :items="selectedTeamCards" :fields="cardFields">
            <template slot="player" slot-scope="data">{{ getCardPlayerName(data.item.id) }}</template>
            <template slot="info" slot-scope="data">
              <a class="btn btn-danger btn-sm" @click="deleteCard(data.item.id)">Elimina</a>
            </template>
          </b-table>
        </b-modal>
      </div>
    </div>
    <div class="loading" v-if="loading">
      <b-spinner variant="primary" label="spinning"></b-spinner>
    </div>
  </div>
</template>

<style>
.inLine {
  display: inline-block;
}
</style>

<script src="./Match.js"></script>
<style src="../../styles/component.scss" lang="scss"></style>
