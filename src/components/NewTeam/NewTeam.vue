<template>
  <div class="component min-h-100">
    <div class="col-md-6">
      <div class="content">
        <div>
          <b-card class="card-form">
            <b-card-text>Nuova squadra</b-card-text>

            <b-form class="form" v-if="!isSubmitted" @submit.prevent="submit" novalidate>
              <div class="form-group">
                <label for="name">Nome *</label>
                <input
                  @blur="onFieldBlur('name')"
                  class="form-control"
                  id="name"
                  type="text"
                  v-model.lazy.trim="form.name"
                  v-bind:class="getFieldClasses('name')"
                >
                <div v-if="isErrorField('name')" class="invalid-feedback">Campo Nome obbligatorio!</div>
              </div>

              <div class="form-group">
                <b-button :disabled="submitting" type="submit" variant="primary">
                  <span v-if="submitting">
                    <b-spinner small/>
                    <span class="sr-only">Submitting</span>
                  </span>
                  <span v-else>Salva</span>
                </b-button>
              </div>
            </b-form>

            <div v-if="isSubmitted">
              <p class="alert alert-success">
                Aggiunto squadra
                <b>{{ form.name }}</b>
              </p>
              <p class="text-center">
                <a href="#" class="btn btn-secondary" @click.prevent="reload()">Indietro</a>
              </p>
            </div>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./NewTeam.js"></script>
<style src="../../styles/component.scss" lang="scss"></style>

