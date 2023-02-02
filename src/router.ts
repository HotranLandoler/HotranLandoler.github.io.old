import Arts from "./components/pages/Arts.vue";
import NameFight from "./components/pages/NameFight.vue";
import About from "./components/pages/About.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", redirect: "/game" },
  { path: "/art", component: Arts },
  { path: "/game", component: NameFight },
  { path: "/about", component: About },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
