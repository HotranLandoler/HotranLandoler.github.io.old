<template>
  <ul class="nav-list">
    <li>
      <router-link class="link" to="/art" @click="onNavClicked()">{{
        $t("nav.art")
      }}</router-link>
    </li>
    <li>
      <router-link class="link" to="/game" @click="onNavClicked()">{{
        $t("nav.game")
      }}</router-link>
    </li>
    <li>
      <router-link class="link" to="/tool" @click="onNavClicked()">{{
        $t("nav.tool")
      }}</router-link>
    </li>
    <li>
      <router-link class="link" to="/about" @click="onNavClicked()">{{
        $t("nav.about")
      }}</router-link>
    </li>
    <li>
      <locale-dropdown class="link"></locale-dropdown>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import LocaleDropdown from "./LocaleDropdown.vue";

const emit = defineEmits<{
  (event: "link-clicked"): void;
}>();
function onNavClicked() {
  emit("link-clicked");
}
</script>

<style lang="scss" scoped>
.link {
  position: relative;
}
.link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: $color-primary;
  width: 100%;
  height: 0.15rem;
  transform: scaleX(0);
  transition: transform 0.2s ease-out;
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
  align-items: center;
  gap: 3rem;
}

@media (max-width: 48em) {
  .nav-list {
    flex-direction: column;
    gap: 2rem;
  }
  .dropdown-lang {
    display: none;
  }
}
</style>
