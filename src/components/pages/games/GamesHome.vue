<template>
  <section>
    <h2 class="page-heading">Games</h2>
    <div class="container games-list">
      <game-item
        img-src="/img/cqu-horror.webp"
        title="CQU-Horror"
        desc="Try to survive and find out the truth..."
        linkto="#"
      />
      <game-item
        img-src="/img/coin-era.webp"
        title="Coin Era"
        desc="Play with your friend"
        linkto="#"
      />
      <game-item
        img-src="/img/into-soil.webp"
        title="Into Soil"
        desc="Place your root into the soil..."
        linkto="game/intosoil"
        can-play
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import GameItem from "../../GameItem.vue";
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
