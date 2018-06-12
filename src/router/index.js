import Vue from 'vue'
import Router from 'vue-router'
import $store from '@/store/index'
import {
  routerMode
} from '@/config/env'

Vue.use(Router)

//vue异步组件和webpack的【代码分块点】功能结合，实现了按需加载
const IndexRoute = () => import ('@/views/Index/indexRoute');
const Index = () => import ('@/views/Index/index');


const router = new Router({
  mode: routerMode || routerMode == '' ? routerMode : 'history',
  routes: [
    {
      path: '/',
      redirect: '/Index'
    },
    {
      path: '/index',
      component: IndexRoute,
      children: [{
        path: '/',
        name: 'Index',
        component: Index
      }]
    },
  ]
})



// 路由守卫
router.beforeEach((to, from, next) => {
  next()
  // if($store.state.common.token != '' || to.path == '/login') {
  //   next()
  // }else {
  //   next({
  //     path: "/login",
  //     query: {
  //       redirect: to.fullPath
  //     }
  //   });
  // }
});

export default router;
