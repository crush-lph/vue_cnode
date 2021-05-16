import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    component:()=>import("../views/Login.vue")
  },
  {
    path:'/getstart',
    component:()=>import("../views/GetStart.vue")
  },
  {
    path:'/api',
    component:()=>import("../views/Api.vue")
  },
  {
    path:'/about',
    component:()=>import("../views/About.vue")
  },
  {
    name:'detials',
    path:'/topic/detials',
    component:()=>import("../views/Detials.vue")
  },
  {
    path: '/',
    component: Home
  },
  {
    path: '/:tab',
    //动态路由参数
    component: Home
  },
  
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
