<template>
  <div>
    <h2>Login Page</h2>
    <form @submit.prevent="handleSubmit">
      <div>
          <input placeholder="Your email" type="email" v-model="username">
      </div>
      <div>
          <input placeholder="Password" type="password" v-model="password">
      </div>
      <div>
          <button>Login</button>
      </div>
    </form>
  </div>
</template>

<script src="./Login.js"></script>

