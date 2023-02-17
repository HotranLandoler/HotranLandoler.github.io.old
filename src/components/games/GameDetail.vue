<template>
  <section>
    <h2 class="page-heading game-title">{{ gameTitleCn }}</h2>
    <h2 class="subheading game-title-en">{{ gameTitleEn }}</h2>
    <div class="container game-info">
      <div class="game-img">
        <img :src="gameImgSrc" alt="Image of the game" />
      </div>
      <p class="game-intro">
        {{ gameIntro }}
      </p>
      <ul class="game-features">
        <li v-for="feature in gameFeatures">{{ feature }}</li>
      </ul>
      <section class="game-section">
        <h3 class="section-title">Download</h3>
        <p>{{ download }}</p>
      </section>
      <section class="game-section">
        <h3 class="section-title">Information</h3>
        <div class="info-grid">
          <p class="table-heading">Genre</p>
          <p>{{ information.genre }}</p>
          <p class="table-heading">Platform</p>
          <p>{{ information.platform }}</p>
          <p class="table-heading">Language</p>
          <p>{{ information.lang }}</p>
          <p class="table-heading">Release Date</p>
          <p>{{ information.date }}</p>
          <p class="table-heading">Average session</p>
          <p>{{ information.session }}</p>
          <p class="table-heading">Inputs</p>
          <p>{{ information.inputs }}</p>
          <p class="table-heading">Source</p>
          <p>
            <a :href="information.repo">Code Repo</a>
          </p>
          <p class="table-heading">Developers</p>
          <div>
            <p v-for="developer in information.developers">{{ developer }}</p>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script lang="ts" setup>
interface GameInfo {
  genre: string;
  platform: string;
  lang: string;
  date: string;
  session: string;
  inputs: string;
  repo: string;
  developers: string[];
}
const props = defineProps<{
  gameTitleCn: string;
  gameTitleEn: string;
  gameImgSrc: string;
  gameIntro: string;
  gameFeatures: string[];
  download: string;
  information: {
    genre: string;
    platform: string;
    lang: string;
    date: string;
    session: string;
    inputs: string;
    repo: string;
    developers: string[];
  };
}>();
</script>

<style scoped>
a:link,
a:visited {
  color: #15aabf;
  transition: color 0.2s;
}
a:hover,
a:active {
  color: #0c8599;
}
p {
  line-height: 1.6;
}
.game-title {
  margin-bottom: 0.5rem;
}
.game-title-en {
  margin-bottom: 2rem;
}
.game-info {
  max-width: 40rem;
}
.game-img img {
  display: block;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 2rem;
}
.game-intro {
  margin-bottom: 2rem;
  text-align: center;
}
.game-features {
  padding-left: 2rem;
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.game-section {
  margin-bottom: 2.5rem;
}
.section-title {
  margin-bottom: 1rem;
  color: #22b8cf;
}
.info-grid {
  /* box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1); */

  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1rem;
}
.table-heading {
  font-weight: 700;
  text-align: right;
}
</style>
