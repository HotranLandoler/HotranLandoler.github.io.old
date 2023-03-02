<template>
  <h2 class="heading-cn">消除空格</h2>
  <h2 class="subheading-en">Kill Spaces</h2>
  <div class="container kill-spaces">
    <textarea
      class="text-input"
      v-model="input"
      placeholder="Input text"
      resia
      autofocus
    >
    </textarea>
    <div class="kill-br">
      <input
        type="checkbox"
        id="kill-line-breaks"
        name="kill-line-breaks"
        v-model="killLineBreaks"
      />
      <label for="kill-line-breaks">Kill line breaks</label>
    </div>
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
const killLineBreaks = ref(true);
function deleteAllSpaces() {
  if (input.value === "") {
    alert("Nothing to kill.");
    return;
  }

  input.value = input.value.replace(/\ /g, "");
  if (killLineBreaks.value) {
    input.value = input.value.replace(/(\r\n|\n|\r)/gm, "");
  }

  // Copy to clipboard
  navigator.clipboard.writeText(input.value);
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/globalMixin.scss";
.kill-spaces {
  max-width: 48rem;
}
.text-input {
  @include focus-outline;
  display: block;
  width: 100%;
  height: 30vh;
  resize: none;

  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  padding: 1rem;
}
.button-kill-spaces {
  display: block;
  font-size: 1.5rem;
  padding: 1rem 1.5rem;
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
.kill-br {
  margin-bottom: 1rem;

  display: flex;
  justify-content: center;
  gap: 1rem;
}
</style>
