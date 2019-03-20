<template>
  <div class="component min-h-100">
    <div class="col-md-12" v-if="loading">
      <img class="mt-3" src="~@/assets/logo.png">
      <div class="col-md-12">
        <div class="content">
          <div class="container">
            <div class="row">
              <div class="col-sm-6">
                <b-card>
                  <b-card-text>Semifinale A</b-card-text>
                  <p>TEAM A</p>
                  <p>vs</p>
                  <p>TEAM B</p>
                </b-card>
              </div>
              <div class="col-sm-6">
                <b-card>
                  <b-card-text>Semifinale A</b-card-text>
                  <p>TEAM A</p>
                  <p>vs</p>
                  <p>TEAM B</p>
                </b-card>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-sm-6">
                <b-card>
                  <b-card-text>Finale A</b-card-text>
                  <p>TEAM A</p>
                  <p>vs</p>
                  <p>TEAM B</p>
                </b-card>
              </div>
              <div class="col-sm-6">
                <b-card>
                  <b-card-text>Finale A</b-card-text>
                  <p>TEAM A</p>
                  <p>vs</p>
                  <p>TEAM B</p>
                </b-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="loading" v-if="!loading">
      <b-spinner variant="primary" label="spinning"></b-spinner>
    </div>
  </div>
</template>

<script src="./FinalPhase.js"></script>
<style src="../../styles/component.scss" lang="scss"></style>
<style src="./FinalPhase.scss" lang="scss"></style>


