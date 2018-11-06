## 使用mui
### 引入mui.js
1. 将mui放到vue-cli项目的`src/assets`路径下
2. 在webpack.base.conf.js中配置
   ```javascript
    // 2.1 在webpack.base.conf.js的resolve中的alias中添加 mui当前行代码
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            // 定义别名和插件位置
            'mui': path.resolve(__dirname, '../src/assets/mui/js/mui.js')
        }
    }
   ```

3. 在webpack.dev.conf.js中配置mui相关
   ```javascript
    plugins: [
        new webpack.ProvidePlugin({
            mui: "mui",
            "window.mui": "mui"
        }),
        new webpack.DefinePlugin({
          'process.env': require('../config/dev.env')
        }),
    ]
   ```

### 引入mui.js报错及解决
1. `caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them`
   ```javascript
   // 真正问题产生是由于babel-loader在编译代码时会加严格模式限制
   //  在项目根目录中的 .babelrc文件中忽略不需要使用严格模式转换的文件路径
    "plugins": ["transform-vue-jsx", "transform-runtime"],
    "ignore": [
      "./src/assets/mui/js/*.js",
    ]
   ```

2. mui中的滚动会在浏览器控制中报警告,需要添加一举样式代码

```css
* { touch-action: pan-y; }
```

3. mui.js导入之后,滚动效果的js代码和tabbar产生了冲突,导致路由跳转失效

> **原因**: js中有操作类名的代码,这些代码中的类名和tabbar上的类名一模一样
> **解决**: 需要自己手动的更改tabbar上的类名为自定义类名,然后将系统默认类名中样式拷贝过来

### vue-cli引入mui.css出错
1. 找到引入的mui.css
2. 搜索svg
3. 将svg最外层的单引号改为双引
   ```javascript
   .mui-spinner:after {
    //   background-image: url('data:image/..')
     //   background-image: url("data:image/..")
   }
   ```

4. [vue-cli引入mui.css出错](https://segmentfault.com/q/1010000010058553)
