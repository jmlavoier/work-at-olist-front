var path = require('path');
var webpackRules = require('../scripts/webpack.rules');

module.exports = (base) => {
  base.resolve.modules = ['node_modules', '../src'];
  base.module = Object.assign({}, base.module, {
    rules: webpackRules
  })

  return base;
};
