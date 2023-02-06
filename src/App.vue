<template>
  <header class="main-header">
    <div class="logo">
      <div>Shawn</div>
      <div>LOU</div>
    </div>
    <nav class="main-nav">
      <ul class="nav-list">
        <li>
          <router-link to="/art">art</router-link>
        </li>
        <li>
          <router-link to="/game">game</router-link>
        </li>
        <li>
          <router-link to="/tool">tool</router-link>
        </li>
        <li>
          <router-link to="/about">about</router-link>
        </li>
      </ul>
    </nav>
    <button type="button" class="button-mobile-nav" title="Menu">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        class="icon-button"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="48"
          d="M88 152h336"
        ></path>
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="48"
          d="M88 256h336"
        ></path>
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="48"
          d="M88 360h336"
        ></path>
      </svg>
    </button>
  </header>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import Unity from "./components/Unity.vue";
</script>

<style scoped>
a:link,
a:visited {
  font-size: 1.2rem;
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
.main-header {
  margin-bottom: 1rem;
  padding: 1rem 3rem;
  /* height: 15rem; */

  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  font-family: Georgia, "Times New Roman", Times, serif;
  color: #444;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: -3.5px;
}
.nav-list {
  list-style: none;
  display: flex;
  gap: 4rem;
}
.button-mobile-nav {
  border: none;
  background: none;
  cursor: pointer;

  display: none;
}
.icon-button {
  width: 2.5rem;
  height: 2.5rem;
}
@media (max-width: 48em) {
  .main-nav {
    display: none;
  }
  .button-mobile-nav {
    display: block;
  }
}
@media (max-width: 30em) {
  .main-header {
    padding: 1rem 2rem;
  }
}
</style>
