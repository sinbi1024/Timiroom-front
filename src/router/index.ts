import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import home from "../views/Home.vue";
import summ from "../views/Summary.vue";
import service from "../views/Service.vue";
import tech from "../views/Tech.vue";
import qna from "../views/Qna.vue";
import login from "../views/Login.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Main",
    component: home,
  },
  {
    // 개요
    path: "/summ",
    name: "Summ",
    component: summ,
  },
  {
    path: "/service",
    name: "Service",
    component: service,
  },
  {
    path: "/tech",
    name: "Tech",
    component: tech,
  },
  {
    path: "/qna",
    name: "QnA",
    component: qna,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
