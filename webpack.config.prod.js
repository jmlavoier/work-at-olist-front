var path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var webpackRules = require('./scripts/webpack.rules');


const PATHS = {
  root: path.resolve(__dirname, 'build'),
  build: path.resolve(__dirname, 'build'),
  docs: path.resolve(__dirname, 'docs'),
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
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })
  ],
  output: {
    filename: 'bundle.js',
    path: PATHS.docs
  },
  module: {
    rules: webpackRules
  }
};