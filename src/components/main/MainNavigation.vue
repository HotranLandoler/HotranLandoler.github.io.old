<template>
  <ul class="nav-list">
    <li>
      <router-link class="link" to="/art" @click="onNavClicked()"
        >art</router-link
      >
    </li>
    <li>
      <router-link class="link" to="/game" @click="onNavClicked()"
        >game</router-link
      >
    </li>
    <li>
      <router-link class="link" to="/tool" @click="onNavClicked()"
        >tool</router-link
      >
    </li>
    <li>
      <router-link class="link" to="/about" @click="onNavClicked()"
        >about</router-link
      >
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
.link {
  position: relative;
}
.link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: #777;
  width: 100%;
  height: 0.15rem;
  transform: scaleX(0);
  transition: transform 0.3s ease-out;
}

.link:link,
.link:visited {
  padding: 0.2rem 0;
  font-size: 1.1rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration: none;
  color: #333;
  border-bottom: 1px solid transparent;
  transition: border-bottom 0.2s;
}

.link:hover::after,
.link:active::after {
  /* border-bottom: 1px solid #333; */
  transform: scaleX(1);
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
