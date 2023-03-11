<template>
  <section>
    <h2 class="page-heading">{{ $t("tools") }}</h2>
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
      <tool-card
        link-to="tool/unitconverter"
        title="Unit Converter"
      ></tool-card>
      <tool-card link-to="tool/killspaces" title="Kill Spaces"></tool-card>
      <tool-card link-to="tool/decide" title="Decide!"></tool-card>
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

@media (max-width: 48em) {
  .tools {
    grid-template-columns: 1.5fr 1fr;
  }
  .tool--pomo {
    grid-column: 2;
  }
}
</style>
