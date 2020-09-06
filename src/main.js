// console.log("ok");

// 注意： App 这个组件，是通过 VM 实例的 render 函数，渲染出来的， render 函数如果要渲染 组件， 渲染出来的组件，只能放到 el: '#app' 所指定的 元素中；
// Account 和 GoodsList 组件， 是通过 路由匹配监听到的，所以， 这两个组件，只能展示到 属于 路由的 <router-view></router-view> 中去；
//导入Vue组件
 
import Vue from 'vue'
//导入Vue_router
import VueRouter from 'vue-router'

//使用 vue-resource
import VueResource from 'vue-resource'

//使用路由

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005'; //全局配置vue-resurce
//移入mint-ui中的Header头部 Swipe, SwipeItem组件
import {Header, Swipe, SwipeItem, Button} from 'mint-ui'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
// 定义全局时间的过滤器
import moment from 'moment'
//全局过滤时间
Vue.filter('dateFormat',function(dataStr,pattarn="YYYY-MM-DD HH:mm:ss"){
     return moment(dataStr).format(pattarn);
})
// 导入App根组件
import App from './App.vue'  

//导入router.js
import router from './router.js'

// 定义全局

// 导入mint-ui的css样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
Vue.component(Header.name,Header)
const vm=new Vue({
  el: "#app",
  data: {

  },
  router, //挂载路由对象
  render: h => h(App)
})
