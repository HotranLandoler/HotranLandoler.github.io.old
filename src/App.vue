<template>
  <div class="wrapper">
    <main-header></main-header>
    <main>
      <router-view></router-view>
    </main>
    <main-footer></main-footer>
  </div>
</template>

<script lang="ts" setup>
import MainHeader from "./components/MainHeader.vue";
import MainFooter from "./components/MainFooter.vue";
</script>

<style scoped>
main {
  padding-bottom: 3rem;
}
.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
