<template>
  <div>
    <RegistrationForm />
  </div>
  <div id="app">
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/registration">Registration</RouterLink>
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
