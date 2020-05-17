import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Picts from "./pages/Picts";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/picts",
      name: "picts",
      component: Picts,
    },
    {
      path: "/",
      name: "Home",
      component: Home,
    },
  ],
});
