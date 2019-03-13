<template>
  <div class="component h-100" :style="{'background-image': 'url(' + require('../../assets/sfondo.jpg') + ')'}">
    <div class="col-xs-12 col-sm-12 col-md-8 mx-auto mt-3" style="top: 2em">
      <div v-if="!loading">
        <b-card>
          <b-card-text>
            <div class="titleCard">
              <p>SQUADRE</p>
            </div>
            <p style="margin-top: 20px">Selezione la squadra</p>
            <select v-model="team" @change="getTeam(team.id)">
              <option v-for="team in teams" v-bind:key="team.id" v-bind:value="team">{{ team.name }}</option>
            </select>

            <b-modal id="modal1" hide-footer title="Elimina squadra">
              <p class="my-4">Confermi di voler eliminare questa squadra {{team.name}}?</p>
              <a v-if="selected" v-b-modal.modal1 href="#" class="btn btn-warning" @click.prevent="remove()">Elimina</a>
            </b-modal>
            <div>
              <b-table v-if="selected" :small=true class="mt-3" striped hover :items="players" :fields="fields">
                <template slot="action" slot-scope="data">
                  <a class="btn btn-danger btn-sm" v-b-modal.modalDelete @click="setPlayerId(data.item)">Elimina</a>
                </template>
              </b-table>
            </div>
            <a v-if="selected" v-b-modal.modal1 href="#" class="btn btn-warning mt-3" >Elimina Squadra</a>
          </b-card-text>
        </b-card>
      </div>
      <div class="loading" v-if="loading"><span>LOADING</span> <img src="../../assets/loader.svg" /></div>
      <!-- Elimina -->
      <b-modal id="modalDelete" ref="modalDelete" hide-footer title="Elimina partita">
        <p class="my-4">Confermi di voler elimanare questo giocatore {{player.name}} {{player.surname}}?</p>
        <a class="btn btn-warning" @click.prevent="removePlayer()">Elimina</a>
      </b-modal>

    </div>
  </div>
</template>

<script src="./Team.js"></script>
<style src="./Team.scss" lang="scss" scoped></style>
<style src="../../styles/componentStyle.scss" lang="scss"></style>

