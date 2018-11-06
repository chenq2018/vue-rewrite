<template>
   <div class="commentContainer">
       <h3>发表评论</h3> 
       <hr>
       <textarea placeholder="请输入要BB的内容(最多BB 120个字)" maxlength="120" v-model="msg"></textarea>
       <mt-button type="primary" size="large" @click="addComments">发表评论</mt-button>
       <div class="body" v-for="(item, index) in comments" :key="index"> 
           <p>第{{ index + 1 }}楼 用户: {{ item.user_name }} 发表时间: {{ item.add_time | dataFormat }}</p>
           <p>{{ item.content == 'undefined' ? '此用户什么也没留下' : item.content}}</p>
       </div>
       <mt-button type="danger" size="large" plain @click="getMoreComment">加载更多</mt-button>
    </div> 
</template>

<script>
import { getComments } from "@/api/index"
import { addComment } from "@/api/index"
import { Toast } from "mint-ui"

export default {
    data() {
       return {
           comments: [],
           pageindex: 1,
           msg: ''
       }
    },
    created() {
       this.getComment()
    },
    methods: {
       getComment() {
        //    axios做法
           getComments({artid: this.id, pageindex: this.pageindex}).then( res => {
            //    console.log(res)
             if(res.status == 0) {
                //  console.log(res.body)
                //  数组拼接
                 this.comments = this.comments.concat(res.message)
             }
           })
        //    vue-resource做法
        //  this.$http.get("api/getcomments/"+ this.id +"?pageindex=" + this.pageindex).then(res => {
        //      if(res.body.status == 0) {
        //         //  console.log(res.body)
        //         //  数组拼接
        //          this.comments = this.comments.concat(res.body.message)
        //      }
        //  })
       },
       getMoreComment() {
           this.pageindex = this.pageindex + 1
           this.getComment()
       },
       addComments() {
           if(this.msg.trim().length == 0) {
               Toast("输入内容不能为空")
               return
           }
           addComment({ artid: this.id }, { content: this.msg.trim() }).then( res => {
               if(res.status == 0) {
                //    添加新数据
                   var addContent = {
                        user_name: '匿名用户',
                        add_time: Date.now(),
                        content: this.msg.trim()
                    } 
                    this.comments.unshift(addContent)
                    this.msg = ''
               }
           }) 
       }
    },
    props: ['id'] 
}
</script>

<style lang="less" scoped>
   .commentContainer {
        padding: 0 10px;
        > textarea {
            height: 80px;
        }
        > .body {
          padding-top: 10px;
          > p {
             text-align: center;
             font-size: 16px;
             color: #000;
             &:nth-child(1) {
                 background-color:#ccc;
             } 
           }  
        }
    }
</style>

