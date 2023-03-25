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
    <input type="text" class="input-outlined" v-model="input_value" />
    <progress :value="hp_value" :class="{ flipx: flip }"></progress>
  </div>
</template>

<style scoped>
input {
  text-align: center;
  font-size: 1.2rem;
  padding: 0.25rem;
}

progress {
  width: 100%;
}
</style>
