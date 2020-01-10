import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VuePageTransition from 'vue-page-transition'

//routes
import Home from './components/home.vue';
import Inleiding from './components/inleiding.vue';
import ChapterComp from './components/chapter.vue';
import ProjectComp from './components/project.vue';

Vue.use(VuePageTransition);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes : [
    {
      path: '',
      name: 'home',
      component: Home,
      meta: { transition: 'fade-in-up' },
      // alias: '/home'
    },
    {
      path: '/:title',
      name: 'inleiding',
      component: Inleiding,
      // // alias: '/inleiding'
    },
    {
      path: '/chapter/:title',
      name: 'chapter',
      component: ChapterComp,
      alias: '/api'
    },
    {
      path: '/project/:title',
      name: 'project',
      component: ProjectComp
    }
  ]
})

Vue.config.productionTip = false

new Vue({ 
  el: '#app', 
  router, 
  render: h => h(App) 
})

