const { merge } = require('webpack-merge')
const { ModuleFederationPlugin } = require('webpack').container
const path = require('path')

const commonConfig = require('./webpack.common')
const { rootPath, shared } = require('./constants')

const config = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: path.join(rootPath, 'dist'),
    clean: true,
    // publicPath: '/home/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'home',
      filename: 'remoteEntry.js',
      exposes: {
        './HomeApp': './src/bootstrap',
      },
      shared,
    }),
  ],
}

module.exports = merge(commonConfig, config)
