import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/index'
import List from '@/components/list'
import Create from '@/components/create'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/list'
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    }
  ]
})
