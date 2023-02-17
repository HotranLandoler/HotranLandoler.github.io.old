<template>
  <section>
    <h2 class="page-heading">Tools</h2>
    <div class="container tools">
      <tool-card
        link-to="tool/namesfight"
        title="Names Fight"
        class="tool--nf"
      ></tool-card>
      <tool-card
        link-to="tool/pomodoro"
        title="Pomodoro"
        class="tool--pomo"
      ></tool-card>
      <tool-card link-to="tool/namesfight" title="Unit Converter"></tool-card>
      <tool-card link-to="tool/namesfight" title="Names Fight"></tool-card>
    </div>
  </section>
</template>

<script lang="ts" setup>
import ToolCard from "./ToolCard.vue";
</script>

<style lang="scss" scoped>
.tools {
  max-width: 48rem;

  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
}
.tool--nf {
  grid-row: span 2;
}
.tool--pomo {
  grid-column: span 2;
  text-transform: uppercase;

  background-color: #ec7063;
  color: white;
}
</style>
