<template>
  <div class="col-xs-12 col-sm-12 col-md-6 mx-auto">
    <form v-if="!isSubmitted" @submit.prevent="submit" novalidate>
      <div class="form-group">
        <label for="name">Nome *</label>
        <input type="text" class="form-control" id="name" v-model.lazy.trim="form.name" @blur="onFieldBlur('name')" v-bind:class="getFieldClasses('name')">
        <div v-if="isErrorField('name')" class="invalid-feedback">Campo Nome obbligatorio!</div>
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
        <span> Aggiunto gruppo <b>{{form.name}}</b></span>
      </div>
      <p class="text-center">
        <a href="#" class="btn btn-secondary" @click.prevent="reload()">Indietro</a>
      </p>
    </div>
  </div>
</template>

<script src="./Group.js"></script>

