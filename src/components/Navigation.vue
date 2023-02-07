<template>
  <ul class="nav-list">
    <li>
      <router-link to="/art" @click="onNavClicked()">art</router-link>
    </li>
    <li>
      <router-link to="/game" @click="onNavClicked()">game</router-link>
    </li>
    <li>
      <router-link to="/tool" @click="onNavClicked()">tool</router-link>
    </li>
    <li>
      <router-link to="/about" @click="onNavClicked()">about</router-link>
    </li>
  </ul>
</template>

<script lang="ts" setup>
const emit = defineEmits<{
  (event: "link-clicked"): void;
}>();
function onNavClicked() {
  emit("link-clicked");
}
</script>

<style scoped>
a:link,
a:visited {
  font-size: 1.1rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration: none;
  color: #333;
  border-bottom: 1px solid transparent;
  transition: border-bottom 0.2s;
}

a:hover,
a:active {
  border-bottom: 1px solid #333;
}
.nav-list {
  list-style: none;
  display: flex;
  gap: 3rem;
}
@media (max-width: 48em) {
  .nav-list {
    flex-direction: column;
    gap: 2rem;
  }
}
</style>
