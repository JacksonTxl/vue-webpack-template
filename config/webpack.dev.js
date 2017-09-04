const webpack = require('webpack')

const base = require('./webpack.base')

base.devtool = 'eval-source-map'
base.output.publicPath = '/assets/'
base.performance.hints = false

// Plugins Configuration
base.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
)

module.exports = base
