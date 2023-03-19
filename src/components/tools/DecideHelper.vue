<template>
  <section>
    <h2 class="heading-cn">决定了！</h2>
    <h2 class="subheading-en">Decide</h2>
    <div class="container decide">
      <fieldset class="field-set">
        <legend>{{ $t("decide.random-number") }}</legend>

        <div class="random-number-box">
          <input
            type="number"
            class="input-outlined random-number-input"
            v-model="numberFrom"
          />
          <p class="to">~</p>
          <input
            type="number"
            class="input-outlined random-number-input"
            v-model="numberTo"
          />
          <button
            type="button"
            class="button-iconed"
            :title="$t('decide.make-number')"
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
          <label for="need-int">{{ $t("decide.need-int") }}</label>
        </div>
      </fieldset>

      <fieldset class="field-set">
        <legend>{{ $t("decide.help-decide") }}</legend>
        <div class="decide-box">
          <p class="decide-output" v-if="showDecideResult">
            {{ decideResult }}
          </p>
          <p class="decide-output-placeholder" v-else>
            {{ $t("decide.no-result") }}
          </p>
          <button
            type="button"
            class="button-primary button-decide"
            @click="decide"
            :disabled="decideDisabled"
          >
            {{ $t("decide.make-decide") }}
          </button>
          <div class="decide-input-box">
            <input
              type="text"
              class="input-outlined"
              :placeholder="$t('decide.option')"
              v-model="optionInput"
            />
            <button
              type="button"
              class="button-iconed"
              :title="$t('add')"
              @click="addOption"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                class="icon"
              >
                <path
                  d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="32"
                ></path>
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M256 176v160"
                ></path>
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M336 256H176"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              class="button-iconed"
              :title="$t('clear')"
              @click="clearOptions"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                class="icon"
              >
                <path
                  d="M289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>

          <ul class="options-list">
            <transition-group name="slide-fade" appear>
              <li v-for="option in options" :key="option">
                <p>{{ option }}</p>
              </li>
            </transition-group>
          </ul>
        </div>
      </fieldset>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { getRandomElement } from "@/utils";
import { computed, ref } from "vue";

const numberFrom = ref(1);
const numberTo = ref(6);
const numberOutput = ref("0");
const needInt = ref(true);

const optionInput = ref("");
const decideResult = ref("");
const options = ref([] as string[]);

const decideDisabled = computed(() => options.value.length == 0);
const showDecideResult = computed(() => decideResult.value != "");

function generateNumber() {
  const result =
    Math.random() * (numberTo.value - numberFrom.value) + numberFrom.value;
  numberOutput.value = needInt.value ? result.toFixed(0) : result.toFixed(4);
}

function addOption() {
  if (optionInput.value === "") {
    return;
  }
  options.value.unshift(optionInput.value);
  optionInput.value = "";
}

function clearOptions() {
  options.value = [];
}

function decide() {
  if (options.value.length == 0) {
    return;
  }
  const [result, _] = getRandomElement(options.value);
  decideResult.value = result;
}
</script>

<style lang="scss" scoped>
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
  font-size: 1.5rem;
}
.random-number-output {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  overflow: hidden;
  white-space: nowrap;
}
.to {
  font-size: 2.5rem;
  font-weight: 700;
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
.decide-output,
.decide-output-placeholder {
  text-align: center;
  margin-bottom: 1rem;
}
.decide-output-placeholder {
  color: $color-gray-light;
}
.decide-input-box {
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 0.5rem;
}
.button-decide {
  align-self: center;
  width: 60%;
}
.options-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

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

@media (max-width: 30em) {
  .random-number-box {
    grid-template-columns: 1fr auto 1fr auto;
  }
  .random-number-output {
    grid-column: span 4;
  }
  .button-decide {
    width: 100%;
  }
}
</style>
