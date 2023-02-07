<template>
  <game-detail
    game-title-cn="诡校奇谈"
    game-title-en="CQU Horror"
    game-img-src="img/cqu-horror-title.webp"
    game-intro="Years after graduating from CQU, Cheng You followed his hobby and became
        a private detective. One day, he receives an anonymous commission letter
        inviting him to return to his alma mater to investigate a mysterious
        case. And when Cheng You arrives at the once familiar place, he finds
        that everything that happens is beyond his imagination..."
    :game-features="gameFeatures"
    download="See Release in the code repository."
    :information="gameInfo"
  ></game-detail>
</template>

<script lang="ts" setup>
import GameDetail from "@/components/GameDetail.vue";
const gameFeatures = [
  "Find weapons to fight evil creatures and don't die!",
  "Collect supplies and try to survive!",
  "Explore and find out the truth behind...",
];
const gameInfo = {
  genre: "Shooter",
  platform: "Windows",
  lang: "Chinese",
  date: "Aug 20, 2021",
  session: "About 1 hour",
  inputs: "Keyboard & Mouse",
  repo: "https://github.com/HotranLandoler/CQU-Horror",
  developers: [
    "Shawn Lou - Pixel Art, Programming",
    "ZJX - Design",
    "Mr.haoren - Design",
    "HYW - Design",
  ],
};
</script>

<style scoped></style>
