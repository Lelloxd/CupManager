import axios from 'axios'
import Vue from 'vue'
import Group from './Group'
import GroupDetail from './GroupDetail'

Vue.component('group', Group)
Vue.component('groupDetail', GroupDetail)


export default {
  name: 'groups',
    data() {
        return {
            loading: false,
            groups: this.getGroups(),
            selected: false,
            groupId: '',
            fields: {
              name: {
                label: 'Nome',
              }
            }
        }
    },

    methods: {
      getGroups() {
        const url = Vue.config.ApiUrl + '/group/all';
        axios.get(url).then(response => {
            this.groups = response.data;
            this.loading = false;
        })
      },
      rowSelected(item){
        this.groupId = item[0].id;
        this.selected = true;
        this.$refs.modalGroupDetail.show()
      }
  }
}
