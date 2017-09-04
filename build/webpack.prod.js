const webpack = require('webpack')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

const base = require('../config/webpack.base')

base.output.filename = 'sdk.common.min.js'
base.stats = { children: false }

// Plugins Configuration
base.plugins.push(
  new ProgressBarPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  })
)

module.exports = base
