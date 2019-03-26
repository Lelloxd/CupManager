import {mapState, mapActions} from 'vuex'
import axios from 'axios'
import Vue from 'vue'

Vue.use(axios)


export default {
  name: 'navbar',

  data() {
    return {
      logged : false
    }
  },
  computed:{
    ...mapState('account', ['status']),
  },
  methods: {
    ...mapActions('account', ['login', 'logout']),
    handleSubmit() {
      this.logout()
    }
  }
}
