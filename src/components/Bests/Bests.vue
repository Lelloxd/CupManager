<template>
  <div class="component min-h-100">
    <div class="col-md-4" v-if="!loading">
      <div class="content">
        <img src="~@/assets/logo.png">
        <div class="mt-5" v-if="bests.length > 0">
          <b-card>
            <b-card-text>Miglior giocatore</b-card-text>

            <b-table class="mb-3" :small="true" striped hover :items="bests" :fields="fields">
              <template slot="name" slot-scope="data">{{ data.item[0] }} {{ data.item[1] }}</template>
              <template slot="best" slot-scope="data">{{ data.item[2] }}</template>
            </b-table>
          </b-card>
        </div>
         <div class="mt-5" v-else>
          <b-card-text>Miglior giocatore</b-card-text>
          <b-card>
            <p> Nessun giocatore è stato ancora selezionato</p>
          </b-card>
        </div>
      </div>
    </div>
    <div class="loading" v-if="loading">
      <b-spinner variant="primary" label="spinning"></b-spinner>
    </div>
  </div>
</template>

<script src="./Bests.js"></script>
<style src="../../styles/component.scss" lang="scss"></style>
