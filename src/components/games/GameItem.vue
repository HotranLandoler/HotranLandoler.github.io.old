<template>
  <router-link :to="linkto">
    <div class="game-card">
      <div class="image">
        <img :src="imgSrc" alt="Game image" />
      </div>
      <div class="info">
        <div class="title">
          <p class="game-title">{{ $t(`${props.game}.title`) }}</p>
          <div class="play-now" v-if="canPlay">{{ $t("play-now") }}</div>
        </div>
        <p class="game-desc">{{ $t(`${props.game}.desc`) }}</p>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts" setup>
const props = defineProps({
  imgSrc: { type: String, required: true },
  game: { type: String, required: true },
  linkto: { type: String, required: true },
  canPlay: { type: Boolean },
});
</script>

<style scoped>
a:link,
a:visited {
  text-decoration: none;
  color: #333;
}
img {
  display: block;
  width: 100%;
  /* transition: transform 0.2s; */
}

.game-card {
  height: 100%;
  box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.3s;
}
.game-card:hover,
.game-card:active {
  transform: translateY(-0.5rem);
  box-shadow: 0 0.6rem 1.5rem rgba(0, 0, 0, 0.15);
}
.image {
  overflow: hidden;
}
.info {
  padding: 0.7rem 0.8rem 0.8rem 0.8rem;
  position: relative;
}
.title {
  /* display: flex;
  gap: 2rem; */
  margin-bottom: 0.3rem;
}
.game-title {
  font-size: 1.2rem;
  font-weight: 700;
}
.game-desc {
  color: #777;
}
.play-now {
  font-size: 0.8rem;
  border-radius: 100px;
  background-color: lightcoral;
  color: white;
  padding: 0.2rem 0.8rem;

  position: absolute;
  top: 0.7rem;
  right: 0.8rem;
}
</style>
