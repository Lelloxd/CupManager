import {mapState, mapActions} from 'vuex'
import axios from 'axios'
import Vue from 'vue'

Vue.use(axios)

export default {
  name: 'login',

  data(){
    return {
      username : "",
      password : ""
    }
  },
  methods: {
    ...mapActions('account', ['login']),
    handleSubmit (e) {
        this.submitted = true;
        const {username, password} = this;
        if (username && password) {
            this.login({username,password});
        }
    }
  }
}
