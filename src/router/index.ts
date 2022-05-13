import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Main",
    component: () => import("../views/Home.vue"),
  },
  {
    // 개요
    path: "/summ",
    name: "Summ",
    component: () => import("../views/Summary.vue"),
  },
  {
    path: "/service",
    name: "Service",
    component: () => import("../views/Service.vue"),
  },
  {
    path: "/tech",
    name: "Tech",
    component: () => import("../views/Tech.vue"),
  },
  {
    path: "/qna",
    name: "QnA",
    component: () => import("../views/Qna.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
