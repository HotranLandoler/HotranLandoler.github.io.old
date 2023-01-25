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
/* nav {
  display: flex;
  gap: 2rem;
  font-size: 18px;
  font-family: "Raleway", sans-serif;
  letter-spacing: 3px;
} */
a:link,
a:visited {
  font-size: 1.5rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration: none;
  color: #333;
  border-bottom: 1px solid transparent;
  transition: border-bottom 0.2s;
}

a:hover,
a:active {
  /* background-color: lightsalmon; */
  /* text-decoration: underline; */
  border-bottom: 1px solid #333;
}
.main-header {
  /* border: 2px solid salmon; */
  /* background-color: salmon; */
  /* background-image: url(https://images.hdqwalls.com/wallpapers/warrior-dreamy-concept-fantasy-digital-art-artwork-56.jpg); */
  background-size: 100%;
  background-attachment: fixed;
  margin-bottom: 2rem;
  padding: 1rem 4rem;
  /* height: 15rem; */
  position: relative;

  /* display: grid; */
  /* grid-template-columns: auto 1fr; */
  /* grid-template-rows: auto 1fr; */
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  font-family: Georgia, "Times New Roman", Times, serif;
  color: #444;
  text-transform: uppercase;
  font-size: 28pt;
  font-weight: bold;
  letter-spacing: -3.5px;
}
.nav-list {
  list-style: none;
  display: flex;
  gap: 4rem;
}
</style>
