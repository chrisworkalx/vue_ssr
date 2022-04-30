const Vue = require('vue');
const renderer = require('vue-server-renderer').createRenderer();

const express = require('express');

const server = express();

// // 构建一个vue实例
// const app = new Vue({
//   template: `
//     <div>Hello, Vue SSR</div>
//   `
// });

// // 构建一个服务端生成器

// renderer.renderToString(app, (err, html) => {
//   if (err) throw err;
//   console.log(html); //解析出来的模版字符串
// });

server.get('*', (req, res) => {
  // 构建一个vue实例
  const app = new Vue({
    data: { url: req.url },
    template: `
    <div>Hello, Vue SSR {{ url }}</div>
  `
  });
  // 构建一个服务端生成器
  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error');
      return;
    }

    res.status(200).end(`
    <DOCTYPE html>
    <html lang="en">
    <head>
      <title>Hello Vue SSR</title>
      <meta charset="utf8"/>
    </head>
    <body>${html}</body>
    </html>
  
  `);
  });
});

const port = 3000;

server.listen(port, 'localhost', (err) => {
  if (!err) {
    console.log('server is Listening at:' + port);
  }
});
