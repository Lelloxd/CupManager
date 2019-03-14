<template>
  <div>
    <div v-if="!loading">
      <p>{{ group.name }}</p>
      <b-table class="mt-3" striped hover :items="group.rankings" :fields="fields">
        <template slot="team" slot-scope="data">{{getTeamName(data.item.id)}}</template>
        <template slot="action" slot-scope="data">
          <a class="btn btn-danger btn-sm" @click="deleteRanking(data.item.id)">Elimina</a>
        </template>
      </b-table>
      <br>
      <p>Aggiungi squadra</p>
      <select id="team" v-model="teamSelected" class="form-control">
        <option
          v-for="team in selectableTeams"
          v-bind:key="team.id"
          v-bind:value="team"
        >{{ team.name }}</option>
      </select>
      <a class="btn btn-info btn-sm mt-3" @click="createRanking()">Aggiungi</a>
      <p>
        <a v-b-modal.modalDelete class="btn btn-warning mt-5">Elimina Gruppo</a>
      </p>
    </div>

    <!-- Elimina gruppo-->
    <b-modal id="modalDelete" ref="modalDelete" hide-footer title="Elimina partita">
      <p class="my-4">Confermi di voler elimanare questa gruppo?</p>
      <a class="btn btn-warning mt-5" @click.prevent="deleteGroup()">Elimina gruppo</a>
    </b-modal>

    <!-- Elimina ranking-->
    <b-modal id="modalDeleteRanking" ref="modalDeleteRanking" hide-footer title="Elimina squadra">
      <p class="my-4">Confermi di voler elimanare questa squadra dal gruppo?</p>
      <a class="btn btn-warning mt-5" @click.prevent="deleteRanking()">Elimina squadra</a>
    </b-modal>
  </div>
</template>

<script src="./ModalGroupDetails.js"></script>
<style src="../../styles/component.scss" lang="scss"></style>
