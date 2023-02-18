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
      <button
        class="button play-pause-button"
        type="button"
        @click="start"
        aria-label="Play or Pause"
      >
        <div class="icon"></div>
      </button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

let timerId: number | null = null;
let working = true;
const workTime = [0, 10];
const restTime = [5, 0];
const minutes = ref(workTime[0]);
const seconds = ref(workTime[1]);

const seconds_text = computed(() =>
  seconds.value <= 9 ? `0${seconds.value}` : seconds.value.toString()
);

function start() {
  const button = document.querySelector(".play-pause-button");
  if (timerId) {
    stop();
  } else {
    timerId = setInterval(countdown, 1000);
  }
  button!.classList.toggle("pause");
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
    timerId = null;
  }
}
function timeOut() {
  const pomodoro = document.querySelector(".pomodoro");
  const button = document.querySelector(".play-pause-button");

  working = !working;
  pomodoro!.classList.toggle("working");
  button!.classList.toggle("pause");
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
.play-pause-button {
  $size: 48px;
  $size-half: calc($size / 2);

  background-color: transparent;

  .icon {
    height: $size;
    border: {
      style: solid;
      width: $size-half 0 $size-half $size;
      color: transparent transparent transparent white;
    }
    transition: all 0.2s;

    &:hover {
      border-color: transparent transparent transparent $color-gray-x-light;
    }
  }
  &.pause .icon {
    border: {
      style: double;
      width: 0 0 0 $size;
    }
  }
}
</style>
