import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import BootstrapVue from 'bootstrap-vue';
import VueI18n from 'vue-i18n'

Vue.use(BootstrapVue, VueI18n);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import {messages} from 'vue-bootstrap-calendar';

window.i18n = new VueI18n({
  locale: 'fr',
  messages
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),

  el:'#app',
  i18n,

  data() {
    return {
      email: '',
      password: '',
      status: '',
      prenom: '',
      nom: '',
      adresse: ''
    }
  }

}).$mount("#app");
