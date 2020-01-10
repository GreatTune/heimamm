import Vue from 'vue'
// 路由
import VueRouter from "vue-router"

// 组件引入
// 登录页面
import login from '../views/login/login.vue'
// 首页页面
import index from '../views/login/login.vue'


// 注册路由
Vue.use(VueRouter)

// 实例化路由
const router = new VueRouter({
  router: [
    {
      path: "/login", // 路径
      component: login, //组件名
    },
    {
      path: "/index",
      component: index,
    }
  ]
})

// 暴露出口
export default router


