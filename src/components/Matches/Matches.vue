<template>
  <div class="component min-h-100">
    <div class="col-md-6" v-if="!loading">
      <div class="content">
        <div class="mt-5" v-if="matches.length > 0">
          <b-card>
            <b-card-text>Partite</b-card-text>

            <b-form-group class="mb-2 ml-3 mr-3" label-align-sm="right" label-cols-sm="7">
              <b-input-group>
                <b-form-select v-model="filter" :options="matchTypes">
                  <template slot="first">
                    <option :value="null" disabled>-- Filtro --</option>
                  </template>
                </b-form-select>
                <b-input-group-append>
                  <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                </b-input-group-append>
              </b-input-group>
            </b-form-group>

            <b-table
              v-if="items.length > 0"
              class="mb-3"
              striped
              hover
              selectable
              :select-mode="'single'"
              :items="items"
              :fields="fields"
              @row-selected="rowSelected"
            >
              <template
                slot="risultato"
                slot-scope="data"
              >{{ data.item.homeResult }} - {{ data.item.guestResult }}</template>
              <template
                slot="stato"
                slot-scope="data"
              >{{ data.item.completed ? 'Finita' : 'In corso' }}</template>
            </b-table>

            <b-card v-else>
              <p>Nessuna partita presente</p>
            </b-card>
          </b-card>
        </div>
        <div class="mt-5" v-else>
          <b-card-text>Partite</b-card-text>
          <b-card>
            <p>Nessuna partita presente</p>
          </b-card>
        </div>
      </div>
    </div>
    <div class="loading" v-if="loading">
      <b-spinner variant="primary" label="spinning"></b-spinner>
    </div>
  </div>
</template>

<script src="./Matches.js"></script>
<style src="../../styles/component.scss" lang="scss"></style>
