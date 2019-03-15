<template>
  <div class="component min-h-100">
    <div class="col-md-6" v-if="!loading">
      <div class="content">
        <img src="~@/assets/logo.png">

        <div class="mt-5" v-for="group in groups" v-bind:key="group.id">
          <b-card>
            <b-card-text>{{ group.name.toUpperCase() }}</b-card-text>

            <b-table
              class="mb-3"
              :small="true"
              striped
              hover
              :items="group.rankings"
              :fields="fields"
            >
              <template slot="team" slot-scope="data">{{ getTeamName(data.item.id) }}</template>
            </b-table>
          </b-card>
        </div>
      </div>
    </div>
    <div class="loading" v-if="loading">
      <b-spinner variant="primary" label="spinning"></b-spinner>
    </div>
  </div>
</template>

<script src="./Ranking.js"></script>
<style src="../../styles/component.scss" lang="scss"></style>
