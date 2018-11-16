import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import dataManager from './DataManager.js';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),

  el:'#app',

  data : dataManager

}).$mount("#app");
