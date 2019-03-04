import { required } from 'vuelidate/lib/validators';
import axios from 'axios';
import Vue from 'vue';


export default {
    name: 'group',
    data() {
        return {
            isSubmitted: false,
            isError: false,
            errorHeader: 'error.invalidFields',
            errors: [],
            submitting: false,
            form: {
                name: ''
            }
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
            axios.post(Vue.config.ApiUrl + "/group", this.form).then(response => {
                this.submitSuccess(response);
                this.disableSubmitLoader();
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
          this.$forceUpdate()
        }
    },
    validations: {
        form: {
            name: { required }
        }
    },
    watch: {
        errors() {
            this.isError = this.errors.length > 0 ? true : false;
        }
    }
}
