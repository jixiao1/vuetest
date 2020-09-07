# 这是一个不错的项目。

# 用到了mint-ui ,m-ui等ui组件库

# 开源协议之间的关系，你需要学习。


# 制作首页App组件

1.完成Header 区域，使用的是Mint-UI中Header组件

2.制作底部的Tabbar区域，使用的是MUI的Tabbar.html
++ 在制作 购物车 小图标的时候，操作会相对多一些
 ++ 先把 扩展图标的 css样式,拷贝到项目中
 +拷贝扩展字体字体库ttf文件，到项目中，
 + 为购物车 小图标 ，添加如下的 'mui-icon mui
 -icon-extra mui-icon-extra-cart
 

3.要在中间区域放置router-view来展示路由匹配的组件

## 改造tabbar 为router-link

## 设置路由高亮

## 点击 tabbar中的路由链接，展示对应的路由组件



## 加载首页的轮播图的数据

1.获取数据，如何获取呢，使用 vue-resouce

2.使用 vue-resource的this.$http.get 获取数据


3.获取到的数据，要保存到data中去

4.使用v-for 循环渲染每个item项


# 改造九宫格的区域样式


## 改造新闻资讯 路由链接


## 新闻资讯 页面 制作

1.绘制界面，使用mui中media-list.html

2.使用 vue-resource 获取数据

3.渲染真实的数据


## 实现新闻咨询列表 点击跳转到新闻详情

1.把列表中的每一项改造为 router-link,同时，在跳转的时候应该提供唯一的Id标识符
	<router-link href="javascript:;" :to="'/home/newsInfo/'+item.id">
    path:'/home/newsInfo/:id',
2.创建新闻详情的组件页面 NewsInfo.vue

3.在路由模板中，将新闻详情页路由地址和组件页面对应起来


## 实现 新闻详情的页面的布局 和数据的渲染

## 单独封装一个 comment.vue 评论子组件

1. 先创建一个单独的comment.vue 组件模板

2.在需要使用 comment 组件的页面中，先手动导入comment 组件

+'import  comment from './src/components/subcomment/comment.vue'

3. 在父组件中，使用’components'属性，将刚刚导入的组件，作为子组件来使用

4.在注册子组件时候的，注册名称，以标签形式，在页面中引用就即可！



## 获取所有的评论数据显示到页面中


## 实现点击加载更多评论的功能

1.为加载更多按钮，绑定点击事件，在事件中，请求下一页数据

2.点击加载更多，让pageIndex++,然后重新调用 this.getComments() 方法，重新获取下一页的数据

3.为了防止 新数据 覆盖老数据的情况，我们在加载更多的时候，每当获取到新数据的时候，应该让老数据调用数组的concat 方法，拼接上新数组



