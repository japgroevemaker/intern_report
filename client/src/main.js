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
      path: '/chapter/',
      name: 'chapter',
      component: ChapterComp,
      alias: '/:title'
    },
    {
      path: '/page/:pageId',
      name: 'inleiding',
      component: Inleiding,
      alias: '/inleiding'
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

