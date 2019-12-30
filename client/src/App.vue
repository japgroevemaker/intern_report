<template>
  <div id="app">
    <navBar/>
    
    <router-view/>

  </div>
</template>

<script>
import navBar from './components/navbar.vue'

export default {
  name: 'app',
  components: {
    navBar,
  }
}
</script>

<style lang="scss">
  
  body {
    background-color: $black-color;
    font-family: 'Open Sans', sans-serif;
  }
</style>
