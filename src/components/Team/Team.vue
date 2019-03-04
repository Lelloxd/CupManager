<template>
  <div class="col-xs-12 col-sm-12 col-md-6 mx-auto">
    <div v-if="!loading">
      <p>Selezione la squadra</p>
      <select v-model="team" @change="getTeam(team.id)">
        <option v-for="team in teams" v-bind:key="team.id" v-bind:value="team">{{ team.name }}</option>
      </select>
      <a v-if="selected" v-b-modal.modal1 href="#" class="btn btn-warning" >Elimina Squadra</a>
      <b-modal id="modal1" hide-footer title="Elimina squadra">
        <p class="my-4">Confermi di voler elimanare questa squadra {{team.name}}?</p>
        <a v-if="selected" v-b-modal.modal1 href="#" class="btn btn-warning" @click.prevent="remove()">Elimina</a>
      </b-modal>
      <div>
          <b-table class="mt-3" striped hover :items="players" :fields="fields"/>
      </div>
    </div>
    <div class="loading" v-if="loading"><span>LOADING</span> <img src="../../assets/loader.svg" /></div>
  </div>
</template>

<script src="./Team.js"></script>
<style src="./Team.scss" lang="scss" scoped></style>

