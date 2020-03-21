import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/Red_dead",
    name: "Redemption",
    component: () => import("../views/Red_dead.vue")
  },
  {
    path: "/Uncharted",
    name: "Uncharted",
    component: () => import("../views/Uncharted.vue")
  },
  {
    path: "/Detroit",
    name: "Detroit",
    component: () => import("../views/Detroit.vue")
  },
  {
    path: "/God",
    name: "God",
    component: () => import("../views/God.vue")
  },
  {
    path: "/Death",
    name: "Death",
    component: () => import("../views/Death.vue")
  },
  {
    path: "/Red_1",
    name: "Redemption_1",
    component: () => import("../views/Red_dead_1.vue")
  },
  {
    path: "/Infamous",
    name: "Infamous",
    component: () => import("../views/Infamous.vue")
  },
  {
    path: "/Battlefield_1",
    name: "Battlefield",
    component: () => import("../views/Battlefield_1.vue")
  },
  {
    path: "/DOOM_2016",
    name: "DOOM_2016",
    component: () => import('../views/DOOM_2016.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
