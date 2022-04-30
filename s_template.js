const Vue = require('vue');
const VueServerRenderer = require('vue-server-renderer');
const fs = require('fs');
const path = require('path');
const express = require('express');

const server = express();

const template = fs.readFileSync(
  path.resolve(__dirname, './index.template.html'),
  'utf-8'
);

//创建一个模版
const renderer = VueServerRenderer.createRenderer({
  template
});
server.get('*', (req, res) => {
  // 构建一个vue实例
  const app = new Vue({
    data: { url: req.url },
    template: `
    <div>Hello, Vue SSR {{ url }}</div>
  `
  });

  const context = {
    title: '学习Vue_SSR',
    styles: `
      <style>body {background-color: red;}</style>
    `
  };
  // 构建一个服务端生成器
  renderer.renderToString(app, context, (err, html) => {
    // console.log(html结果如下)
    // <!DOCTYPE html>
    // <html lang="en">
    //   <head>
    //     <meta charset="UTF-8" />
    //     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    //     <title>Vue SSR</title>
    //   </head>
    //   <body>
    //     <div data-server-rendered="true">Hello, Vue SSR /user</div>
    //   </body>
    // </html>
    if (err) {
      res.status(500).end('Internal Server Error');
      return;
    }

    res.status(200).end(html);
  });
});

const port = 3000;

server.listen(port, 'localhost', (err) => {
  if (!err) {
    console.log('server is Listening at:' + port);
  }
});
