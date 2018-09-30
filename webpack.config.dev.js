var path = require('path');
var webpackRules = require('./scripts/webpack.rules');

const PATHS = {
  root: path.resolve(__dirname, 'build'),
  build: path.resolve(__dirname, 'build'),
  src: path.resolve(__dirname, 'src')
}

module.exports = {
  entry: PATHS.src,
  resolve: {
    modules: [
      path.resolve(PATHS.src),
      path.resolve('./node_modules')
    ]
  },
  output: {
    filename: 'bundle.js',
    path: PATHS.build
  },
  devServer: {
    contentBase: PATHS.root,
    compress: true,
    port: 8888
  },
  module: {
    rules: webpackRules
  }
};