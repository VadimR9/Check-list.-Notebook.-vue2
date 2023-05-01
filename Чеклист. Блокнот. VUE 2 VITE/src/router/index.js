import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../page/home.vue"),
    },
    {
      path: "/blocknot",
      name: "Blocknot",
      component: () => import("../page/blocknot.vue"),
    },
    {
      path: "/check",
      name: "Check",
      component: () => import("../page/check.vue"),
    },
  ],
});

export default router;
