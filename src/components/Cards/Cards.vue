<template>
  <div class="component min-h-100">
    <div class="col-md-6">
      <div class="content" v-if="!loading">
        <img src="~@/assets/logo.png">
        <div class="mt-5">
          <b-card>
            <b-card-text>Cartellini</b-card-text>

            <b-table class="mb-3" :small="true" striped hover :items="cards" :fields="fields">
              <template slot="name" slot-scope="data">{{ data.item[0]}} {{data.item[1] }}</template>
              <template slot="ammonizione" slot-scope="data">{{ data.item[2] }}</template>
              <template slot="espulsione" slot-scope="data">{{ data.item[3] }}</template>
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

<script src="./Cards.js"></script>
<style src="../../styles/component.scss" lang="scss"></style>

