<template>
  <section>
    <h2 class="heading-cn">番茄钟</h2>
    <h2 class="subheading-en">Pomodoro</h2>
    <div class="container">
      <div class="card pomodoro working">
        <span class="pomodoro-time">
          <span>{{ minutes }}</span>
          <span>:</span>
          <span>{{ seconds_text }}</span>
        </span>
        <div class="buttons">
          <button
            class="button play-pause-button"
            type="button"
            @click="start"
            title="Play / Pause"
          >
            <div class="icon"></div>
          </button>
          <button
            class="button end-button"
            type="button"
            @click="timeOut"
            title="End"
            :disabled="timerId === null"
          >
            <div class="icon"></div>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

let timerId: number | null = null;
let working = true;
const workTime = [25, 0];
const restTime = [5, 0];
const minutes = ref(workTime[0]);
const seconds = ref(workTime[1]);

const seconds_text = computed(() =>
  seconds.value <= 9 ? `0${seconds.value}` : seconds.value.toString()
);

function start() {
  const pomodoro = document.querySelector(".pomodoro");
  pomodoro!.classList.toggle("running");
  if (timerId) {
    stop();
  } else {
    checkNotification();
    // Start immediately
    timerId = setInterval(countdown(), 1000);
  }
}

function checkNotification() {
  if (window.Notification && Notification.permission === "default") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        const _ = new Notification("Pomodoro started.");
      }
    });
  }
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
  return countdown;
}

function stop() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
}

function timeOut() {
  const pomodoro = document.querySelector(".pomodoro");

  working = !working;
  pomodoro!.classList.toggle("working");
  pomodoro!.classList.toggle("running");
  if (working) {
    [minutes.value, seconds.value] = workTime;
  } else {
    [minutes.value, seconds.value] = restTime;
  }

  function notify() {
    if (window.Notification && Notification.permission === "granted") {
      const _ = new Notification("Pomodoro ended.");
    }
  }

  stop();
  notify();
}
</script>

<style lang="scss" scoped>
$icon-size: 48px;
$icon-size-half: calc($icon-size / 2);
$color-working: #ec7063;
$color-rest: #3498db;

.pomodoro {
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  font-size: 6rem;
  font-family: "Courier New", Courier, monospace;
  color: white;

  max-width: 32rem;
  padding: 1rem;

  background-color: $color-rest;
  transition: all 0.3s;

  &.working {
    background-color: $color-working;
  }
  &.running .play-pause-button .icon {
    border: {
      style: double;
      width: 0 0 0 $icon-size;
    }
  }
}
.play-pause-button {
  background-color: transparent;

  .icon {
    height: $icon-size;
    border: {
      style: solid;
      width: $icon-size-half 0 $icon-size-half $icon-size;
      color: transparent transparent transparent white;
    }
    transition: all 0.2s;

    &:hover {
      border-color: transparent transparent transparent $color-gray-x-light;
    }
  }
}
.buttons {
  display: flex;
  justify-content: center;
  gap: 3rem;
}
.end-button {
  background-color: transparent;
  transition: all 0.3s;

  .icon {
    background-color: white;
    width: 32px;
    height: 32px;
  }
  &:disabled {
    opacity: 0.5;
    cursor: auto;
  }
}

@media (max-width: 30em) {
  .pomodoro {
    font-size: 5rem;
  }
}
</style>
