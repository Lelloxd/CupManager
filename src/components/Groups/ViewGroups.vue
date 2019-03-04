
<template>
  <div class="col-xs-12 col-sm-12 col-md-6 mx-auto">
    <h2>Gruppi</h2>
    <div>
        <b-table class="mt-3" striped hover :items="groups" :fields="fields" selectable :select-mode= "'single'" @row-selected="rowSelected"/>
    </div>
    <div class="loading" v-if="loading"><span>LOADING</span> <img src="../../assets/loader.svg" /></div>
    <a v-b-modal.modalNewGroup href="#" class="btn btn-warning mt-5" >Nuovo gruppo</a>

    <!-- New Group -->
    <b-modal id="modalNewGroup" hide-footer title="Nuovo Gruppo">
      <group></group>
    </b-modal>

    <!-- Group Detail-->
    <b-modal ref="modalGroupDetail" hide-footer hide-title>
      <groupDetail v-if="selected" :groupid='groupId'></groupDetail>
    </b-modal>

  </div>
</template>

<script src="./ViewGroups.js"></script>
