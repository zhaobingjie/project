import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import cookIndex from '@/components/cook/index'
import cookList from '@/components/cook/list'
import cookDetail from '@/components/cook/detail'
import demo from '@/components/demo'

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
      component: cookIndex,
      // children : [
      //   {path : '/cookbook/list',name:'cookList',component :cookList }
      // ]
    },
    {
      path: '/cookbook/list',
      name: 'cookList',
      component: cookList,
    },
    {
      path: '/cookbook/detail/:id',
      name: 'cookDetail',
      component: cookDetail,
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    }
  ]
})
