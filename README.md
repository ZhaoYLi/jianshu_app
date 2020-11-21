### 启动项目

npm run start

### 单页应用

每次跳转只加载一个 html 页面

### 性能优化

1、使用 pureComponnet 代替 Component，pureComponnet 在底层封装了 shouldComponnetUpdate.但是需要结合 immutable 使用，否则会踩坑。
2、a 标签跳转，换成 Link 路由跳转，做单页应用跳转

### 获取上一个页面传递的参数

#### 动态路由形式（/）

link to：url/id route path: /url/:id
取：this.props.match.params.xxx

#### 问号形式（？）

link to：url?id= '' route path: /url
取：手动解析 this.props.location.search

### 异步加载组件

使用 react-loadable 库
实现按需加载的效果
