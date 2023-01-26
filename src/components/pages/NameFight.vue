<script lang="ts" setup>
import { ref, reactive } from "vue";
import Fighter from "../Fighter.vue";
import { gameLoop } from "./NameFight";

const players = reactive([
  {
    name: "玩家A",
    hp: 100,
  },
  {
    name: "玩家B",
    hp: 100,
  },
]);
const logs = ref<string[]>([]);
const fighting = ref(false);

// const barA = computed(() => players[0].hp / 100.0);
// const barB = computed(() => players[1].hp / 100.0);

async function start() {
  for (const player of players) {
    player.hp = 100;
  }
  logs.value = [];
  fighting.value = true;
  await gameLoop(players, logs);
  fighting.value = false;
}
</script>

<template>
  <section class="game">
    <h2>姓名大战</h2>
    <div class="container">
      <div class="health-area card">
        <fighter class="fighter" :name="players[0].name" :hp="players[0].hp" />
        <!-- <section id="monster" class="container">
        <input type="text" v-model="players[0].name" />
        <progress :value="barA"></progress>
      </section> -->
        <button class="start-button" @click="start" :disabled="fighting">
          Start
        </button>
        <fighter class="fighter" :name="players[1].name" :hp="players[1].hp" />
        <!-- <section id="player" class="container">
        <input type="text" v-model="players[1].name" />
        <progress class="flipx" :value="barB"></progress>
      </section> -->
      </div>
      <div class="log">
        <h4>战斗记录</h4>
        <ul>
          <transition-group name="slide-fade" appear>
            <li v-for="log in logs" :key="log">{{ log }}</li>
          </transition-group>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
  position: absolute;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.slide-fade-move {
  transition: transform 0.3s ease;
}

.game {
  width: 100%;
  padding: 0 1rem;
  text-align: center;
}

.log ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.log li {
  margin: 0.5rem 0;
}

.log {
  margin: 0 auto;
  width: 70%;
  text-align: center;
  padding: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0.5rem;
  background-color: #880017;
  color: white;
  text-align: center;
  margin-bottom: 2rem;
}

.flipx {
  -moz-transform: scale(-1, 1);
  -webkit-transform: scale(-1, 1);
  -o-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  transform: scale(-1, 1);
}

.health-area {
  margin-bottom: 1rem;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  column-gap: 1rem;
}

.container {
  margin: 0 auto 1rem auto;
  max-width: 60rem;
}

.card {
  padding: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
}

.start-button {
  font: inherit;
  border: 1px solid #88005b;
  background-color: #88005b;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  /* width: 10%; */
  cursor: pointer;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

.start-button:focus {
  outline: none;
}

.start-button:hover,
.start-button:active {
  background-color: #af0a78;
  border-color: #af0a78;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.26);
}

.start-button:disabled {
  background-color: #ccc;
  border-color: #ccc;
  box-shadow: none;
  color: #3f3f3f;
  cursor: not-allowed;
}

/* Mobile */
@media (max-width: 30em) {
  .health-area {
    grid-template-columns: repeat(6, 1fr);
  }
  .fighter {
    grid-column: span 3;
  }
  .start-button {
    grid-row: 2;
    grid-column: 3 / 5;
  }
  .log {
    width: 100%;
  }
}
</style>
