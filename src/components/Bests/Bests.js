import axios from 'axios';
import Vue from 'vue';
import {mapState, mapActions} from 'vuex'

export default {
  name: 'bests',

  computed:{
    ...mapState('account', ['status']),
  },

  data() {
    return {
      items: [
        {
          text: 'Admin',
          href: '#'
        },
        {
          text: 'Manage',
          href: '#'
        },
        {
          text: 'Library',
          active: true
        }
      ],
      bests: this.getBests(),
      fields: {
        name: {
          label: 'Nome',
          tdClass: 'rowStyle',
        },
        best: {
          label: 'Migliore in campo',
          tdClass: 'rowStyle',
        },
      },
      loading: true,
    };
  },

  methods: {
    getBests() {
      this.loading = true;
      const url = `${Vue.config.ApiUrl}/bests`;
      axios.get(url)
        .then((response) => {
          this.bests = response.data;
          this.loading = false;
        });
    },
  },
};
