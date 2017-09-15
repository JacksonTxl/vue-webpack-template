var webpack = require('webpack');
var path = require('path');
const base = require('../config/webpack.base')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

base.entry = {
  'npm-pkg-demo': './packages/index.js'
};
base.output.path = path.join(__dirname, '../lib'),
base.output.filename = 'common.js'
base.output.library = 'NpmPkgDemo'
base.output.libraryTarget = 'umd'
delete base.resolve

base.plugins = []
// Plugins Configuration
base.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  })
  // ,
  // new webpack.optimize.UglifyJsPlugin({
  //   compress: {
  //     warnings: false
  //   }
  // })
)

// Rules Configuration
base.module.rules.push({
  test: /\.vue$/,
  loader: 'vue-loader',
  options: {
    extractCSS: false,
    preserveWhitespace: false
  }
})

base.module.rules.push({
  test: /\.css$/,
  loader: ExtractTextPlugin.extract({
    use: [{ loader: 'css-loader' }, 'postcss-loader'],
    fallback: 'style-loader',
    publicPath: "../"
  })
})
base.module.rules.push({
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract({
    use: [{ loader: 'css-loader' },{ loader: 'sass-loader' }, 'postcss-loader'],
    fallback: 'style-loader',
    publicPath: "../"
  })
})

module.exports = base

