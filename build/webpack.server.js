const path = require('path');
const base = require('./webpack.base.js');
const { merge } = require('webpack-merge');
const HtmlWepackPlugin = require('html-webpack-plugin');
const resolve = (p) => path.resolve(__dirname, p);

module.exports = merge(base, {
  entry: {
    server: resolve('../src/entry.server.js')
  },
  target: 'node',
  output: {
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new HtmlWepackPlugin({
      filename: 'index.ssr.html',
      template: resolve('../public/index.ssr.html'),
      //排除加载server.js
      // 因为需要客户端动态注入js
      excludeChunks: ['server'],
      minify: {
        //不需要删除注释
        removeComments: false
      }
    })
  ]
});
