import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Project from '../components/Project.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '', component: Home, name: 'Home'},
    { path: '/about', component: About, name: 'About'},
    { path: '/project/:url', component: Project, name: 'Project'},
  ],
  mode:'history'
})
