<template>
  <div class="component h-100" style="margin-top: -56px" :style="{'background-image': 'url(' + require('../../assets/sfondo.jpg') + ')'}">
    <div class="col-xs-12 col-sm-12 col-md-6 mx-auto mt-3">
        <b-card class="card mt-5" style="top: 2em">
          <div v-if="!loading">
            <b-card-text>
              <div class="titleCard">
                <p>Partite</p>
              </div>
              <div>
              <b-table class="mt-3" striped hover selectable :select-mode= "'single'" :items="matches" :fields="fields" @row-selected="rowSelected">
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
            </b-card-text>
          </div>
        </b-card>
      </div>
  </div>
</template>

<script src="./Matches.js"></script>
<style src="../../styles/componentStyle.scss" lang="scss"></style>
