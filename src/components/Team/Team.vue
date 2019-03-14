<template>
  <div class="component h-100">
    <div class="col-md-6">
      <div class="content" v-if="!loading">
        <div class="mt-5">
          <b-card>
            <b-card-text>SQUADRE</b-card-text>
            <p>Selezione la squadra</p>
            <select v-model="team" @change="getTeam(team.id)">
              <option v-for="team in teams" v-bind:key="team.id" v-bind:value="team">{{ team.name }}</option>
            </select>

            <b-table
              v-if="selected"
              :small="true"
              class="mb-3"
              striped
              hover
              :items="players"
              :fields="fields"
            >
              <template slot="action" slot-scope="data">
                <a
                  class="btn btn-danger btn-sm"
                  v-b-modal.modalDelete
                  @click="setPlayerId(data.item)"
                >Elimina</a>
              </template>
            </b-table>

            <b-modal id="modal1" hide-footer title="Elimina squadra">
              <p class="my-4">Confermi di voler eliminare questa squadra {{team.name}}?</p>
              <a
                v-if="selected"
                v-b-modal.modal1
                href="#"
                class="btn btn-warning"
                @click.prevent="remove()"
              >Elimina</a>
            </b-modal>

            <a
              v-if="selected"
              v-b-modal.modal1
              href="#"
              class="btn btn-warning mt-3"
            >Elimina Squadra</a>
          </b-card>
        </div>

        <!-- Elimina -->
        <b-modal id="modalDelete" ref="modalDelete" hide-footer title="Elimina partita">
          <p
            class="my-4"
          >Confermi di voler elimanare questo giocatore {{player.name}} {{player.surname}}?</p>
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

