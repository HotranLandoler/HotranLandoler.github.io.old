<template>
  <section>
    <h2 class="heading-cn">进制转换器</h2>
    <h2 class="subheading-en">Unit Converter</h2>
    <div class="container unit-converter">
      <p class="from">
        <span class="from-value">1</span>
        <span>&nbsp;</span>
        <span class="from-unit">inch</span>
        <span> = </span>
      </p>
      <p class="to">
        <span class="to-value">2.54</span>
        <span>&nbsp;</span>
        <span class="to-unit">cm</span>
      </p>
      <select class="unit-type-select" v-model="selectedUnit">
        <option value="Length">Length</option>
        <option value="Weight">Weight</option>
      </select>
      <label for="amount-input">Amount</label>
      <input id="amount-input" type="number" />
      <label for="from-select">From</label>
      <select id="from-select">
        <option v-for="unit in unitList">{{ unit }}</option>
      </select>
      <label for="to-select">To</label>
      <select id="to-select">
        <option value="length">Length</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";

const units = new Map([
  ["Length", ["Meter", "Inch", "Mile", "Yard"]],
  ["Weight", ["Kilogram", "Gram", "Pound"]],
]);
const selectedUnit = ref("Length");
const unitList = computed(() => units.get(selectedUnit.value));
</script>

<style lang="scss" scoped>
.unit-converter {
  max-width: 32rem;
  font-size: 1.5rem;
}
.unit-type-select,
#amount-input,
#from-select,
#to-select {
  width: 100%;
  font-size: inherit;
  margin-bottom: 1rem;
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
}
</style>
