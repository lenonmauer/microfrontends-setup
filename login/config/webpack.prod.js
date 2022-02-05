const path = require('path')
const { merge } = require('webpack-merge')
const { ModuleFederationPlugin } = require('webpack').container

const commonConfig = require('./webpack.common')
const { rootPath, shared } = require('./constants')

const config = {
  entry: path.join(rootPath, 'src/index.ts'),
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: path.join(rootPath, 'dist'),
    clean: true,
    // publicPath: '/login/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'login',
      filename: 'remoteEntry.js',
      exposes: {
        './LoginApp': './src/bootstrap',
      },
      shared,
    }),
  ],
}

module.exports = merge(commonConfig, config)
