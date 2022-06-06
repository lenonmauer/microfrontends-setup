const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

const commonConfig = require('./webpack.common')
const { shared } = require('./constants')

const config = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:3001/',
  },
  devServer: {
    port: 3001,
    historyApiFallback: {
      index: '/index.html',
    },
    hot: false,
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
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  stats: 'errors-only',
}

module.exports = merge(commonConfig, config)
