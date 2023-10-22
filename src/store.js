import { createApp } from 'vue';
import App from './App.vue';
import { createStore } from 'vuex'; // Importa createStore en lugar de Vuex.

const registrationModule = {
  state() {
    return {
      registrationStatus: 'Not submitted',
      userData: {
        name: '',
        email: '',
        phone: '',
      },
      errorMessage: '',
    };
  },
  mutations: {
    setRegistrationStatus(state, status) {
      state.registrationStatus = status;
    },
    setUserData(state, userData) {
      state.userData = userData;
    },
    setErrorMessage(state, errorMessage) {
      state.errorMessage = errorMessage;
    },
  },
  actions: {
    submitRegistration({ commit}, userData) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (userData.name && userData.email && userData.phone) {
            commit('setUserData', userData);
            commit('setRegistrationStatus', 'Submitted');
            resolve();
          } else {
            commit('setRegistrationStatus', 'Error');
            commit('setErrorMessage', 'Registration data is invalid');
            reject(new Error('Registration data is invalid.'));
          }
        }, 1000);
      });
    },
  },
};

const store = createStore({
  modules: {
    registration: registrationModule,
  },
});

const app = createApp(App);
app.use(store);
app.mount('#app');

export default store;