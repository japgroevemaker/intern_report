import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VuePageTransition from 'vue-page-transition'
import titleMixin from '../mixins/titleMixin.js'

//routes
// import Home from './components/home.vue';
// import Page from './components/page.vue';
// import ChapterComp from './components/chapter.vue';
// import ProjectComp from './components/project.vue';

Vue.use(VuePageTransition);
Vue.use(VueRouter);
Vue.mixin(titleMixin);

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes : [
    {
      path: '/',
      name: 'home',
      component: () => import('./components/home.vue'),
      // meta: { transition: 'fade-in-up' },
    },
    {
      path: '/chapter/',
      name: 'chapter',
      component: () => import('./components/chapter.vue')
    },
    {
      path: '/page/',
      name: 'inleiding',
      component: () => import('./components/page.vue')
    },
    {
      path: '/page/',
      name: 'over-mij',
      component: () => import('./components/page.vue')
    },
    {
      path: '/project/',
      name: 'project',
      component: () => import('./components/project.vue')
    },
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/404',
      name: '404',
      component: () => import('./components/404.vue')
    }
  ]
})

Vue.config.productionTip = false

new Vue({ 
  el: '#app', 
  router, 
  render: h => h(App) 
})

