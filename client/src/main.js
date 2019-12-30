import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Template from './components/Template.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: '/pages',
  routes : [
    {
      path: '/:title',
      name: 'home',
      component: Template
    },
    // {
    //   path: '/',
    //   name: 'helloworld',
    //   component: HelloWorld
    // }
  ]
})

Vue.config.productionTip = false

new Vue({ 
  el: '#app', 
  router, 
  render: h => h(App) 
})

