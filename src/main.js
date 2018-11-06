// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

// 引入mui的css样式
import './assets/mui/dist/css/mui.min.css'

// 引入fonts扩展css
import './assets/mui/dist/css/icons-extra.css'

// 引入vue-resource
import vueResource from "vue-resource"
Vue.use(vueResource)

// 设置请求的根目录
Vue.http.options.root = 'http://027xin.com:8899'
// 设置提交表单的内容类型为普通表单数据格式
Vue.http.options.emulateJSON = true

// 设置时间过滤器
import moment from "moment"
// 时间过滤器
Vue.filter('dataFormat', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(pattern)
} )

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
