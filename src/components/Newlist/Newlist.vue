<template>
  <div class="box">
    <!-- <h3>新闻列表页面</h3> -->
     <!-- 缩略图居左 -->
    	<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in  newsList" :key="item.id">
					<router-link href="javascript:;" :to="'/home/newsInfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis'>
                <span>{{item.add_time | dateFormat}}</span>
                <span>点击次数：{{item.click}}次</span>
              </p>
						</div>
					</router-link>
				</li>
					</ul>
  </div>
</template>

<script>
// 导入Toast
import {Toast} from 'mint-ui'
export default {
  data () {
    return {
        newsList:[]
    }
  },
  created () {
     this.getNewlist()
  },
  methods: {
    // 获取新闻列表的数据
    getNewlist () {
      this.$http.get('api/getnewslist').then(result => {
         console.log(result.body);
        if(result.body.status===0){
          //  Toast("成功了")
          this.newsList=result.body.message;
        }else{
            // Toast("失败了")
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.box{
  .mui-table-view {
    li{
      .mui-media-body{
        font-size: 12px;
        .mui-ellipsis{
          font-size: 12px;
          color: #226aff;
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>
