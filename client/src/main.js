import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VuePageTransition from 'vue-page-transition'
import titleMixin from '../mixins/titleMixin.js'

//routes
import Home from './components/home.vue';
import Page from './components/page.vue';
import ChapterComp from './components/chapter.vue';
import ProjectComp from './components/project.vue';

Vue.use(VuePageTransition);
Vue.use(VueRouter);
Vue.mixin(titleMixin);

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes : [
    {
      path: '',
      name: 'home',
      component: Home,
      meta: { transition: 'fade-in-up' },
    },
    {
      path: '/chapter/',
      name: 'chapter',
      component: ChapterComp,
      meta:  {
        title: 'Chapter'
      }
    },
    {
      path: '/page/',
      name: 'inleiding',
      component: Page
    },
    {
      path: '/page/',
      name: 'over-mij',
      component: Page
    },
    {
      path: '/project/',
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

