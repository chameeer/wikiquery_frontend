import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Explore from "@/components/Explore";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("../components/search_enter")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/Login")
  },
  {
    path: "/explore",
    name: "Explore",
    component: Explore
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;