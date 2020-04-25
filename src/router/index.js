import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/Login'
import home from '../views/Home'
import GoodDetail from '../views/GoodDetail'
import shopCar from '../views/ShopCar'
import person from '../views/Person'
import search from '../views/Search'
import admin from '../views/Admin'
import connect from '../views/Connect'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/home',
      name:'home',
      component:home
    },
    {
      path:'/GoodDetail',
      name:'GoodDetail',
      component:GoodDetail
    },
    {
      path:'/shopCar',
      name:'shopCar',
      component:shopCar
    },
    {
      path:'/person',
      name:'person',
      component:person
    },
    {
      path:'/search',
      name:'search',
      component:search
    },
    {
      path:'/admin',
      name:'admin',
      component:admin
    },
    {
      path: '/connect',
      name: 'connect',
      component: connect
    },
  ]
})

// 拦截路由配置
// router.beforeEach((to, from, next) => {
//   // console.log(to, from);
//   if (to.name === 'shopCar') {
//     const token = localStorage.getItem('token');
//     if(!token) {
//       Message.warning('请先登录');
//       router.push({
//         name: 'login'
//       })
//     }
//   } else {
//     next()
//   }
// })

export default router
