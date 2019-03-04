<template>
  <div class="col-xs-12 col-sm-12 col-md-4 mx-auto">
    <div v-if="!loading">
      <h3>{{group.name}}<h3>
      <hr>
      <b-table class="mt-3" striped hover :items="group.rankings" :fields="fields" selectable :select-mode= "'single'" @row-selected="rowSelected"/>
    </div>
  </div>
</template>

<script src="./Group.js"></script>

