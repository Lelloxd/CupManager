<template>
  <div class="component h-100">
    <div class="col-md-6">
      <div class="content" v-if="!loading">
        <img src="~@/assets/logo.png">

        <b-card class="card mt-5">
          <b-card-text>Miglior giocatore</b-card-text>

          <b-table class="mt-3" :small="true" striped hover :items="bests" :fields="fields">
            <template slot="name" slot-scope="data">{{ data.item[0] }} {{ data.item[1] }}</template>
            <template slot="best" slot-scope="data">{{ data.item[2] }}</template>
          </b-table>
        </b-card>
      </div>

      <div class="loading" v-if="loading">
        <span>LOADING</span>
        <img src="~@/assets/loader.svg">
      </div>
    </div>
  </div>
</template>

<script src="./Bests.js"></script>
<style src="../../styles/component.scss" lang="scss"></style>
