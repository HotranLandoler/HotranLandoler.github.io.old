<template>
  <router-link :to="linkTo" class="tool">
    <p class="tool-title">{{ title }}</p>
  </router-link>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
  linkTo: string;
}>();
</script>

<style lang="scss" scoped>
.tool {
  text-decoration: none;
  color: $color-gray;

  padding: 2rem;
  box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.15);
  }
}
</style>
