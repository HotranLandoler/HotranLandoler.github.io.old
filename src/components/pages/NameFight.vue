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
    <h2 class="heading-cn">姓名大战</h2>
    <h2 class="subheading-en margin-bottom-l">Names Fight</h2>
    <div class="container">
      <div class="health-area card">
        <fighter
          class="fighter"
          v-model="players[0].name"
          :hp="players[0].hp"
        />
        <button class="start-button" @click="start" :disabled="fighting">
          Start
        </button>
        <fighter
          class="fighter"
          v-model="players[1].name"
          :hp="players[1].hp"
          flip
        />
      </div>
      <div class="log card">
        <p class="log-title">战斗记录</p>
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
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.log {
  margin: 0 auto;
  max-width: 40rem;
  padding: 0.5rem;
}

.log-title {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.health-area {
  margin-bottom: 1rem;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  column-gap: 1rem;
}

.card {
  padding: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
}

.start-button {
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: 500;
  border: none;
  background-color: #88005b;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
  transition: all 0.2s;
}

.start-button:focus {
  outline: none;
  box-shadow: 0 0 0 0.5rem #fab4f6b3;
}

.start-button:hover,
.start-button:active {
  background-color: #af0a78;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.26);
}

.start-button:disabled {
  color: #fff;
  background-color: #ccc;
  border-color: #ccc;
  box-shadow: none;
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
}
</style>
