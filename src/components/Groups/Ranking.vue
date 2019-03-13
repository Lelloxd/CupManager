<template>
  <div class="component h-100" :style="{'background-image': 'url(' + require('../../assets/sfondo.jpg') + ')'}">
    <div class="col-xs-12 col-sm-12 col-md-6 mx-auto mt-3">
      <div v-if="!loading">
        <br/>
        <img class="text-center mt-2" src="../../assets/LOGO_TORNEO.png" style="margin-top:20px">
        <div class="mt-5" v-for="group in groups" v-bind:key="group.id">
          <b-card class="card">
            <b-card-text>
              <div class="titleCard">
                <p>{{group.name.toUpperCase()}}</p>
              </div>
              <b-table :small=true class="mt-3" striped hover :items="group.rankings" :fields="fields">
                <template slot="team" slot-scope="data" >
                  {{getTeamName(data.item.id)}}
                </template>
              </b-table>
            </b-card-text>
          </b-card>
        <br/>
        </div>

      </div>
      <div class="loading" v-if="loading"><span>LOADING</span> <img src="../../assets/loader.svg" /></div>
    </div>
  </div>
</template>

<script src="./Ranking.js"></script>
<style src="../../styles/componentStyle.scss" lang="scss" scoped></style>

