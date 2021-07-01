import { createRouter, createWebHistory } from "vue-router";
import search_enter from "@/components/search_enter";

const routes = [
  {
    path: "/",
    name: "Default",
    component: search_enter
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
    path: "/result",
    name: "Result",
    component: () => import("../components/Result"),
    props: route => ( route.query )
  },
  {
    path: "/explore",
    name: "Explore",
    component: () => import("../components/Explore"),
    props: router => (router.query)
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
