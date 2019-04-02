<template>
  <div class="component min-h-100">
    <div class="col-md-12" v-if="loading">
      <img v-if="status.loggedIn" class="mt-3" src="~@/assets/logo.png">
      <div class="col-md-12">
        <div class="content">
          <div class="container">
            <div class="row">
              <div class="first col-md-6">
                <b-card>
                  <b-card-text class="title-date">
                    <span class="title">Semifinale A</span>
                    <span class="date">09-07-2019 21:40</span>
                  </b-card-text>
                  In attesa di risultati
                </b-card>
              </div>
              <div class="col-md-6">
                <b-card>
                  <b-card-text class="title-date">
                    <span class="title">Semifinale B</span>
                    <span class="date">10-07-2019 21:40</span>
                  </b-card-text>
                  In attesa di risultati
                </b-card>
              </div>
            </div>
            <div class="row mt-5">
              <div class="first col-md-6">
                <b-card>
                  <b-card-text class="title-date">
                    <span class="title">Finale 3° 4°</span>
                    <span class="date">13-07-2019 20:40</span>
                  </b-card-text>
                   In attesa di risultati
                </b-card>
              </div>
              <div class="col-md-6">
                <b-card>
                  <b-card-text class="title-date">
                    <span class="title">Finale 1° 2°</span>
                    <span class="date">10-07-2019 21:45</span>
                  </b-card-text>
                   In attesa di risultati
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


