const path = require('path');
const base = require('./webpack.base.js');
const { merge } = require('webpack-merge');

const resolve = (p) => path.resolve(__dirname, p);

module.exports = merge(base, {
  entry: {
    client: resolve('../src/entry-client.js')
  }
});
