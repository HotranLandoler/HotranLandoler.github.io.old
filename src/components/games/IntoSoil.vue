<template>
  <div class="play">
    <unity></unity>
  </div>

  <game-detail
    game-title-cn="吃土"
    game-title-en="Into Soil"
    game-img-src="img/into-soil-title.webp"
    game-intro="'As big as a tree's canopy is, its root system is as big as it can be'.
                the roots of the tree crawl in the ground and grow to a resource-rich 
                place, and the tree will slowly grow."
    :game-features="gameFeatures"
    download="See Release in the code repository."
    :information="gameInfo"
  ></game-detail>
</template>

<script lang="ts" setup>
import Unity from "@/components/games/Unity.vue";
import GameDetail from "@/components/games/GameDetail.vue";
const gameFeatures = [
  "Collect resources and scores",
  "Use water and mine to grow your root",
  "Choose your path wisely",
];
const gameInfo = {
  genre: "Brain training",
  platform: "Windows, WebGL",
  lang: "Chinese, English",
  date: "Feb 5, 2023",
  session: "5 min",
  inputs: "Mouse",
  repo: "https://gitee.com/merak-team/ggj-2023",
  developers: [
    "Shawn Lou - Programming",
    "Megrez - Art, Music",
    "汪一二中 - Design",
    "Muzeee - Music, Sound",
    "抱羊羊 - Mascot",
  ],
};
</script>

<style scoped>
.play {
  margin-bottom: 3rem;
}
</style>
