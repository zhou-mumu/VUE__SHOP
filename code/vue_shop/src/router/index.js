import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/user/Users.vue'

Vue.use(VueRouter)

const routes = [
  // 路由重定向
  { path: '/', redirect: '/login'},
  { path: '/login',component: Login },
  { 
    path: '/home',
    component: Home, 
    // redirect: '/welcome',
    children: [
      {
        path: '/welcome', component: Welcome,
        path: '/users', component: Users
      }
  ]}
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数 表示放行
  // next() 放行 next('/login') 强制跳转
  if (to.path === '/login') return next();
  // 获取token
  else{
    const tokenstr = window.sessionStorage.getItem('token');
    if(!tokenstr) return next('/login')
    else {
      next();
    }
  }
})

export default router
