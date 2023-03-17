<template>
  <section>
    <h2 class="page-heading">{{ $t("games") }}</h2>
    <div class="container games-list">
      <game-item
        img-src="/img/cqu-horror.webp"
        game="cqu-horror"
        linkto="game/cquhorror"
      />
      <game-item
        img-src="/img/coin-era.webp"
        game="coin-era"
        linkto="game/coinera"
      />
      <game-item
        img-src="/img/into-soil.webp"
        game="into-soil"
        linkto="game/intosoil"
        can-play
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import GameItem from "./GameItem.vue";
</script>

<style scoped>
.games-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

@media (max-width: 48em) {
  .games-list {
    display: flex;
    flex-direction: column;
    max-width: 24rem;
  }
}
</style>
