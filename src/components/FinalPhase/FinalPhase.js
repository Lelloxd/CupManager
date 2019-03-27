import {mapState, mapActions} from 'vuex'

export default {
  name: 'final-phase',

  computed:{
    ...mapState('account', ['status']),
  },

  data() {
    return {
      loading: true,
    };
  },

  methods: {
  },

  mounted: function() {
  },
};
