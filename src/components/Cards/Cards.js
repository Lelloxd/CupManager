import axios from 'axios';
import Vue from 'vue';

export default {
  name: 'cards',
  data() {
    return {
      loading: false,
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
