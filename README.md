# order-app

dva + react

# 安装脚手架

npm install dva-cli -g

# 创建dva项目

dva new order-app

# 修改文件结构

routes =》 pages

src/index.js =>

// 3. Model
app.model(require('./models/global').default);

清楚文件夹下的多余demo文件

# 安装scss antd

npm i node-sass sass-loader antd --save

# antd按需加载

npm i  babel-plugin-import --save

# 配置按需加载

.webpackrc  =》 .webpackrc.js

extraBabelPlugins: [
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }]
  ];

# antd vsCode 插件

Ant Design Snippets

## 问题记录   dva使用scss-loader 最新版本8.x过高导致编译scss出问题，需要降低依赖版本到7.x

npm uninstall sass-loader（卸载当前版本）

npm install sass-loader@7.3.1 --save-dev  （安装7.x版本）

# 安装react编写插件

ES7 React/Redux/GraphQL/React-Native snippets

# 路由

import {Switch, Route, Redirect} from 'dva/router';

一级路由 重定向

router.js => 去掉 exact  （否则影响路由页面的显示）
