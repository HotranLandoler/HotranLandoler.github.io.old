<script lang="ts" setup>
import { ref, reactive, computed } from "vue";
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

const barA = computed(() => players[0].hp / 100.0);
const barB = computed(() => players[1].hp / 100.0);

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
  <div id="game">
    <div class="health-area">
      <section id="monster" class="container">
        <input type="text" v-model="players[0].name" />
        <progress :value="barA"></progress>
      </section>
      <button @click="start" :disabled="fighting">Start</button>
      <section id="player" class="container">
        <input type="text" v-model="players[1].name" />
        <progress class="flipx" :value="barB"></progress>
      </section>
    </div>
    <section id="log" class="center">
      <h4>战斗记录</h4>
      <ul>
        <transition-group name="slide-fade" appear>
          <li v-for="log in logs" :key="log">{{ log }}</li>
        </transition-group>
      </ul>
    </section>
  </div>
</template>

<style scoped>
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

#log ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

#log li {
  margin: 0.5rem 0;
}

#log {
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

section {
  width: 40%;
}

progress {
  width: 100%;
  color: red;
}

input {
  width: 80%;
  border: 2px solid #8fc5e8;
  border-radius: 10px;
  outline-style: none;
  font-size: x-large;
  text-align: center;
}

input:hover {
  border: 2px solid #2696e0;
}

input:focus {
  border: 2px solid #006db5;
}

.center {
  margin: 0 auto;
}

.flipx {
  -moz-transform: scale(-1, 1);
  -webkit-transform: scale(-1, 1);
  -o-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  transform: scale(-1, 1);
}

.health-area {
  display: flex;
  align-items: center;
  justify-content: center;
}

.healthbar {
  width: 100%;
  height: 40px;
  border: 1px solid #575757;
  margin: 1rem 0;
  background: #fde5e5;
}

.healthbar__value {
  background-color: #00a876;
  width: 100%;
  height: 100%;
}

.container {
  text-align: center;
  padding: 0.5rem;
  margin: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
}

button {
  font: inherit;
  border: 1px solid #88005b;
  background-color: #88005b;
  color: white;
  padding: 1rem 1rem;
  border-radius: 12px;
  width: 10%;
  cursor: pointer;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

button:focus {
  outline: none;
}

button:hover,
button:active {
  background-color: #af0a78;
  border-color: #af0a78;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.26);
}

button:disabled {
  background-color: #ccc;
  border-color: #ccc;
  box-shadow: none;
  color: #3f3f3f;
  cursor: not-allowed;
}

.log--player {
  color: #7700ff;
}

.log--monster {
  color: #da8d00;
}

.log--damage {
  color: red;
}

.log--heal {
  color: green;
}
</style>
