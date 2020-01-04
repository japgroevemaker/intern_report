<template>
  <div id="app">
    <navBar/>
    <div class="container mt-5">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import navBar from './components/header_footer/navbar.vue'
import Footer from './components/header_footer/footer.vue'


export default {
  name: 'app',
  components: {
    navBar,
    Footer
  }
}
</script>

<style lang="scss">
  
  body {
    background-color: $black-color;
    font-family: 'Open Sans', sans-serif;
  }
</style>
