<template>
   <div class="homeBox">
      <mt-swipe :auto="4000">
         <mt-swipe-item v-for="(item, index) in lunboList" :key="index">
             <img :src="item.img" alt="">
         </mt-swipe-item>
       </mt-swipe>

       <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                    <router-link to="/home/newList">
                        <img src="../../images/menu1.png" alt="">
                        <div class="mui-media-body">新闻资讯</div>
                    </router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                    <router-link to="/home/photolist">
                        <img src="../../images/menu2.png" alt="">
                        <div class="mui-media-body">图片分享</div>
                    </router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                    <router-link to="/home/goodList">
                        <img src="../../images/menu3.png" alt="">
                        <div class="mui-media-body">商品购买</div>
                    </router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                    <a href="#">
                        <img src="../../images/menu4.png" alt="">
                        <div class="mui-media-body">留言反馈</div>
                    </a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                    <a href="#">
                        <img src="../../images/menu5.png" alt="">
                        <div class="mui-media-body">视频专区</div>
                    </a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                    <a href="#">
                        <img src="../../images/menu6.png" alt="">
                        <div class="mui-media-body">联系我们</div>
                    </a></li>
            </ul>
    </div>
   </div> 
</template>

<script>
import { getLunboInfo } from "@/api/index.js"
import { Toast } from "mint-ui"

export default {
    data() {
       return {
           lunboList: []
       }
    },
    created() {
       this.getLunbo()
    },
    methods: {
        getLunbo() {
            // axios请求获取轮播数据
            getLunboInfo({ params: {} }).then( res => {
                // console.log(res)
                this.lunboList = res.message
            } )
            // this.$http.get('api/getlunbo').then( result => {
            //     if(result.body.status == 0) {
            //         Toast("轮播图加载完成")
            //         this.lunboList = result.body.message
            //     } else {
            //         Toast("轮播图加载失败") 
            //     }
            // })
        }
    }

    
}
</script>

<style lang="less" scoped>
   .homeBox {
      .mint-swipe {
          height: 200px;
          img {
              width: 100%;
              height: 100%;
          }
      }
      .mui-content {
          img {
              width: 33.33%;
          }
      }
   }

</style>

