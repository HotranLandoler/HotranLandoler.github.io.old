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
      class="button-mobile-nav hamburger hamburger--squeeze"
      title="Menu"
      aria-controls="mobile-nav"
      aria-expanded="false"
      @click="toggleNav"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
  </header>
  <nav id="mobile-nav" class="mobile-nav">
    <main-navigation @link-clicked="closeNav"></main-navigation>
  </nav>
</template>

<script lang="ts" setup>
import MainNavigation from "./MainNavigation.vue";
let mobileNavOpen = false;

function toggleNav() {
  const nav = document.querySelector(".mobile-nav");
  const hamburger = document.querySelector(".hamburger");
  if (!hamburger || !nav) {
    throw new Error("element not found!");
  }

  mobileNavOpen = !mobileNavOpen;
  nav.classList.toggle("mobile-nav--open");
  hamburger.classList.toggle("is-active");
  hamburger.ariaExpanded = mobileNavOpen ? "true" : "false";
}
function closeNav() {
  if (mobileNavOpen) {
    const nav = document.querySelector(".mobile-nav");
    const hamburger = document.querySelector(".hamburger");
    if (!hamburger || !nav) {
      throw new Error("element not found!");
    }

    mobileNavOpen = false;
    nav.classList.remove("mobile-nav--open");
    hamburger.classList.remove("is-active");
    hamburger.ariaExpanded = "false";
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

/* Hamburger */
.hamburger {
  padding: 1rem;
  /* display: inline-block; */
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
}
.hamburger:hover {
  opacity: 0.7;
}
.hamburger.is-active:hover {
  opacity: 0.7;
}
.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
  background-color: #555;
}
.hamburger-box {
  width: 2.5rem;
  height: 1.5rem;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px;
}
.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  width: 2.5rem;
  height: 0.25rem;
  background-color: #555;
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}
.hamburger-inner::before,
.hamburger-inner::after {
  content: "";
  display: block;
}
.hamburger-inner::before {
  top: -10px;
}
.hamburger-inner::after {
  bottom: -10px;
}
.hamburger--squeeze .hamburger-inner {
  transition-duration: 0.075s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--squeeze .hamburger-inner::before {
  transition: top 0.075s 0.12s ease, opacity 0.075s ease;
}
.hamburger--squeeze .hamburger-inner::after {
  transition: bottom 0.075s 0.12s ease,
    transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.hamburger--squeeze.is-active .hamburger-inner {
  transform: rotate(45deg);
  transition-delay: 0.12s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
.hamburger--squeeze.is-active .hamburger-inner::before {
  top: 0;
  opacity: 0;
  transition: top 0.075s ease, opacity 0.075s 0.12s ease;
}
.hamburger--squeeze.is-active .hamburger-inner::after {
  bottom: 0;
  transform: rotate(-90deg);
  transition: bottom 0.075s ease,
    transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
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
