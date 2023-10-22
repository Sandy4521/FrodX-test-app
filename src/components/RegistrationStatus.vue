<template>
    <div>
      <p v-if="registrationStatus === 'Submitted'">¡Registro exitoso!</p>
      <p v-if="registrationStatus === 'Error'">Error en el registro: {{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState('registration', {
        registrationStatus: state => state.registrationStatus,
        errorMessage: state => state.errorMessage,
      }),
    },
  };
  
  </script>
  