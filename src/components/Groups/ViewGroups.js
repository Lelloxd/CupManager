import axios from 'axios';
import Vue from 'vue';

import Group from '../ModalGroupNew/ModalGroupNew';
import GroupDetails from '../ModalGroupDetails/ModalGroupDetails';

Vue.component('modalGroupNew', Group);
Vue.component('modalGroupDetails', GroupDetails);

export default {
  name: 'groups',
  data() {
    return {
      loading: false,
      groups: [],
      selected: false,
      groupId: '',
      fields: {
        name: {
          label: 'Nome',
        },
      },
    };
  },

  methods: {
    getGroups() {
      const url = `${Vue.config.ApiUrl}/group/all`;
      axios.get(url)
        .then((response) => {
          this.groups = response.data;
          this.loading = false;
        });
    },
    rowSelected(item) {
      this.groupId = item[0].id;
      this.selected = true;
      this.$refs.modalGroupDetails.show();
    },
  },
  mounted: function() {
    this.getGroups();
  }
};
