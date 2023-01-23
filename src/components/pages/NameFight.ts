import type { Ref } from "vue";
import { getRandomElement, delay } from "../../utils";
import { nameFightData as data } from "../../data";

interface Player {
  name: string;
  hp: number;
}

export async function gameLoop(players: Player[], logs: Ref<string[]>) {
  let rounder = 0;
  let roundCount = 0;

  while (players[0].hp > 0 && players[1].hp > 0) {
    attack(players, rounder, logs);
    rounder = 1 - rounder;
    roundCount++;
    if (roundCount > 100) {
      console.error("Too many rounds! There may be some errors.");
      break;
    }
    await delay(1000);
  }

  const winner = players[0].hp > 0 ? players[0].name : players[1].name;
  logs.value.unshift(`${winner}取得了胜利！`);
  //   fighting.value = false;
  return;
}

function attack(players: Player[], rounder: number, logs: Ref<string[]>) {
  const who = players[rounder].name;
  const to = players[1 - rounder].name;

  //动作类型
  if (Math.random() > 0.8) {
    //特殊动作
    const [special, _] = getRandomElement(data.special_actions);
    if (special === "Idle") logs.value.unshift(`${who}开始怀疑人生。`);
    if (special === "Heal") {
      const [heal, _] = getRandomElement(data.heals);
      const healNum = Math.floor(
        Math.random() * (data.healRange[1] - data.healRange[0]) +
          data.healRange[0]
      );
      players[rounder].hp += healNum;
      logs.value.unshift(`${who}${heal}, 恢复了${healNum}点生命！`);
    }
    if (special === "咬") {
      players[1 - rounder].hp -= 1;
      logs.value.unshift(`${who}咬了${to}一口，造成1点真实伤害！`);
    }
    if (special === "天谴") {
      players[rounder].hp *= 0.5;
      logs.value.unshift(`${who}遭到了天谴，生命值减半！`);
    }
    return;
  }
  //攻击类型
  const index = Math.floor(Math.random() * data.attackTypes.length);
  const attack = data.attackTypes[index];

  const hit = Math.random() <= 0.9;
  if (hit == false) {
    logs.value.unshift(`${who}使用了【${attack}】, 但是被${to}闪躲了！`);
    return;
  }

  const [modifier, modIndex] = getRandomElement(data.modifiers);
  const damage = Math.floor(data.attackBases[index] * data.mods[modIndex]);
  players[1 - rounder].hp -= damage;
  logs.value.unshift(
    `${who}使用了${modifier}的【${attack}】，造成了${damage}点伤害！`
  );
}
