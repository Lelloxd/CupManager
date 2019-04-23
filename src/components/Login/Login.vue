<template>
  <div class="component min-h-100">
    <div class="col-md-4" v-if="!loading">
      <div class="content">
        <div class="mt-5">
          <b-card>
            <b-card-text>Login</b-card-text>

            <form @submit.prevent="handleSubmit">
              <div style="margin-bottom: 10px;">
                <input placeholder="Your email" type="email" v-model="username">
              </div>
              <div style="margin-bottom: 10px;">
                <input placeholder="Password" type="password" v-model="password">
              </div>
              <div style="margin-bottom: 10px;">
                <button>Login</button>
              </div>
            </form>
          </b-card>
        </div>
      </div>
    </div>
    <div class="loading" v-if="loading">
      <b-spinner variant="primary" label="spinning"></b-spinner>
    </div>
  </div>
</template>


<script src="./Login.js"></script>
<style src="../../styles/component.scss" lang="scss"></style>

