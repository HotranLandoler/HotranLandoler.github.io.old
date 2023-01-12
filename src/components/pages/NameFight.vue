<script lang="ts">
const modifiers = ["柔弱", "普通", "强力的", "威力惊人"];
const mods = [0.5, 1.0, 2.0, 3.0];
const special_actions = ["Idle", "Heal", "咬", "天谴"];
const heals = ["思考了生命的意义", "喝了一杯奶茶", "喝下了神秘药水"];
const attackTypes = [
  "喵喵拳",
  "嘲讽",
  "火球术",
  "元气弹",
  "咸鱼冲刺",
  "重拳出击",
];
const attackBases = [0, 2, 6, 8, 10, 12];
const healRange = [1, 20];

console.assert(
  attackTypes.length === attackBases.length,
  "Array length not equal!"
);

function getRandomElement<T>(array: T[]) {
  const index = Math.floor(Math.random() * array.length);
  return [array[index], index];
}
// function randomAttack() {}

const delay = async (ms = 1000) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export default {
  data() {
    return {
      names: ["玩家A", "玩家B"],
      HPs: [100, 100],
      logs: [] as string[],
      fighting: false,
      winner: "",
    };
  },
  computed: {
    barA() {
      return this.HPs[0] / 100.0;
    },
    barB() {
      return this.HPs[1] / 100.0;
    },
  },
  methods: {
    start() {
      this.HPs = [100, 100];
      this.logs = [];
      this.winner = "";
      this.fighting = true;
      this.attackLoop();
    },
    async attackLoop() {
      let rounder = 0;
      let roundCount = 0;

      while (this.HPs[0] > 0 && this.HPs[1] > 0) {
        this.attack(rounder);
        rounder = 1 - rounder;
        roundCount++;
        if (roundCount > 50) {
          console.error("Too many rounds! There may be some errors.");
          // this.result = "未分胜负";
          break;
        }
        await delay(1000);
      }

      this.winner = this.HPs[0] > 0 ? this.names[0] : this.names[1];
      this.logs.unshift(`${this.winner}取得了胜利！`);
      this.fighting = false;
    },
    attack(rounder: number) {
      const who = this.names[rounder];
      const to = this.names[1 - rounder];

      //动作类型
      if (Math.random() > 0.8) {
        //特殊动作
        const [special, _] = getRandomElement(special_actions);
        if (special === "Idle") this.logs.unshift(`${who}开始怀疑人生。`);
        if (special === "Heal") {
          const [heal, _] = getRandomElement(heals);
          const healNum = Math.floor(
            Math.random() * (healRange[1] - healRange[0]) + healRange[0]
          );
          this.HPs[rounder] += healNum;
          this.logs.unshift(`${who}${heal}, 恢复了${healNum}点生命！`);
        }
        if (special === "咬") {
          this.HPs[1 - rounder] -= 1;
          this.logs.unshift(`${who}咬了${to}一口，造成1点真实伤害！`);
        }
        if (special === "天谴") {
          this.HPs[rounder] = this.HPs[rounder] * 0.5;
          this.logs.unshift(`${who}遭到了天谴，生命值减半！`);
        }
        return;
      }

      //攻击类型
      const index = Math.floor(Math.random() * attackTypes.length);
      const attack = attackTypes[index];

      const hit = Math.random() <= 0.9;
      if (hit == false) {
        this.logs.unshift(`${who}使用了【${attack}】, 但是被${to}闪躲了！`);
        return;
      }

      const [modifier, modIndex] = getRandomElement(modifiers);
      const damage = Math.floor(attackBases[index] * mods[modIndex as number]);
      this.HPs[1 - rounder] -= damage;
      this.logs.unshift(
        `${who}使用了${modifier}的【${attack}】，造成了${damage}点伤害！`
      );
    },
  },
};
</script>

<template>
  <div id="game">
    <div class="health-area">
      <section id="monster" class="container">
        <input type="text" v-model="names[0]" />
        <progress :value="barA"></progress>
      </section>
      <button @click="start" :disabled="fighting">Start</button>
      <section id="player" class="container">
        <input type="text" v-model="names[1]" />
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
