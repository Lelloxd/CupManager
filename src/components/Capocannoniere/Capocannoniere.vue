<template>
  <div class="component min-h-100">
    <div class="col-md-4" v-if="!loading">
      <div class="content">
        <img src="~@/assets/logo.png">
        <div class="mt-5" v-if="capocannoniere.length > 0">
          <b-card>
            <b-card-text>Capocannoniere</b-card-text>

            <b-table
              class="mb-3"
              :small="true"
              striped
              hover
              :items="capocannoniere"
              :fields="fields"
            >
              <template slot="name" slot-scope="data">{{ data.item[0] }} {{ data.item[1] }}</template>
              <template slot="gol" slot-scope="data">{{ data.item[2] }}</template>
            </b-table>
          </b-card>
        </div>
        <div class="mt-5" v-else>
          <b-card-text>Capocannoniere</b-card-text>
          <b-card>
            <p> Ancora nessun gol messo a segno</p>
          </b-card>
        </div>
      </div>
    </div>
    <div class="loading" v-if="loading">
      <b-spinner variant="primary" label="spinning"></b-spinner>
    </div>
  </div>
</template>

<script src="./Capocannoniere.js"></script>
<style src="../../styles/component.scss" lang="scss"></style>

