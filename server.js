const fs = require('fs');

const path = require('path');

const Vue = require('vue');

const Koa = require('koa');

const KoaRouter = require('@koa/router');

const KoaStatic = require('koa-static');

const VueServerRenderer = require('vue-server-renderer');

const resolve = (p) => path.resolve(__dirname, p);

//读取server打包的资源
const serverBundle = fs.readFileSync(
  resolve('./dist/server.bundle.js'),
  'utf-8'
);
const template = fs.readFileSync(resolve('./dist/index.ssr.html'), 'utf-8');
//需要将bundle注入到页面上
const renderer = VueServerRenderer.createBundleRenderer(serverBundle, {
  template
});
const app = new Koa();

const router = new KoaRouter();

router.get('(.*)', async (ctx) => {
  // ctx.body = 'hello koa';
  // renderer.renderToString()是异步过程
  ctx.body = await renderer.renderToString();
});
//静态文件托管
app.use(KoaStatic(resolve('./dist')));
app.use(router.routes());

app.listen(3000, () => {
  console.log('服务正在启动3000端口');
});
