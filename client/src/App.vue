<template>
  <div id="app">
    <navBar/>
    <div class="container mt-5">
      <router-view :key="$route.params.title"/>
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

   .tns-outer {
        margin-right: -15px;
        margin-left: -15px;
    }

    .tns-nav {
        margin: 20px auto;
        width: 30%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-evenly;

        .tns-nav-active {
            background-color: #2C2C2E;
            width: 14px;
            height: 14px;
            transition: all .2s ease-in;
        }

        button {
            border: none;
            width: 12px;
            height: 12px;
            background-color: #1C1C1E;
            border-radius: 50%;
            transition: all .2s ease-in;
        }

        button:focus {
            outline: none;
        }
    }
</style>
