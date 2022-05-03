import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import Main from "../views/Home.vue";
import Summ from "../views/Summary.vue";
import Service from "../views/Service.vue";
import Tech from "../views/Tech.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    // 개요
    path: "/summ",
    name: "Summ",
    component: Summ,
  },
  {
    path: "/service",
    name: "Service",
    component: Service,
  },
  {
    path: "/tech",
    name: "Tech",
    component: Tech,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
