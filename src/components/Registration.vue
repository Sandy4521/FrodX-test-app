<template>
    <form @submit.prevent="submitForm">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="user.name" required>
        <span v-if="errors.name" class="error">{{ errors.name }}</span>

        <label for="email">Email:</label>
        <input type="email" id="email" v-model="user.email" required>
        <span v-if="errors.email" class="error">{{ errors.email }}</span>

        <label for="phone">Phone number:</label>
        <input type="tel" id="phone" v-model="user.phone" required>
        <span v-if="errors.phone" class="error">{{ errors.phone }}</span>

        <button type="submit">Send</button>
    </form>
</template>
  
<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            user: {
                name: "",
                email: "",
                phone: "",
            },
            errors: {
                name: "",
                email: "",
                phone: "",
            },
        };
    },
    computed: {
        ...mapState('registration', {
            status: state => state.registrationStatus,
        }),
    },
    methods: {
    validateForm() {
      this.errors = {};

      if (!this.user.name) {
        this.errors.name = "Name is required";
      }

      if (!this.user.email) {
        this.errors.email = "Email is required";
      } else if (!/^\S+@\S+\.\S+$/.test(this.user.email)) {
        this.errors.email = "Email must be valid";
      }

      if (!this.user.phone) {
        this.errors.phone = "Phone is required";
      }
    },
    submitForm() {
      this.validateForm();

      if (Object.keys(this.errors).length === 0) {
        this.$store.commit('registration/setUserData', this.user);
        this.$store.dispatch('registration/submitRegistration', this.user)
          .then(() => {
            this.$store.commit('registration/setRegistrationStatus', 'Submitted');
          })
          .catch(error => {
            this.$store.commit('registration/setRegistrationStatus', 'Error');
            this.$store.commit('registration/setErrorMessage', error.message);
          });
      }
    },
  },
};
</script>
  
<style scoped>
@import '/style/RegistrationForm.css';

.error-button {
    background-color: #d9534f;
    color: #fff;
}
</style>
  