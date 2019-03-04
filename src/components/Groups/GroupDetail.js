import axios from 'axios'
import Vue from 'vue'

export default {
  name: 'groupDetail',
    data() {
        return {
            loading: false,
            groupId: '',
            group: this.getGroup(),
            groupId: '',
            fields: {
              team:{
                label: 'Squadra',
                formatter: value => value.name,
              },
              points:{
                label: 'Punti'
              },
              goalsMade: {
                label: 'GF'
              },
              goalsConceded :{
                label: 'GS'
              },
              won: {
                label: 'V'
              },
              lost: {
                label: 'P'
              },
              drawn: {
                label: 'N'
              }
            }
        }
    },

    methods: {
      getGroup() {
        const url = Vue.config.ApiUrl + '/group?id='+this.groupId;
        axios.get(url).then(response => {
            this.group = response.data;
            this.loading = false;
        })
      },
      rowSelected(item){
        this.groupId = item.id;
        this.$refs.modalGroupDetail.show()
      }
  }
}
