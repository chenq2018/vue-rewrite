import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

// 引入组件
import homeContainer from '@/tabbar/homeContainer.vue'
import memberContainer from '@/tabbar/memberContainer.vue'
import shoppingContainer from '@/tabbar/shoppingContainer.vue'
import searchContainer from '@/tabbar/searchContainer.vue'
import newsList from "@/components/news/newsList.vue"
import newsInfo from "@/components/news/newsInfo.vue"

export default new Router({
  routes: [
    { path: '/home', name: 'home', component: homeContainer },
    { path: '/member', name: 'member', component: memberContainer },
    { path: '/shopping', name: 'shopping', component: shoppingContainer },
    { path: '/search', name: 'search', component: searchContainer },
    { path: '/home/newList', name: 'newList', component: newsList },
    { path: '/home/newList/:id', name: 'newInfo', component: newsInfo },
    { path: '*', redirect: '/home' }
  ],
  linkActiveClass: 'mui-active'  // 默认覆盖路由高亮的类
})
