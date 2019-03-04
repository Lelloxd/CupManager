<template>
  <div class="col-xs-12 col-sm-12 col-md-6 mx-auto">
    <div v-if="!loading">
      <h2>Classifiche</h2>
      <hr>
      <div v-for="group in groups" v-bind:key="group.id">
        <p>{{group.name}}</p>
        <b-table class="mt-3" striped hover :items="group.rankings" :fields="fields">
          <template slot="team" slot-scope="data" >
              {{getTeamName(data.item.id)}}
            </template>
        </b-table>
        <br/>
      </div>
    </div>
    <div class="loading" v-if="loading"><span>LOADING</span> <img src="../../assets/loader.svg" /></div>
  </div>
</template>

<script src="./Ranking.js"></script>

