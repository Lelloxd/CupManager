<template>
  <div class="component min-h-100">
    <div class="col-md-6" v-if="!loading">
      <div class="content">
        <div class="mt-5">
          <b-card>
            <b-card-text>Squadre</b-card-text>

            <p>Selezione la squadra</p>
            <div class="mb-3">
              <select v-model="team" @change="getTeam(team.id)">
                <option
                  v-for="team in teams"
                  v-bind:key="team.id"
                  v-bind:value="team"
                >{{ team.name }}</option>
              </select>
            </div>

            <b-table
              class="mb-3"
              :fields="fields"
              :items="players"
              hover
              striped
              :small="true"
              v-if="selected"
            >
              <template slot="action" slot-scope="data">
                <a
                  class="btn btn-danger btn-sm"
                  v-b-modal.modalDeletePlayer
                  @click="setPlayerId(data.item)"
                >Elimina</a>
              </template>
            </b-table>

            <a
              v-if="selected"
              v-b-modal.modalDeleteTeam
              href="#"
              class="btn btn-warning mt-3 mb-3"
            >Elimina Squadra</a>
          </b-card>
        </div>

        <!-- Modale elimina squadra -->
        <b-modal id="modalDeleteTeam" hide-footer title="Elimina squadra">
          <p class="my-4">Confermi di voler eliminare questa squadra {{ team.name }}?</p>
          <a
            v-if="selected"
            v-b-modal.modalDeleteTeam
            href="#"
            class="btn btn-warning"
            @click.prevent="remove()"
          >Elimina</a>
        </b-modal>

        <!-- Modale elimina giocatore -->
        <b-modal hide-footer id="modalDeletePlayer" ref="modalDeletePlayer" title="Elimina partita">
          <p
            class="my-4"
          >Confermi di voler elimanare il giocatore {{ player.name }} {{ player.surname }}?</p>
          <a class="btn btn-warning" @click.prevent="removePlayer()">Elimina</a>
        </b-modal>
      </div>
    </div>

    <div class="loading" v-if="loading">
      <b-spinner variant="primary" label="spinning"></b-spinner>
    </div>
  </div>
</template>

<script src="./Team.js"></script>
<style src="../../styles/component.scss" lang="scss"></style>

