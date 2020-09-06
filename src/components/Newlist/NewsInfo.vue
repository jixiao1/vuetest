<template>
  <div class="box">
    <!-- 标题 -->
    <div class="title">{{newInfolist.title}}</div>
    <!-- 子标题 -->
    <p class="subtile">
      <span>发表时间:{{newInfolist.add_time |dateFormat}}</span>
      <span>点击次数:{{newInfolist.click}}次</span>
    </p>
    <hr>
    <!-- 内容区域 -->
    <div class="content" v-html="newInfolist.content"></div>
    <!-- 父组件给子组件传值 -->
    <cmtbox :cmtId="this.id"></cmtbox>
  </div>
</template>

<script>
import comwennt from '../Subcomments/Comment.vue'
import {Toast} from 'mint-ui'
// 导入评论子组件

export default {
   data () {
     return {
       id:this.$route.params.id,
       newInfolist:{}  //新闻对象
     }
   },
   created () {
    //  在此生命周期获取数据
      this.getnewInfo()
   },
   methods: {
     getnewInfo () {
       this.$http.get('api/getnew/'+this.id).then(result => {
        //  console.log(result)
         if(result.body.status===0){
            //  Toast("成功了")
            this.newInfolist=result.body.message[0];
         }else{
            Toast("失败了")
         }
       })
     }
   },
   components:{
     //注册评论子组件
     'cmtbox':comwennt
   }
}
</script>

<style lang='scss' scoped>
.box{
  padding: 0 4px;
  .title{
    font-size: 16px;
    color: red;
    text-align: center;
    margin: 5px 0;
  }
  .subtile{
    display: flex;
    justify-content: space-between;
  }
}
</style>
