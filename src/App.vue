<template>
  <header class="main-header">
    <div class="logo">
      <div>Shawn</div>
      <div>LOU</div>
    </div>
    <nav>
      <router-link to="/art">art</router-link>
      <router-link to="/game">game</router-link>
      <router-link to="/about">about</router-link>
    </nav>
  </header>
  <router-view></router-view>
</template>

<style scoped>
nav {
  /* align-self: center; */
  /* justify-self: end; */
  display: flex;
  gap: 2rem;
  font-size: 18px;
  font-family: "Raleway", sans-serif;
  letter-spacing: 3px;
}
a {
  text-transform: uppercase;
  text-decoration: none;
  color: black;
  transition: background-color 0.2s;
}

a:hover {
  /* background-color: lightsalmon; */
  text-decoration: underline;
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
  text-transform: uppercase;
  font-size: 28pt;
  font-weight: bold;
  letter-spacing: -3.5px;
}
</style>
