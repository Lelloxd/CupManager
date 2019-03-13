<template>
  <div class="component h-100" :style="{'background-image': 'url(' + require('../../assets/sfondo.jpg') + ')'}">
    <div class="col-xs-12 col-sm-12 col-md-4 mx-auto mt-3">
      <div v-if="!loading">
        <br/>
        <img class="text-center mt-2" src="../../assets/LOGO_TORNEO.png" style="margin-top:20px">
        <b-card class="card mt-5">
          <b-card-text>
            <div class="titleCard">
              <p>Cartellini</p>
            </div>
            <b-table :small=true class="mt-3" striped hover :items="cards" :fields="fields">
              <template slot="name" slot-scope="data" >
                {{data.item[0]}} {{data.item[1]}}
              </template>
              <template slot="ammonizione" slot-scope="data" >
                {{data.item[2]}}
              </template>
              <template slot="espulsione" slot-scope="data" >
                {{data.item[3]}}
              </template>
            </b-table>
          </b-card-text>
        </b-card>
      </div>
    </div>
    <div class="loading" v-if="loading"><span>LOADING</span> <img src="../../assets/loader.svg" /></div>
  </div>
</template>

<script src="./Cards.js"></script>
<style src="../../styles/componentStyle.scss" lang="scss"></style>

