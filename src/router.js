import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Profil from "./views/Profil.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/Profil",
      name: "profil",
      component: Profil
    }
  ]
});
