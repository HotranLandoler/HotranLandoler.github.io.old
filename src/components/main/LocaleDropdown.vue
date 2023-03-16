<template>
  <div class="dropdown-lang">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      class="icon"
    >
      <path
        d="M478.33 433.6l-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362L368 281.65L401.17 362z"
        fill="currentColor"
      ></path>
      <path
        d="M267.84 342.92a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73c39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36c-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93c.92 1.19 1.83 2.35 2.74 3.51c-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59c22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z"
        fill="currentColor"
      ></path>
    </svg>
    <div class="panel">
      <ul class="list-lang">
        <li>
          <button
            type="button"
            class="button button-lang"
            @click="setLocale('zh')"
          >
            中文
          </button>
        </li>
        <li>
          <button
            type="button"
            class="button button-lang"
            @click="setLocale('en')"
          >
            ENG
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n({ useScope: "global" });
function setLocale(newLocale: string) {
  locale.value = newLocale;
}
</script>

<style lang="scss" scoped>
.dropdown-lang {
  position: relative;
  padding: 0.5rem;
  .icon {
    width: 2rem;
    height: 2rem;
  }
  .panel {
    opacity: 0;
    pointer-events: none; /*Prevent Tab, instead of 'auto'*/
    visibility: hidden;

    background-color: white;
    overflow: hidden;
    position: absolute;
    right: 0;
    box-shadow: 0.1rem 0.2rem 0.4rem rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    transition: all 0.2s ease-out;
  }
  &:hover .panel {
    opacity: 1;
    pointer-events: auto; /*Prevent Tab, instead of 'auto'*/
    visibility: visible;
  }
}
.list-lang {
  list-style: none;
  display: flex;
  flex-direction: column;
}
.button-lang {
  background-color: transparent;
  border: none;
  padding: 0.5rem 2rem;
  transition: all 0.2s;
  width: 100%;

  &:hover,
  &:active {
    background-color: $color-gray-x-light;
  }
}
@media (max-width: 48em) {
  .dropdown-lang {
    display: none;
  }
}
</style>
