<template>
  <div>
    <RegistrationForm />
  </div>
  <div id="app">
    <router-link to="/about">About</router-link>
    <router-link to="/registration">Registration</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import RegistrationForm from './components/RegistrationForm.vue';

export default {
  components: {
    RegistrationForm
  },
  name: 'RegistrationForm'
}

</script>

<style scoped></style>
