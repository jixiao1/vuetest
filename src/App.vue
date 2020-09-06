<template>
  <div class="app_container">
    <!-- <h1>这是 App 组件</h1> -->

    <!-- 这里是header头部 -->
    <mt-header fixed title="vue项目"></mt-header>
    <!-- 这里是router-view区域 -->
    <!-- <router-view></router-view> -->
		  <transition mode="out-in">
				    <router-view></router-view>
			</transition>
    <!-- 这里是tabbar区域 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/memer">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/cart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>

</script>


<style lang="scss" scoped>
 .app_container{
  padding-top: 40px;
	padding-bottom: 50px;
	// 将水平方向的隐藏
	overflow-x: hidden;
 }
//  路由动画的两组类
 .v-enter{
	 opacity: 0;
	 transform: translateX(100%);
	//  position: absolute;
 }
 .v-leave-to {
	 opacity: 0;
	 transform: translateX(-100%);
	 position: absolute;
 }
 .v-enter-active,
 .v-leave-active{
	 transition: all .5s;
 }
</style>
