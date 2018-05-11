// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
// 引入vuex
import Vuex from 'vuex'
import store from './vuex/store'
Vue.use(Vuex)
//引入 element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
// 引入echarts
import echarts from 'echarts'
Vue.use(VueRouter)

Vue.prototype.$echarts = echarts 
Vue.config.productionTip = false
import Main from './components/Main.vue'
import tab1 from './components/tab1.vue'
//配置路由

var vueRouter = new VueRouter({
  routes:[
    {path:'/',component:Main},
    {path:'/main',component:Main},
    {path:'/tab1',component:tab1}
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router:vueRouter,
  components: { App },
  template: '<App/>'
})
