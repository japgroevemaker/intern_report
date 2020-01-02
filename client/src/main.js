import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

//routes
import Home from './components/home.vue';
import Inleiding from './components/inleiding.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes : [
    {
      path: '',
      name: 'home',
      component: Home,
      // alias: '/home'
    },
    {
      path: '/pages/:title',
      name: 'inleiding',
      component: Inleiding,
      // // alias: '/inleiding'
    }
  ]
})

Vue.config.productionTip = false

new Vue({ 
  el: '#app', 
  router, 
  render: h => h(App) 
})

