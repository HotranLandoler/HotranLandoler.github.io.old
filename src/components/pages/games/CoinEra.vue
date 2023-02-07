<template>
  <game-detail
    game-title-cn="撒币时代"
    game-title-en="Coin Era"
    game-img-src="img/coin-era-title.webp"
    game-intro="From ancient times to modern times, 
            human society has slowly evolved. 
            Money has witnessed the productivity 
            that drives society. In 1P vs. 2P mode, 
            players need to improve their economic factors 
            within 5 minutes to make their own era evolve, 
            and at the end of time, the different evolutionary 
            states of both players may bring different game endings."
    :game-features="gameFeatures"
    download="See Release in the code repository."
    :information="gameInfo"
  ></game-detail>
</template>

<script lang="ts" setup>
import GameDetail from "@/components/GameDetail.vue";
const gameFeatures = [
  "Pick coins falling from the sky!",
  "Throw your coin to hit the other player!",
  "Or just keep the coin and build up your wealth?",
];
const gameInfo = {
  genre: "(Local Multiplayer) Action",
  platform: "Windows",
  lang: "Chinese",
  date: "May 16, 2022",
  session: "5 min",
  inputs: "Keyboard, Xbox controller",
  repo: "https://gitee.com/dubhe-team/game-jam/",
  developers: [
    "Shawn Lou - Programming",
    "Megrez - Art",
    "抱羊羊 - Art",
    "枕流 - Programming",
    "蝾螈 - Programming",
  ],
};
</script>
