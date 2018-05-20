# business-element-admin

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install --registry=https://registry.npm.taobao.org or npm config set registry https://registry.npm.taobao.org then npm install

报error:`node install.js`  solve:npm install --ignore-scripts

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
## thought
做一个后台管理系统，搭建左边的导航菜单栏及标签的指引栏，其中左边的菜单栏是通过后台角色来决定显示哪些。而且刷新页面保持左边菜单的状态的方法，是舍弃vuex和cookei或localStorage，采用router.path指向状态 可以查看src/components/layer的文件

## knowledge
vue2.0<br/>
ES6<br/>
element-ui<br/>

## use thing
node ^10.0.1<br/>
npm ^6.00<br/>
webpack ^3.6.0<br/>
employ vue-cli porject

## use plug-in(插件)
[{<br/>
 name: element-ui(前端框架),<br/>
 install: npm i element-ui -D,<br/>
 usage: (main.js),<br/>
 url: http://element-cn.eleme.io/#/zh-CN/component/installation<br/>
},<br/>
{<br/>
 name: normalize.css(通用样式),<br/>
 install: npm i normalize.css --save-dev,<br/>
 usage: (main.js),<br/>
 url: 'please baidu'<br/>
},<br/>
{<br/>
 name: nprogress(进度条),<br/>
 install: npm install --save nprogress,<br/>
 usage: (router/index.js),<br/>
 url: 'please baidu'<br/>
},<br/>
{<br/>
 name: js-cookie(cookie),<br/>
 install: npm install js.cookie --save,<br/>
 usage: (src/utils/auth.js),<br/>
 url: 'please baidu'<br/>
},<br/>
{<br/>
 name: axios(向后台发出请求),<br/>
 install: npm install axios --save,<br/>
 usage: (src/utils/request.js),<br/>
 url: 'please baidu'<br/>
}]


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

