<template>
  <div>
    <form v-if="!isSubmitted" @submit.prevent="submit" novalidate>
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
        <p v-if="isErrorField('name')" class="invalid-feedback">Campo Nome obbligatorio!</p>
      </div>

      <div class="form-group">
        <b-button variant="primary" :disabled="submitting">
          <span v-if="submitting">
            <b-spinner small/>
            <span class="sr-only">Submitting</span>
          </span>
          <span v-else>Salva</span>
        </b-button>
      </div>
    </form>

    <div v-if="isSubmitted">
      <p class="alert alert-success">Aggiunto gruppo <b>{{ form.name }}</b></p>
      <p class="text-center">
        <a href="#" class="btn btn-secondary" @click.prevent="reload()">Indietro</a>
      </p>
    </div>
  </div>
</template>

<script src="./ModalGroupNew.js"></script>
<style src="../../styles/component.scss" lang="scss"></style>
