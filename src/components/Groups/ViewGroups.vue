<template>
  <div class="component h-100" style="margin-top: -70px" :style="{'background-image': 'url(' + require('../../assets/sfondo.jpg') + ')'}">
    <div class="col-xs-12 col-sm-12 col-md-6 mx-auto mt-3">
      <b-card class="card mt-5" style="top: 2em">
        <b-card-text>
          <div class="titleCard">
            <p>Gruppi</p>
          </div>
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
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script src="./ViewGroups.js"></script>
<style src="../../styles/componentStyle.scss" lang="scss"></style>
