<template>
  <header class="main-header">
    <div class="logo">
      <div>Shawn</div>
      <div>LOU</div>
    </div>
    <nav>
      <ul class="nav-list">
        <li>
          <router-link to="/art">art</router-link>
        </li>
        <li>
          <router-link to="/game">game</router-link>
        </li>
        <li>
          <router-link to="/about">about</router-link>
        </li>
      </ul>
    </nav>
  </header>
  <router-view></router-view>
</template>

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
  padding: 1rem 4rem;
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
</style>
