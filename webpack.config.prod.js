var path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
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
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new HtmlWebpackPlugin({
      template: PATHS.templates + '/index.html',
      title: 'Olist challenge',
    })
  ],
  output: {
    filename: 'bundle.js',
    path: PATHS.build
  },
  module: {
    rules: webpackRules
  }
};