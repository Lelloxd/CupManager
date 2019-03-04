<template>
  <div class="col-xs-12 col-sm-12 col-md-4 mx-auto">
    <div v-if="!loading">
      <h2>I migliori</h2>
      <div class="table-responsive mt-5">
        <table class="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Miglior in campo</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="player in bests" v-bind:key="player[0]">
              <td>{{player[0]}} {{player[1]}}</td>
              <td>{{player[2]}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="loading" v-if="loading"><span>LOADING</span> <img src="../../assets/loader.svg" /></div>
  </div>
</template>

<script src="./Bests.js"></script>

