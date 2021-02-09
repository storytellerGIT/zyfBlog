import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/temp',
      name: 'temp',
      component: () => import('@/views/home.vue')
    }
  ]
})
