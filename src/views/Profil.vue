<template>
  <div class="profil">
    <ProfilComponent msg="Bienvenue sur votre profil"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProfilComponent from "@/components/Profil-component.vue";

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: "profil",
  components: {
    ProfilComponent
  }
};
</script>