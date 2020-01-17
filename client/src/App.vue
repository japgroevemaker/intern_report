<template>
  <div id="app">
    <navBar/>
      <div class="clearfix py-4"></div>
      <vue-page-transition name="overlay-right-full">
        <router-view :key="$route.query.name"/>
      </vue-page-transition>
    <div class="clearfix py-4"></div>
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
  },
}
</script>

<style lang="scss">
  .overlay-top,.overlay-right,.overlay-left,.overlay-bottom {
    background: $grey-color;
    transition-duration: .5s !important;
    z-index: 1000 !important;
  }

  body {
    background-color: $black-color;
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
