<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ConnectionPage msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ConnectionPage from "@/components/ConnectionPage.vue";

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: "home",
  components: {
    ConnectionPage
  }
};
</script>
