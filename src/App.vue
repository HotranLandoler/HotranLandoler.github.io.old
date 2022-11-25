<script>
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

function getRandomElement(array) {
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
      logs: [],
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
          this.result = "未分胜负";
          break;
        }
        await delay(1000);
      }

      this.winner = this.HPs[0] > 0 ? this.names[0] : this.names[1];
      this.logs.unshift(`${this.winner}取得了胜利！`);
      this.fighting = false;
    },
    attack(rounder) {
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
      const damage = Math.floor(attackBases[index] * mods[modIndex]);
      this.HPs[1 - rounder] -= damage;
      this.logs.unshift(
        `${who}使用了${modifier}的【${attack}】，造成了${damage}点伤害！`
      );
    },
  },
};
</script>

<template>
  <header>
    <h1>Names Fight</h1>
    <span>输入姓名，开始对战！</span>
  </header>
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

<style></style>
