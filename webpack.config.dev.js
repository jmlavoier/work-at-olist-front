var path = require('path');
var webpackRules = require('./scripts/webpack.rules');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  root: path.resolve(__dirname),
  build: path.resolve(__dirname, 'build'),
  src: path.resolve(__dirname, 'src'),
  templates: path.resolve(__dirname, 'templates')
}

module.exports = {
  entry: PATHS.src,
  resolve: {
    modules: [
      path.resolve(PATHS.src),
      path.resolve('./node_modules')
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: PATHS.templates + '/index.html',
      title: '[DEV] - Olist',
    })
  ],
  output: {
    filename: 'bundle.js',
    path: PATHS.build
  },
  devServer: {
    contentBase: PATHS.build,
    compress: true,
    port: 8888
  },
  module: {
    rules: webpackRules
  }
};