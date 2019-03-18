<template>
  <div class="component min-h-100">
    <div class="col-md-6" v-if="!loading">
      <div class="content">
        <div class="mt-5" v-if="groups.length > 0">
          <b-card>
            <b-card-text>Gruppi</b-card-text>

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

            <b-button class="mb-3" v-b-modal.modalGroupNew variant="warning">Nuovo gruppo</b-button>
          </b-card>
        </div>
        <div class="mt-5" v-else>
          <b-card-text>Gruppi</b-card-text>
          <b-card>
            <p> Nessuna gruppo presente</p>
            <b-button class="mb-3" v-b-modal.modalGroupNew variant="warning">Nuovo gruppo</b-button>
          </b-card>
        </div>
      </div>
    </div>

    <!-- New Group Modal -->
    <b-modal hide-footer id="modalGroupNew" ref="modalGroupNew" title="Nuovo Gruppo">
      <modal-group-new></modal-group-new>
    </b-modal>

    <!-- Group Detail Modal -->
    <b-modal hide-footer hide-title id="modalGroupDetails" ref="modalGroupDetails">
      <modal-group-details :groupid="groupId"></modal-group-details>
    </b-modal>

    <div class="loading" v-if="loading">
      <b-spinner variant="primary" label="spinning"></b-spinner>
    </div>
  </div>
</template>

<script src="./ViewGroups.js"></script>
<style src="../../styles/component.scss" lang="scss"></style>
