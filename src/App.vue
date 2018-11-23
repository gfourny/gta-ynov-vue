<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
       | 
      <router-link to="/Profil">Profil</router-link>
       | 
       <router-link to="/Calendar">Agenda</router-link>

       <b-button id="logout" variant="danger" v-on:click="logout">Déconnexion</b-button>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }

  margin-left: 7%
}

#logout {
  float: right;
}

@media screen and (max-width: 600px) {
  #logout{
    width: 40%
  }
}
</style>

<script>
export default {
  methods: {
    logout: function() {
      this.$root.logout();
      this.$router.push('/')
    }
  }
};
</script>

