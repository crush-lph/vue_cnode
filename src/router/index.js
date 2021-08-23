import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import("../views/Login.vue")
  },
  {
    path: '/getstart',
    component: () => import("../views/GetStart.vue")
  },
  {
    path: '/api',
    component: () => import("../views/Api.vue")
  },
  {
    path: '/about',
    component: () => import("../views/About.vue")
  },
  {
    name: 'create',
    path: '/topic/create',
    component: () => import("../views/Create.vue")
  },
  {
    name: 'detials',
    path: '/topic/detials',
    component: () => import("../views/Detials.vue")

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


router.beforeEach((to, from, next) => {
  let loginStatus = window.localStorage.getItem('isLogin')
  // loginStatus = Boolean(loginStatus)
  // const loginStatus = this.$store.state.isLogin
  if (loginStatus === 'true' && to.path === '/login') {
    console.log(loginStatus);
    next('/')
    // console.log("已登录");
  }
  else {
    next()
    // console.log("未登录");
  }
})


export default router
