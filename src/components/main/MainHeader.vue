<template>
  <header class="main-header">
    <div class="logo">
      <div>Shawn</div>
      <div>LOU</div>
    </div>
    <nav class="main-nav">
      <main-navigation></main-navigation>
    </nav>
    <button
      type="button"
      class="button-mobile-nav"
      title="Menu"
      @click="toggleNav"
    >
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
  <nav class="mobile-nav">
    <main-navigation @link-clicked="closeNav"></main-navigation>
  </nav>
</template>

<script lang="ts" setup>
import MainNavigation from "./MainNavigation.vue";
let mobileNavOpen = false;
function toggleNav() {
  let nav = document.querySelector(".mobile-nav");
  nav?.classList.toggle("mobile-nav--open");
  mobileNavOpen = !mobileNavOpen;
}
function closeNav() {
  if (mobileNavOpen) {
    let nav = document.querySelector(".mobile-nav");
    nav?.classList.remove("mobile-nav--open");
    mobileNavOpen = false;
  }
}
</script>

<style scoped>
.main-header {
  margin-bottom: 1rem;
  padding: 1rem 3rem;
  /* height: 6rem; */

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: white;
  position: relative;
  /* width: 100%; */
  z-index: 2;
}
.logo {
  font-family: Georgia, "Times New Roman", Times, serif;
  color: #444;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: -3.5px;
}

.button-mobile-nav {
  padding: 0.5rem;
  border: none;
  background: none;
  cursor: pointer;

  display: none;
}
.icon-button {
  width: 2.5rem;
  height: 2.5rem;
}

/* Mobile nav */
.mobile-nav {
  position: absolute;
  left: 0;
  right: 0;
  top: 6rem;
  z-index: 1;

  background-color: white;
  padding: 2rem 3rem;
  overflow: hidden;
  transform: translateY(-100%);
  transform-origin: top;
  transition: all 0.3s ease-out;

  /* opacity: 0; */
  pointer-events: none;
  visibility: hidden;
}

@media (max-width: 48em) {
  .main-nav {
    display: none;
  }
  .button-mobile-nav {
    display: block;
  }
  .mobile-nav.mobile-nav--open {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    transform: translateY(0);

    /* opacity: 1; */
    pointer-events: auto;
    visibility: visible;
  }
}
@media (max-width: 30em) {
  .main-header {
    padding: 1rem 2rem;
  }
}
</style>
