<template>
  <div class="col-xs-12 col-sm-12 col-md-4 mx-auto">
    <form v-if="!isSubmitted && !loading" @submit.prevent="submit" novalidate>
      <div class="form-group">
        <label for="name">Nome *</label>
        <input type="text" class="form-control" id="name" v-model.lazy.trim="form.name" @blur="onFieldBlur('name')" v-bind:class="getFieldClasses('name')">
        <div v-if="isErrorField('name')" class="invalid-feedback">Campo Nome obbligatorio!</div>
      </div>
      <div class="form-group">
        <label for="surname">Cognome *</label>
        <input type="text" class="form-control" id="surname" v-model.lazy.trim="form.surname" @blur="onFieldBlur('surname')" v-bind:class="getFieldClasses('surname')">
        <div v-if="isErrorField('surname')" class="invalid-feedback">Campo Cognome obbligatorio!</div>
      </div>
      <div class="form-group">
        <label for="birthOfDay">Data di nascita *</label>
        <input type="date" class="form-control" id="birthOfDay" v-model.lazy.trim="form.birthOfDay" @blur="onFieldBlur('birthOfDay')" v-bind:class="getFieldClasses('birthOfDay')">
        <div v-if="isErrorField('birthOfDay')" class="invalid-feedback">Campo data di nascita obbligatorio!</div>
      </div>
      <div class="form-group">
        <label for="team">Team *</label>
        <select id="team" class="form-control" v-model="form.team" @blur="onFieldBlur('team')" v-bind:class="getFieldClasses('team')">
            <option v-for="team in teams" v-bind:key="team.id" v-bind:value="team">{{ team.name }}</option>
        </select>
        <div v-if="isErrorField('team')" class="invalid-feedback">Campo Team obbligatorio</div>
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
        <span> Aggiunto giocatore <b>{{form.name}} {{form.surname}}</b> del team <b>{{form.team.name}}</b></span>
      </div>
      <p class="text-center">
        <a href="#" class="btn btn-secondary" @click.prevent="reload()">Indietro</a>
      </p>
    </div>
    <div class="loading" v-if="loading"><span>LOADING</span> <img src="../../assets/loader.svg" /></div>
  </div>
</template>

<script src="./TeamReg.js"></script>
<style src="./TeamReg.scss" lang="scss" scoped></style>

