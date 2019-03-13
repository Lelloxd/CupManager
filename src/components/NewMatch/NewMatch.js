
import { required } from 'vuelidate/lib/validators';
import axios from 'axios';
import Vue from 'vue';

export default {
  name: 'newTeam',
  data() {
      return {
          isSubmitted: false,
          isError: false,
          errorHeader: 'error.invalidFields',
          errors: [],
          submitting: false,
          form: {
            homeTeam: '',
            guestTeam: '',
            referee: '',
            completed: false,
            date: ''
          },
          teams: this.getTeams(),
      }
  },
  methods: {
      submit() {
          this.$v.$touch();
          if (!this.$v.$error) {
              this.sendFormData();
          } else {
              this.validationError();
          }
      },
      enableSubmitLoader() {
          this.submitting = true;
      },
      disableSubmitLoader() {
          this.submitting = false;
      },
      sendFormData() {
          this.enableSubmitLoader();
          axios.post(Vue.config.ApiUrl + "/match", this.form).then(response => {
              this.submitSuccess(response);
              this.disableSubmitLoader();
              this.$router.push({ name: 'all-matches' })
          }).catch(error => {
              this.submitError(error);
              this.disableSubmitLoader();
          });
      },
      submitSuccess(response) {
          if (response.status == 200) {
              this.isSubmitted = true;
              this.isError = false;
          } else {
              this.errorHeader = 'Unexpected Error';
              this.errors = response.data.errors;
              this.isError = true;
          }
      },
      submitError(error) {
          this.errorHeader = 'error.general';
          this.errors = [{ 'field': null, 'message': error }];
          this.isError = true;
      },
      validationError() {
          this.errorHeader = 'error.invalidFields';
          this.errors = this.getErrors();
          this.isError = true;
      },
      isErrorField(field) {
          try {
              if (this.getValidationField(field).$error) {
                  return true;
              }
          } catch (error) { return error; }

          return this.errors.some(el => el.field === field);
      },
      getErrors() {
          let errors = [];
          for (const field of Object.keys(this.form)) {
              try {
                  if (this.getValidationField(field).$error) {
                      errors.push({ 'field': field, 'message': null });
                  }
              } catch (error) { return error; }
          }
          return errors;
      },
      getFieldClasses(field) {
          return { 'is-invalid': this.isErrorField(field) }
      },
      getValidationField(field) {
          if (this.$v.form[field]) {
              return this.$v.form[field];
          }
          throw Error('No validation for field ' + field);
      },
      onFieldBlur(field) {
          try {
              this.getValidationField(field).$touch();
              if (this.getValidationField(field).$error) {
                  if (!this.errors.some(el => el.field === field)) {
                      this.errors.push({ 'field': field, 'message': null });
                  }
              } else {
                  this.errors = this.errors.filter(el => el.field !== field);
              }
          } catch (error) { return error; }
      },
      reload() {
          window.location = '#/newMatch';
      },
      getTeams() {
        this.loading = true;
        const url = Vue.config.ApiUrl + '/team/all';
        axios.get(url).then(response => {
            this.teams = response.data;
            this.loading = false;
        })
    },
  },
  validations: {
      form: {
          homeTeam: { required },
          guestTeam: { required },
          date: {required},
          referee: {required}
      }
  },
  watch: {
      errors() {
          this.isError = this.errors.length > 0 ? true : false;
      }
  }
}
