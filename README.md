# yg_vue_activity

> a vue project for yg_online activity

# 目录结构
> 项目目录结构

|-- src                              // 源码目录
|
|   |-- config                       // 基本配置
|       |-- env.js                   // 环境切换配置
|       |-- rem.js                   // px转换rem
|
|   |-- styles
|      	|-- index.scss               // 合并对外暴露全局scss
|       |-- reset.scss  		     // 清除默认样式
|       |-- variable.scss            // 全局配色型样式
|       |-- mixin 
|   |-- lib                          // 工具型方法
|       |-- lib                   	 // 工具型方法
|
|   |-- views                        // 视图页面（与路由一一对应）
|       |-- index                 	 // 页面文件夹
|      		|-- Index.vue            // 首页
|       	|-- component  			 // 首页自用的组件
|       |-- login                    // 登录相关
|      		|-- Login.vue            // 登录页面
|       	|-- component  	         // 登录页面自用的组件
|
|   |-- components                   // 功能性组件
|      		|-- cm-xxxx.vue          // 具体组件（也可以分文件夹放置，根据功能命名xxxx）
|
|   |-- sections                     // 业务性组件
|      		|-- st=xxxx.vue          // 登录页面(可分文件夹放置，根据业务命名xxxx)
|
|   |-- router                       // 路由配置
|      		|-- index.js           	 // 路由、路由守卫
|
|   |-- axios                        // 数据交互统一调配
|      		|-- api.js           	 // api输出、请求、响应拦截器、Loding动画
|
|   |-- store                        // vuex的状态管理
|       |-- modules                  // 加载各种store模块
|       	|-- common.js            // 公用状态
|       	|-- user.js              // 用户状态
|       	|-- ......               // 更多状态模块
|       |-- index.js                 // 对外暴露输出
|       |-- types.js                 // 常量
|
|   |-- App.vue                      // 页面入口文件
|
|   |-- main.js                      // 程序入口文件，加载各种公共组件
|
|static							     // 无需打包的资源，如swiper.min.js等

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
