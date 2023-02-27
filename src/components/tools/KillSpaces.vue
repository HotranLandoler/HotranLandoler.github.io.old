<template>
  <h2 class="heading-cn">消除空格</h2>
  <h2 class="subheading-en">Kill Spaces</h2>
  <div class="container kill-spaces">
    <textarea
      class="text-input"
      v-model="input"
      placeholder="Input text"
      autofocus
    ></textarea>
    <button
      type="button"
      class="button button-kill-spaces center"
      @click="deleteAllSpaces"
    >
      Kill'em All!
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const input = ref("");
function deleteAllSpaces() {
  if (input.value === "") {
    alert("Nothing to kill.");
    return;
  }
  input.value = input.value.replace(/\ /g, "");

  // Copy to clipboard
  navigator.clipboard.writeText(input.value);
}
</script>

<style lang="scss" scoped>
.kill-spaces {
  max-width: 48rem;
}
.text-input {
  width: 100%;
  height: 40vh;

  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  padding: 1rem;
}
.button-kill-spaces {
  display: block;
  font-size: 2rem;
  padding: 1rem 2rem;
  border-radius: 99px;

  background-color: $color-primary;
  color: white;
  transition: all 0.2s;

  &:hover,
  &:active {
    background-color: $color-primary-light;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
}
</style>
