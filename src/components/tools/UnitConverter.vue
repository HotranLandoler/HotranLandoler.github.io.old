<template>
  <section>
    <h2 class="heading-cn">单位转换器</h2>
    <h2 class="subheading-en">Unit Converter</h2>
    <div class="container unit-converter">
      <div class="unit-types">
        <div class="radio-button">
          <input
            type="radio"
            id="length"
            name="drone"
            value="Length"
            v-model="selectedUnit"
            class="radio"
          />
          <label for="length" class="label">Length</label>
        </div>
        <div>
          <input
            type="radio"
            id="weight"
            name="drone"
            value="Weight"
            v-model="selectedUnit"
            class="radio"
          />
          <label for="weight" class="label">Weight</label>
        </div>
      </div>
      <p class="from">
        <span class="from-value">{{ input }}</span>
        <span>&nbsp;</span>
        <span class="from-unit">{{ selectedFrom }}</span>
        <span> = </span>
      </p>
      <p class="to">
        <span class="to-value">{{ result }}</span>
        <span>&nbsp;</span>
        <span class="to-unit">{{ selectedTo }}</span>
      </p>
      <label for="amount-input">Amount</label>
      <input
        id="amount-input"
        class="input-outlined"
        type="number"
        v-model="input"
      />
      <div class="selects">
        <!-- <label for="from-select">From</label> -->
        <select id="from-select" class="input-outlined" v-model="selectedFrom">
          <option v-for="unit in unitList">{{ unit }}</option>
        </select>
        <button
          type="button"
          class="button-iconed"
          title="Swap"
          @click="swapFromTo"
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
              d="M304 48l112 112l-112 112"
            ></path>
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
              d="M398.87 160H96"
            ></path>
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
              d="M208 464L96 352l112-112"
            ></path>
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
              d="M114 352h302"
            ></path>
          </svg>
        </button>
        <!-- <label for="to-select">To</label> -->
        <select id="to-select" class="input-outlined" v-model="selectedTo">
          <option v-for="unit in unitList">{{ unit }}</option>
        </select>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import { conversions } from "@/data/dataUnitConverter";

const units = new Map([
  ["Length", ["Meter", "Inch", "Foot", "Mile", "Yard"]],
  ["Weight", ["Kilogram", "Pound"]],
]);

const selectedUnit = ref("Length");
const unitList = computed(() => units.get(selectedUnit.value));
const selectedFrom = ref("");
const selectedTo = ref("");
const input = ref(1);
const result = computed(() => {
  if (!input.value || input.value === 0) return 0;
  if (selectedFrom.value === selectedTo.value) return 1;
  return (
    input.value * conversions.get(selectedFrom.value)!.get(selectedTo.value)!
  ).toFixed(6);
});
resetFromTo(unitList.value!);

watch(selectedUnit, async (newUnit: string, oldUnit: string) => {
  if (newUnit !== oldUnit) {
    resetFromTo(unitList.value!);
  }
});

function resetFromTo(unitList: string[]) {
  selectedFrom.value = unitList[0];
  selectedTo.value = unitList[1];
}
function swapFromTo() {
  [selectedFrom.value, selectedTo.value] = [
    selectedTo.value,
    selectedFrom.value,
  ];
}
</script>

<style lang="scss" scoped>
.unit-converter {
  max-width: 32rem;
  font-size: 1.5rem;
}
#amount-input,
#from-select,
#to-select {
}
.from {
  font-size: 2rem;
}
.to {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
#amount-input {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.unit-types {
  display: flex;
  justify-content: center;
  // gap: 1rem;
  margin-bottom: 2rem;
}
.label {
  display: block;
  padding: 0.5rem 1.5rem;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    box-shadow: inset 0 0 0 0.1rem $color-primary-light;
  }

  &::before {
    content: "";
    background-color: $color-primary;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    transform: scaleY(0);
    transform-origin: bottom;
    transition: all 0.2s ease-out;
  }
}
.radio {
  display: none;
  &:checked {
    + .label {
      color: white;

      &::before {
        transform: scaleY(1);
      }
    }
  }
}
.selects {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 0.5rem;
}
.button-swap {
}
</style>
