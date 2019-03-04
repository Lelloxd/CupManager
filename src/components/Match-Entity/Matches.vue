<template>
  <div class="col-xs-12 col-sm-12 col-md-6 mx-auto">
    <div v-if="!loading">
      <h2>Elenco Partite</h2>
      <div>
        <b-table class="mt-3" triped hover selectable :select-mode= "'single'" :items="matches" :fields="fields" @row-selected="rowSelected">
          <template slot="risultato" slot-scope="data">
            {{ data.item.homeResult}} - {{ data.item.guestResult}}
          </template>
          <template slot="stato" slot-scope="data">
            {{ data.item.completed ? 'Finita' : 'In corso' }}
          </template>
        </b-table>
      </div>
      <div class="loading" v-if="loading">
        <span>LOADING</span>
        <img src="../../assets/loader.svg">
      </div>
    </div>
  </div>
</template>

<script src="./Matches.js"></script>
