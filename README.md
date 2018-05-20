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
#use plug-in(插件)
[{
  name: element-ui,
  install: npm i element-ui -D,
  usage: (main.js),
  url: http://element-cn.eleme.io/#/zh-CN/component/installation
},
{
  name: normalize.css,
  install: npm i normalize.css --save-dev,
  usage: (main.js),
  url: 'please baidu'
},
{
  name: nprogress,
  install: npm install --save nprogress,
  usage: (router/index.js),
  url: 'please baidu'
}]


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

