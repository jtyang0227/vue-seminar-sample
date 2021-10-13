import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "props",
    component: () => import("../views/Props"),
  },
  {
    path: "/emit",
    name: "Emit",
    component: () => import("../views/Emit.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
