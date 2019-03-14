<template>
  <div class="component h-100">
    <div class="col-md-4">
      <div class="content">
        <b-card class="card-form">
          <b-card-text>NUOVA SQUADRA</b-card-text>
          <form v-if="!isSubmitted" @submit.prevent="submit" novalidate>
            <div class="form-group">
              <label for="name">Nome *</label>
              <input
                type="text"
                class="form-control"
                id="name"
                v-model.lazy.trim="form.name"
                @blur="onFieldBlur('name')"
                v-bind:class="getFieldClasses('name')"
              >
              <div v-if="isErrorField('name')" class="invalid-feedback">Campo Nome obbligatorio!</div>
            </div>

            <div class="form-group">
              <button type="submit" class="btn btn-primary" :disabled="submitting">
                <span v-if="submitting">
                  submitting
                  <img src="../../assets/loader.svg">
                </span>
                <span v-else>Salva</span>
              </button>
            </div>
          </form>
          <div v-if="isSubmitted">
            <div class="alert alert-success">
              <span>
                Aggiunto squadra
                <b>{{form.name}}</b>
              </span>
            </div>
            <p class="text-center">
              <a href="#" class="btn btn-secondary" @click.prevent="reload()">Indietro</a>
            </p>
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script src="./NewTeam.js"></script>
<style src="../../styles/component.scss" lang="scss"></style>

