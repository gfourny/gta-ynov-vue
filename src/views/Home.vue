<template>
  <div class="home">
    <img alt="GTA" src="../assets/GTA-logo.png" style="width: 200px">
    <ConnectionPage msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ConnectionPage from "@/components/ConnectionPage.vue";



export default {
  name: "home",
  components: {
    ConnectionPage
  }
};
</script>
