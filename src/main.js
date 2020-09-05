// console.log("ok");

// 注意： App 这个组件，是通过 VM 实例的 render 函数，渲染出来的， render 函数如果要渲染 组件， 渲染出来的组件，只能放到 el: '#app' 所指定的 元素中；
// Account 和 GoodsList 组件， 是通过 路由匹配监听到的，所以， 这两个组件，只能展示到 属于 路由的 <router-view></router-view> 中去；
//导入Vue组件
 
import Vue from 'vue'
//移入mint-ui中的Header头部
import {Header} from 'mint-ui'
// 导入App根组件
import App from './App.vue'

// 导入mint-ui的css样式
import './lib/mui/css/mui.min.css'
Vue.component(Header.name,Header)
const vm=new Vue({
  el: "#app",
  data: {

  },
  render: h => h(App)
})
