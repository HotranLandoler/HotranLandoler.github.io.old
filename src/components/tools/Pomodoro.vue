<template>
  <section>
    <h2 class="heading-cn">番茄钟</h2>
    <h2 class="subheading-en">Pomodoro</h2>
    <div class="card pomodoro working">
      <span class="pomodoro-time">
        <span>{{ minutes }}</span>
        <span>:</span>
        <span>{{ seconds_text }}</span>
      </span>
      <button type="button" @click="start">Play</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

let timerId: number;
let working = true;
const workTime = [0, 10];
const restTime = [5, 0];
const minutes = ref(workTime[0]);
const seconds = ref(workTime[1]);

const seconds_text = computed(() =>
  seconds.value <= 9 ? `0${seconds.value}` : seconds.value.toString()
);

function start() {
  // if (window.Notification && Notification.permission !== "denied") {
  //   Notification.requestPermission();
  // }

  stop();
  // seconds.value = 0;
  timerId = setInterval(countdown, 1000);
}
function countdown() {
  seconds.value--;
  if (seconds.value < 0) {
    seconds.value = 60 + seconds.value;
    minutes.value--;
    if (minutes.value < 0) {
      minutes.value = 0;
      timeOut();
    }
  }
}
function stop() {
  if (timerId) {
    clearInterval(timerId);
  }
}
function timeOut() {
  working = !working;
  const pomodoro = document.querySelector(".pomodoro");
  pomodoro!.classList.toggle("working");
  if (working) {
    [minutes.value, seconds.value] = workTime;
  } else {
    [minutes.value, seconds.value] = restTime;
  }

  function notify() {
    const notification = new Notification("Pomodoro has ended.");
  }

  stop();
  // if (!("Notification" in window)) {
  //   // Check if the browser supports notifications
  //   alert("This browser does not support desktop notification");
  // } else if (Notification.permission === "granted") {
  //   // Check whether notification permissions have already been granted;
  //   // if so, create a notification
  //   notify();
  // } else if (Notification.permission !== "denied") {
  //   // We need to ask the user for permission
  //   Notification.requestPermission().then((permission) => {
  //     // If the user accepts, let's create a notification
  //     if (permission === "granted") {
  //       notify();
  //     }
  //   });
  // }
}
</script>

<style lang="scss" scoped>
$color-working: #ec7063;
$color-rest: #3498db;

.pomodoro {
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  font-size: 6rem;
  font-family: sans-serif;
  color: white;

  max-width: 32rem;
  padding: 1rem;

  background-color: $color-rest;
  transition: all 0.3s;

  &.working {
    background-color: $color-working;
  }
}
</style>
