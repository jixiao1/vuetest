<template>
<div class="coment-container">
  <div class="title">评论内容</div>
  <hr>
  <textarea placeholder="请输入你要书写的内容(最多不超过120字)" :maxlength="120" v-model="msg"></textarea>
  <mt-button type='primary' size='large' @click="postComment">发表评论</mt-button>
  <div class="mt-list-content">
    <div class="mt-list" v-for="(item,index) in commentlist" :key="item.add_time">
      <div class="mt-title">
        <a href="#">
          <span>第{{index+1}}楼</span>
          <span>用户: {{item.user_name}}</span>
          <span>发表时间：{{item.add_time |dateFormat}}</span>
        </a>
      </div>
      <div class="mt-body">
        <p class="mt-body-content">{{item.content==="undefined"?"此用户比较懒,什么都没有说":item.content}}</p>
      </div>
    </div>
   
      
  </div>
   <mt-button type='danger' size='large' plain @click="getMore">加载更多</mt-button>
   <!-- <div>{{cmtId}}</div> -->
</div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  props: ['cmtId'],
  data () {
    return {
       id:this.cmtId,
       pageIndex:1, //默认显示第一楼
       commentlist:[],
       msg:"" //评论的内容
    }
  },
  created () {
    this.getComment();
  },
  methods:{
    getComment() {
       this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.pageIndex).then( result => {
        // console.log(result);
        if(result.body.status===0){
          //  Toast("成功")
          // this.commentlist=result.body.message;
          // 数据拼接，防止新数据被老数据所覆盖
          this.commentlist=this.commentlist.concat(result.body.message);
          console.log(this.commentlist)
        }else{
           Toast("失败")
        }
       })
    },
    getMore() {
      this.pageIndex++
      this.getComment()
    },
    postComment () {
     if(this.msg.trim().length===0){
          Toast("评论内容不能为空");
     }
    //  发表评论

    //参数1； 请求的url 地址

    //参数2； 提交到服务器的数据对象 {content:this.msg.tirm()}

    //参数3；定义提交时候，表单中数据的格式{}
     this.$http.post('api/postcomment/'+this.$route.params.id,{
       content:this.msg.trim()
     }).then(result =>{
        if(result.body.status===0){
            // Toast("成功了")
            var  cmt={
              user_name:"匿名用户",
              add_time: Date.now(),
              content:this.msg.trim()
            }

            this.commentlist.unshift(cmt);
            this.msg=''
        }else{
          Toast("失败了")
        }
     })
    }
  }
}
</script>

<style lang="scss" scoped>
.coment-container{
  margin-bottom: 10px;
  .title{
    font-size: 18px;
    color:#333;
    
  }
  textarea{
    height: 120px;
    margin: 0;
  }
  .mt-list-content{
    margin-top: 5px;
    .mt-list{
        .mt-title{
          line-height: 30px;
          font-size: 12px;
          background-color: #cccc;
          
          >a{
            color:#333;
            display: flex;
         justify-content: space-between;
          }
        }
        .mt-body{
           line-height: 35px;
           text-indent: 2em; //首行缩进2em
        }
    }
   
  }
}
</style>
