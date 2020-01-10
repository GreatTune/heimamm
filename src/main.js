import Vue from 'vue'
import App from './App.vue'
// 路由引入
import router from './router/index'

// 导入 饿了么 ui的库
import ElementUI from 'element-ui';
// 导入 饿了么 的css
import 'element-ui/lib/theme-chalk/index.css';
// 引用全局css
import "./style/base.css"

// 注册饿了么 ul
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
