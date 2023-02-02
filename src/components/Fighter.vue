<script lang="ts" setup>
import { computed } from "vue";
const emit = defineEmits<{
  (event: "update:modelValue", value: string): void;
}>();
const props = defineProps({
  modelValue: { type: String, required: true },
  hp: { type: Number, required: true },
  flip: { type: Boolean },
});
const hp_value = computed(() => props.hp / 100.0);

const input_value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <div>
    <input type="text" v-model="input_value" />
    <progress :value="hp_value" :class="{ flipx: flip }"></progress>
  </div>
</template>

<style scoped>
input {
  width: 100%;
  border: 2px solid #8fc5e8;
  border-radius: 10px;
  outline-style: none;
  font-size: x-large;
  text-align: center;
}

input:hover {
  border: 2px solid #2696e0;
}

input:focus {
  border: 2px solid #006db5;
}

progress {
  width: 100%;
}
</style>
