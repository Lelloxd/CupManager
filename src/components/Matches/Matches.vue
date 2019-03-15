<template>
  <div class="component min-h-100">
    <div class="col-md-6" v-if="!loading">
      <div class="content">
        <div class="mt-5">
          <b-card>
            <b-card-text>Partite</b-card-text>

            <b-table
              class="mb-3"
              striped
              hover
              selectable
              :select-mode="'single'"
              :items="matches"
              :fields="fields"
              @row-selected="rowSelected"
            >
              <template
                slot="risultato"
                slot-scope="data"
              >{{ data.item.homeResult }} - {{ data.item.guestResult }}</template>
              <template
                slot="stato"
                slot-scope="data"
              >{{ data.item.completed ? 'Finita' : 'In corso' }}</template>
            </b-table>
          </b-card>
        </div>
      </div>
    </div>
    <div class="loading" v-if="loading">
      <b-spinner variant="primary" label="spinning"></b-spinner>
    </div>
  </div>
</template>

<script src="./Matches.js"></script>
<style src="../../styles/component.scss" lang="scss"></style>
