<template>
   <div class="newInfoContainer">
        <!-- title区域 -->
		<div class="mui-media-body newInfoTitle">
			{{ newsInfo.title }}
			<p class='mui-ellipsis'>
                  <span>发表时间: {{ newsInfo.add_time }}</span>
                  <span>点击: {{ newsInfo.click }}次</span>
              </p>
		</div>

        <hr>

        <!-- 内容区域 -->
        <div class="newInfoBody">
             <!-- v-html来渲染html样式 -->
             <p v-html="newsInfo.content"></p>   
         </div>    

         <!-- 评论区域 -->
         <commentBox :id="this.id"></commentBox> 
    </div>  
</template>

<script>
import { getNewsInfo } from "@/api/index"
// 引入评论组件
import comment from "@/subComponents/comment"

export default {
    data() {
        return {
           id: this.$route.params.id,
           newsInfo: []
        }
    },
    created() {
       this.getNewInfo()
    },
    methods: {
        getNewInfo() {
           getNewsInfo({newid: this.id }).then( res => {
            //    console.log(res)
            if(res.status == 0) {
                this.newsInfo = res.message[0]
            }
           } ) 
        }
    },
    components: {
        commentBox: comment
    }
}
</script>

<style lang="less" scoped>
   // scoped为局部设置样式，去掉scoped则是全局样式
   .newInfoContainer {
       padding: 0 10px;
       .newInfoTitle {
          padding-top: 20px;
          text-align: center;
          color: red;
          font-size: 18px;
          p {
              padding-top: 10px;
              padding-bottom: 10px;
              display: flex;
              justify-content: space-between;
              color: lightblue; 
          }
       }
       .newInfoBody {
           font-size: 15px;
           color: #fcfcfc;
           /deep/ img {       // 深度选择器
               width: 100%;
           }
       }
   }
</style>


