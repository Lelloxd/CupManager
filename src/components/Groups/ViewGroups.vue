<template>
  <div class="component h-100">
    <div class="col-md-6">
     <div class="content" v-if="!loading">
        <b-card class="mt-5">
          <b-card-text>Gruppi</b-card-text>
          <div>
            <b-table
              class="mb-3"
              striped
              hover
              :items="groups"
              :fields="fields"
              selectable
              :select-mode="'single'"
              @row-selected="rowSelected"
            />
          </div>
          <a v-b-modal.modalNewGroup href="#" class="btn btn-warning mt-2 mb-3">Nuovo gruppo</a>

          <!-- New Group -->
          <b-modal id="modalNewGroup" hide-footer title="Nuovo Gruppo">
            <group></group>
          </b-modal>

          <!-- Group Detail-->
          <b-modal ref="modalGroupDetail" hide-footer hide-title>
            <groupDetail v-if="selected" :groupid="groupId"></groupDetail>
          </b-modal>

        </b-card>
      </div>
    </div>
    <div class="loading" v-if="loading">
      <b-spinner variant="primary" label="spinning"></b-spinner>
    </div>
  </div>
</template>

<script src="./ViewGroups.js"></script>
<style src="../../styles/component.scss" lang="scss"></style>
