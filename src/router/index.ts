import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
// import home from "../views/Home.vue";
// import summ from "../views/Summary.vue";
// import service from "../views/Service.vue";
// import tech from "../views/Tech.vue";
// import qna from "../views/Qna.vue";

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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
