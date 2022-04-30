# vue_ssr

## vue_ssr 服务端渲染

### vue2.x基于版本服务端渲染

- 主要目的是服务端渲染 可以加快页面渲染速度 区别于vue spa单页面节点挂载
- 可以更有利于seo优化 爬虫

1. 基于webpack4.x版本构建vue开发环境

```代码
最终渲染到源代码
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue SSR</title>
  </head>
  <body>
    <div data-server-rendered="true">Hello, Vue SSR /user/gg</div>
  </body>
</html>
```

```npm包

npm install vue@2.x vue-server-renderer@2.x -S
```
