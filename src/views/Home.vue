<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
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
