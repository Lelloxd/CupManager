import axios from 'axios';
import Vue from 'vue';
import {mapState, mapActions} from 'vuex'

export default {
  name: 'cards',

  computed:{
    ...mapState('account', ['status']),
  },

  data() {
    return {
      cards: this.getCards(),
      fields: {
        name: {
          label: 'Nome',
        },
        ammonizione: {
          label: 'Ammonizioni',
        },
        espulsione: {
          label: 'Espulsioni',
        },
      },
      loading: true,
    };
  },
  methods: {
    getCards() {
      const url = `${Vue.config.ApiUrl}/cards`;
      this.loading = true;

      axios.get(url)
        .then((response) => {
          this.cards = response.data;

          this.cards.forEach((card) => {
            if (!card[2]) {
              card[2] = 0;
            }
            if (!card[3]) {
              card[3] = 0;
            }
          });
          this.loading = false;
        });
    },
  },
};
