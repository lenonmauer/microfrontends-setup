const { merge } = require('webpack-merge')
const path = require('path')
const { ModuleFederationPlugin } = require('webpack').container

const commonConfig = require('./webpack.common')
const { domain, rootPath, shared } = require('./constants')

const config = {
  entry: path.join(rootPath, 'src/index.ts'),
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: path.join(rootPath, 'dist'),
    clean: true,
    // publicPath: '/container/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        home: `home@${domain}/remoteEntry.js`,
        login: `login@${domain}/remoteEntry.js`,
      },
      shared,
    }),
  ],
}

module.exports = merge(commonConfig, config)
