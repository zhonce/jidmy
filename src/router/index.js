import Vue from 'vue'
import Router from 'vue-router'
import home from '../page/home'
import service from '../page/service'
import about from '../page/about'
import news from '../page/news'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '/news',
      component: news
    },
    {
      path: '/service',
      component: service
    }
  ]
})
