<template>
  <div id="app">
    <HeaderItem/>
    <router-view/>
    <FooterItem/>
  </div>
</template>

<script>
import HeaderItem from './components/HeaderItem'
import FooterItem from './components/FooterItem'
export default {
  name: 'App',
  components: {
   HeaderItem,
   FooterItem
  },
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
