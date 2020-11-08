### 启动项目

npm run start

### 单页应用

每次跳转只加载一个 html 页面

### 性能优化

1、使用 pureComponnet 代替 Component，pureComponnet 在底层封装了 shouldComponnetUpdate.但是需要结合 immutable 使用，否则会踩坑。
2、a 标签跳转，换成 Link 路由跳转，做单页应用跳转
