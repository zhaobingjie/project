import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import cookIndex from '@/components/cook/index';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/cookbook',
      name: 'cookbook',
      component: cookIndex
    }
  ]
})
