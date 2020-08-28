import Vue from "vue";
import VueRouter from "vue-router";
import * as Views from "../views";

Vue.use(VueRouter);

const routes = [
  {
    name: "DashBoard",
    path: "/",
    component: Views.DashBoard
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
