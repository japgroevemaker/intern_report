<template>
  <div id="app">
    <navBar/>
    <div class="container mt-5">
      <router-view/>
    </div>

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
