<template>
  <section>
    <h2 class="heading-cn">决定了！</h2>
    <h2 class="subheading-en">Decide</h2>
    <div class="container decide">
      <fieldset class="field-set">
        <legend>Need a number</legend>

        <div class="random-number-box">
          <input
            type="number"
            class="random-number-input"
            v-model="numberFrom"
          />
          <p>to</p>
          <input type="number" class="random-number-input" v-model="numberTo" />
          <button
            type="button"
            class="button button-generate"
            title="Generate"
            @click="generateNumber"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              class="icon"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M448 341.37V170.61A32 32 0 0 0 432.11 143l-152-88.46a47.94 47.94 0 0 0-48.24 0L79.89 143A32 32 0 0 0 64 170.61v170.76A32 32 0 0 0 79.89 369l152 88.46a48 48 0 0 0 48.24 0l152-88.46A32 32 0 0 0 448 341.37z"
              ></path>
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M69 153.99l187 110l187-110"
              ></path>
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M256 463.99v-200"
              ></path>
              <ellipse
                cx="256"
                cy="152"
                rx="24"
                ry="16"
                fill="currentColor"
              ></ellipse>
              <ellipse
                cx="208"
                cy="296"
                rx="16"
                ry="24"
                fill="currentColor"
              ></ellipse>
              <ellipse
                cx="112"
                cy="328"
                rx="16"
                ry="24"
                fill="currentColor"
              ></ellipse>
              <ellipse
                cx="304"
                cy="296"
                rx="16"
                ry="24"
                fill="currentColor"
              ></ellipse>
              <ellipse
                cx="400"
                cy="240"
                rx="16"
                ry="24"
                fill="currentColor"
              ></ellipse>
              <ellipse
                cx="304"
                cy="384"
                rx="16"
                ry="24"
                fill="currentColor"
              ></ellipse>
              <ellipse
                cx="400"
                cy="328"
                rx="16"
                ry="24"
                fill="currentColor"
              ></ellipse>
            </svg>
          </button>
          <p class="random-number-output">{{ numberOutput }}</p>
        </div>
        <div class="need-int-box">
          <input
            type="checkbox"
            id="need-int"
            name="need-int"
            v-model="needInt"
          />
          <label for="need-int">Need a Integer</label>
        </div>
      </fieldset>

      <fieldset class="field-set">
        <legend>Help me decide</legend>
        <div class="decide-box">
          <p class="decide-output">Enter options below</p>
          <button type="button" class="button">Decide!</button>
          <div class="decide-input-box">
            <input type="text" placeholder="Your option" />
            <button type="button" class="button">Add</button>
            <button type="button" class="button">Clear</button>
          </div>

          <ul class="options-list">
            <li>sb</li>
            <li>sb</li>
            <li>sb</li>
          </ul>
        </div>
      </fieldset>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const numberFrom = ref(1);
const numberTo = ref(6);
const numberOutput = ref("0");
const needInt = ref(true);

function generateNumber() {
  const result =
    Math.random() * (numberTo.value - numberFrom.value) + numberFrom.value;
  numberOutput.value = needInt.value ? result.toFixed(0) : result.toFixed(4);
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/globalMixin.scss";

.decide {
  max-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.field-set {
  border: 2px solid $color-primary;
  border-radius: 5px;
  padding: 1rem;
}
.random-number-box {
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.random-number-input {
  @include focus-outline;
  width: 100%;
  height: 100%;
  display: block;
  font-size: 1.5rem;
  font-family: inherit;
  background-color: white;
  border: 2px solid $color-gray-x-light;
  border-radius: 0.3rem;
  padding: 0.5rem;
  transition: all 0.2s;

  &:hover,
  &:active {
    border: 2px solid $color-primary-light;
  }
}
.random-number-output {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  overflow: hidden;
  white-space: nowrap;
}
.button-generate {
  @include focus-outline;
  display: block;
  padding: 0.5rem;
  border: 0.2rem solid transparent;
  border-radius: 0.3rem;
  background-color: transparent;

  transition: all 0.2s ease;

  &:hover {
    border: 0.2rem solid $color-primary-light;
  }

  .icon {
    width: 2rem;
    height: 2rem;
    color: $color-primary;
  }
}
.need-int-box {
  display: flex;
  gap: 0.5rem;
}
.decide-box {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.decide-output {
  text-align: center;
}
.decide-input-box {
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 1rem;
}

@media (max-width: 30em) {
  .random-number-box {
    grid-template-columns: 1fr auto 1fr auto;
  }
  .random-number-output {
    grid-column: span 4;
  }
}
</style>
