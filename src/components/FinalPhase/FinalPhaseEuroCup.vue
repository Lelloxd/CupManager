<template>
  <div class="component min-h-100">
    <div class="col-md-12">
      <img v-if="status.loggedIn" class="mt-3" src="~@/assets/logo.png">
      <div class="col-md-12">
        <div class="content">
          <div class="container">
            <div class="row">
              <div class="first col-md-6">
                <b-card>
                  <b-card-text>
                    <span class="title">Semifinale A</span>
                    <span class="date">09-07-2019 20:30</span>
                  </b-card-text>
                  In attesa di risultati
                </b-card>
              </div>
              <div class="col-md-6">
                <b-card>
                  <b-card-text>
                    <span class="title">Semifinale B</span>
                    <span class="date">10-07-2019 20:30</span>
                  </b-card-text>
                  In attesa di risultati
                </b-card>
              </div>
            </div>
            <div class="row mt-5 justify-content-center">
              <div class="first col-md-6">
                <b-card>
                  <b-card-text>
                    <span class="title">Finale EuroCup</span>
                    <span class="date">10-07-2019 19:30</span>
                  </b-card-text>
                   In attesa di risultati
                </b-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style src="../../styles/component.scss" lang="scss"></style>
<style src="./FinalPhase.scss" lang="scss"></style>
<script src="./FinalPhaseEuroCup.js"></script>


