import {mapState, mapActions} from 'vuex'

export default {
  name: 'calendar',

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
