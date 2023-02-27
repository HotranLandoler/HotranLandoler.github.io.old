import BasePage from "./components/general/BasePage.vue";

import Arts from "./components/pages/Arts.vue";
import About from "./components/pages/About.vue";

import GamesHome from "./components/games/GamesHome.vue";
import CquHorror from "./components/games/CquHorror.vue";
import CoinEra from "./components/games/CoinEra.vue";
import IntoSoil from "./components/games/IntoSoil.vue";

import ToolsHome from "./components/tools/ToolsHome.vue";
import NameFight from "./components/tools/NameFight.vue";
import Pomodoro from "./components/tools/Pomodoro.vue";
import UnitConverter from "./components/tools/UnitConverter.vue";

import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", redirect: "/game" },
  { path: "/art", component: Arts },
  {
    path: "/game",
    component: BasePage,
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
  {
    path: "/tool",
    component: BasePage,
    children: [
      {
        path: "",
        component: ToolsHome,
      },
      {
        path: "namesfight",
        component: NameFight,
      },
      {
        path: "pomodoro",
        component: Pomodoro,
      },
      {
        path: "unitconverter",
        component: UnitConverter,
      },
    ],
  },
  { path: "/about", component: About },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
