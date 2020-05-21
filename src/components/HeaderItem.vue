<template>
  <header id="header">
    <h1>Recommend</h1>
    <nav id="header-nav">
      <router-link class="a" to="/">Go to home</router-link>
      <router-link class="a" to="/about">Go to about</router-link>
      <router-link class="a" to="/picts">Go to picts</router-link>
    </nav>
  </header>
</template>

<style lang="css" scoped>
  header {
    background-color: black;
    height: 70px;
  }
  h1 {
    color: #f0ebd8;
  }
  .a {
    color: white;
    margin-right: 20px;
    text-decoration: none;
  }
 
</style>