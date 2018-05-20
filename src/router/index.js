import Vue from 'vue'
import Router from 'vue-router'

import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'

import HelloWorld from '@/components/HelloWorld'
import Parent from '@/components/layer/Parent'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Parent',
      component: Parent,
      children: [
        {
          path: '',
          name: '系统管理',
          component: () => import('@/components/view/Sysgm')
        },
        {
          path: 'hellow',
          name: '用户管理',
          component: () => import('@/components/HelloWorld')
        }
      ]
    },
    {
      path: '/login',
      name: '登录',
      component: () => import('@/components/login/Login')
    }
  ]
})

export default router
