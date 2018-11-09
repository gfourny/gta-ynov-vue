<template>
  <div class="profil">
    <ProfilComponent msg="Bienvenue sur votre profil"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProfilComponent from "@/components/Profil-component.vue";



export default {
  name: "profil",
  components: {
    ProfilComponent
  }
};
</script>