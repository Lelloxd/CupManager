import axios from 'axios';
import Vue from 'vue';

import { required } from 'vuelidate/lib/validators';

export default {
  name: 'newTeam',

  data() {
    return {
      errorHeader: 'error.invalidFields',
      errors: [],
      form: {
        homeTeam: '',
        guestTeam: '',
        referee: '',
        completed: false,
        date: '',
      },
      isError: false,
      isSubmitted: false,
      submitting: false,
      teams: this.getTeams(),
    };
  },
  methods: {
    disableSubmitLoader() {
      this.submitting = false;
    },

    enableSubmitLoader() {
      this.submitting = true;
    },

    submit() {
      this.$v.$touch();
      if (!this.$v.$error) {
        this.sendFormData();
      } else {
        this.validationError();
      }
    },

    sendFormData() {
      this.enableSubmitLoader();
      axios.post(`${Vue.config.ApiUrl}/match`, this.form)
        .then((response) => {
          this.submitSuccess(response);
          this.disableSubmitLoader();
          this.$router.push({
            name: 'all-matches',
          });
        }).catch((error) => {
          this.submitError(error);
          this.disableSubmitLoader();
        });
    },

    submitError(error) {
      this.errorHeader = 'error.general';
      this.errors = [{
        field: null,
        message: error,
      }];
      this.isError = true;
    },

    submitSuccess(response) {
      if (response.status === 200) {
        this.isSubmitted = true;
        this.isError = false;
      } else {
        this.errorHeader = 'Unexpected Error';
        this.errors = response.data.errors;
        this.isError = true;
      }
    },

    validationError() {
      this.errorHeader = 'error.invalidFields';
      this.errors = this.getErrors();
      this.isError = true;
    },

    getErrors() {
      const errors = [];

      Object.keys(this.form).forEach((field) => {
        try {
          if (this.getValidationField(field).$error) {
            errors.push({
              field,
              message: null,
            });
          }
        } catch (error) {
          return error;
        }
      });

      return errors;
    },

    getFieldClasses(field) {
      return {
        'is-invalid': this.isErrorField(field),
      };
    },

    getTeams() {
      const url = `${Vue.config.ApiUrl}/team/all`;
      this.loading = true;

      axios.get(url).then((response) => {
        this.teams = response.data;
        this.loading = false;
      });
    },

    getValidationField(field) {
      if (this.$v.form[field]) {
        return this.$v.form[field];
      }
      throw Error(`No validation for field ${field}`);
    },

    isErrorField(field) {
      try {
        if (this.getValidationField(field).$error) {
          return true;
        }
      } catch (error) {
        return error;
      }

      return this.errors.some(el => el.field === field);
    },

    onFieldBlur(field) {
      try {
        this.getValidationField(field).$touch();
        if (this.getValidationField(field).$error) {
          if (!this.errors.some(el => el.field === field)) {
            this.errors.push({
              field,
              message: null,
            });
          }
        } else {
          this.errors = this.errors.filter(el => el.field !== field);
        }
      } catch (error) {
        return error;
      }
    },

    reload() {
      window.location = '#/newMatch';
    },
  },

  validations: {
    form: {
      homeTeam: {
        required,
      },
      guestTeam: {
        required,
      },
      date: {
        required,
      },
      referee: {
        required,
      },
    },
  },

  watch: {
    errors() {
      this.isError = this.errors.length > 0;
    },
  },
};
