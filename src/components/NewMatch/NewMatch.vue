<template>
  <div class="component h-100" :style="{'background-image': 'url(' + require('../../assets/sfondo.jpg') + ')'}">
  <div class="col-xs-12 col-sm-12 col-md-4 mx-auto mt-3" style="top: 2em">
    <b-card class="card-form">
      <b-card-text>
        <div class="titleCard">
          <p>Nuova partita</p>
        </div>
        <form v-if="!isSubmitted" @submit.prevent="submit" novalidate>

          <div class="form-group">
            <label for="date">Data partita *</label>
            <input type="date" class="form-control" id="date" v-model.lazy.trim="form.date" @blur="onFieldBlur('date')" v-bind:class="getFieldClasses('date')">
            <div v-if="isErrorField('date')" class="invalid-feedback">Campo data obbligatorio!</div>
          </div>

          <div class="form-group">
            <label for="referee">Arbitro *</label>
            <input type="text" class="form-control" id="referee" v-model.lazy.trim="form.referee" @blur="onFieldBlur('referee')" v-bind:class="getFieldClasses('referee')">
            <div v-if="isErrorField('referee')" class="invalid-feedback">Campo Arbitro obbligatorio!</div>
          </div>

          <div class="form-group">
            <label for="homeTeam">Squadra in casa *</label>
            <select id="homeTeam" class="form-control" v-model="form.homeTeam" @blur="onFieldBlur('homeTeam')" v-bind:class="getFieldClasses('homeTeam')">
                <option v-for="homeTeam in teams" v-bind:key="homeTeam.id" v-bind:value="homeTeam">{{ homeTeam.name }}</option>
            </select>
            <div v-if="isErrorField('homeTeam')" class="invalid-feedback">Campo Squadra in casa obbligatorio!</div>
          </div>

          <div class="form-group">
            <label for="guestTeam">Squadra in trasferta *</label>
            <select id="guestTeam" class="form-control" v-model="form.guestTeam" @blur="onFieldBlur('guestTeam')" v-bind:class="getFieldClasses('guestTeam')">
                <option v-for="guestTeam in teams" v-bind:key="guestTeam.id" v-bind:value="guestTeam">{{ guestTeam.name }}</option>
            </select>
            <div v-if="isErrorField('guestTeam')" class="invalid-feedback">Campo Squadra in trasferta obbligatorio!</div>
          </div>

          <div class="form-group">
            <button type="submit" class="btn btn-primary" :disabled="submitting">
              <span v-if="submitting">submitting <img src="../../assets/loader.svg" /></span>
              <span v-else>Salva</span>
            </button>
          </div>
        </form>
        <div v-if="isSubmitted">
          <div class="alert alert-success">
            <span> Partita creata <b>{{form.guestTeam.name}}</b> vs <b>{{form.homeTeam.name}}</b></span>
          </div>
          <p class="text-center">
            <a href="#" class="btn btn-secondary" @click.prevent="reload()">Indietro</a>
          </p>
        </div>
      </b-card-text>
    </b-card>
  </div>
  </div>
</template>

<script src="./NewMatch.js"></script>
<style src="./NewMatch.scss" lang="scss" scoped></style>
<style src="../../styles/componentStyle.scss" lang="scss"></style>

