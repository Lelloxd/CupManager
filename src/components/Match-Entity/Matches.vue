<template>
  <div class="component h-100">
    <div class="col-md-8">
      <div class="content" v-if="!loading">
        <div class="mt-5">
          <b-card>
            <div v-if="!loading">
              <b-card-text>Partite</b-card-text>
              <div>
                <b-table
                  class="mt-3"
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
                  >{{ data.item.homeResult}} - {{ data.item.guestResult}}</template>
                  <template
                    slot="stato"
                    slot-scope="data"
                  >{{ data.item.completed ? 'Finita' : 'In corso' }}</template>
                </b-table>
              </div>
              <div class="loading" v-if="loading">
                <span>LOADING</span>
                <img src="../../assets/loader.svg">
              </div>
            </div>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Matches.js"></script>
<style src="../../styles/component.scss" lang="scss"></style>
