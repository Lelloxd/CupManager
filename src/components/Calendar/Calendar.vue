<template>
  <div class="component min-h-100">
    <div class="col-md-12" v-if="loading">
      <img v-if="status.loggedIn" class="mt-3" src="~@/assets/logo.png">
      <div class="content">
        <div class="container">
          <div class="col-md-12">
            <div class="row">
              <div class="first col-md-6">
                <b-card>
                  <b-card-text class="title-date">
                    <span class="title">1° Giornata</span>
                    <span class="date">24-06-2019</span>
                  </b-card-text>
                  <p>1° partita - 20.30</p>
                  <hr>
                  <p>2° partita - 21.40</p>
                </b-card>
              </div>
              <div class="col-md-6">
                <b-card>
                  <b-card-text class="title-date">
                    <span class="title">2° Giornata</span>
                    <span class="date">26-06-2019</span>
                  </b-card-text>
                  <p>1° partita - 20.30</p>
                  <hr>
                  <p>2° partita - 21.40</p>
                </b-card>
              </div>
            </div>
            <div class="row mt-5">
              <div class="first col-md-6">
                <b-card>
                  <b-card-text class="title-date">
                    <span class="title">3° Giornata</span>
                    <span class="date">27-06-2019</span>
                  </b-card-text>
                  <p>1° partita - 20.30</p>
                  <hr>
                  <p>2° partita - 21.40</p>
                </b-card>
              </div>
              <div class="col-md-6">
                <b-card>
                  <b-card-text class="title-date">
                    <span class="title">4° Giornata</span>
                    <span class="date">01-07-2019</span>
                  </b-card-text>
                  <p>1° partita - 20.30</p>
                  <hr>
                  <p>2° partita - 21.40</p>
                </b-card>
              </div>
            </div>
            <div class="row mt-5">
              <div class="first col-md-6">
                <b-card>
                  <b-card-text class="title-date">
                    <span class="title">5° Giornata</span>
                    <span class="date">03-07-2019</span>
                  </b-card-text>
                  <p>1° partita - 20.30</p>
                  <hr>
                  <p>2° partita - 21.40</p>
                </b-card>
              </div>
              <div class="col-md-6">
                <b-card>
                  <b-card-text class="title-date">
                    <span class="title">6° Giornata</span>
                    <span class="date">04-07-2019</span>
                  </b-card-text>
                  <p>1° partita - 20.30</p>
                  <hr>
                  <p>2° partita - 21.40</p>
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

<script src="./Calendar.js"></script>
<style src="../../styles/component.scss" lang="scss"></style>
<style src="./Calendar.scss" lang="scss"></style>


