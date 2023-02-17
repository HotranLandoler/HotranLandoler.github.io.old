import Arts from "./components/pages/Arts.vue";
import NameFight from "./components/tools/NameFight.vue";
import About from "./components/pages/About.vue";

import Games from "./components/games/Games.vue";
import GamesHome from "./components/games/GamesHome.vue";
import CquHorror from "./components/games/CquHorror.vue";
import CoinEra from "./components/games/CoinEra.vue";
import IntoSoil from "./components/games/IntoSoil.vue";

import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", redirect: "/game" },
  { path: "/art", component: Arts },
  {
    path: "/game",
    component: Games,
    children: [
      {
        path: "",
        component: GamesHome,
      },
      {
        path: "cquhorror",
        component: CquHorror,
      },
      {
        path: "coinera",
        component: CoinEra,
      },
      {
        path: "intosoil",
        component: IntoSoil,
      },
    ],
  },
  { path: "/tool", component: NameFight },
  { path: "/about", component: About },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
