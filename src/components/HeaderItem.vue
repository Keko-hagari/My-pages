<template>
  <header id="header">
    <h1>Recommend</h1>
    <nav id="header-nav">
      <router-link id="a" to="/">Go to home</router-link>
      <router-link id="a" to="/about">Go to about</router-link>
      <router-link id="a" to="/picts">Go to picts</router-link>
    </nav>
  </header>
</template>

<style scoped>
  header {
    background-color: black;
    height: 70px;
  }
  h1 {
    color: white;
    font-size: 16px;
    margin-bottom: 20px;
  }
 
  a {
    color: white;
    margin-right: 20px;
    text-decoration: none;
  }
 
</style>