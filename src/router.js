import VueRouter from 'vue-router'
//在路由中导入组件模块
import HomeContainer from '../src/components/Tabbar/HomeContainer.vue'

// import GoshopContainer from '../src/components/Tabbar/GoshopContainer.vue'

// import MemerContainer from '../src/components/Tabbar/MemerContainer.vue'

// import SearchContainer from '../src/components/Tabbar/SearchContainer.vue'
//导入新闻列表组件
// import Newlistcontainer from '../src/components/Newlist/Newlist.vue'

// import NewsInfo from '../src/components/Newlist/NewsInfo.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {
       path:'/',
       redirect: '/home'
    },
    {
      path: '/home',
      component: HomeContainer
      // children:[
      //   { 
      //     path:'/home/newslist',
      //     components: () => import('../src/components/Newlist/Newlist.vue')
      //   }
      // ]
    },
    {
         path: '/memer', 
         component: () => import("../src/components/Tabbar/MemerContainer.vue")
    },
    {
         path: '/cart',
         component: () => import("../src/components/Tabbar/GoshopContainer.vue")
    },
    {
      path: '/search',
      component: () => import("../src/components/Tabbar/SearchContainer.vue")
    },
    {
      path: '/home/newslist',
      component:() => import("../src/components/Newlist/Newlist.vue")
    },
    {
      path:'/home/newsInfo/:id',
      component:() => import("../src/components/Newlist/NewsInfo.vue")
    }
    
  ],
  linkActiveClass: 'mui-active' //覆盖route 路由的的高亮的二类名router-link-active
})

// 把路由对象暴露出去
export default router