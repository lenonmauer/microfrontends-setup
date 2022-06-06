const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

const commonConfig = require('./webpack.common')
const { shared, devPort } = require('./constants')

const config = {
  mode: 'development',
  output: {
    publicPath: `http://localhost:${devPort}/`,
  },
  devServer: {
    port: devPort,
    historyApiFallback: {
      index: '/index.html',
    },
    hot: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'auth',
      filename: 'remoteEntry.js',
      exposes: {
        './AuthApp': './src/bootstrap',
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
