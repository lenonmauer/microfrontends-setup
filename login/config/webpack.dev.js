const { merge } = require('webpack-merge')
const { ModuleFederationPlugin } = require('webpack').container
const HtmlWebpackPlugin = require('html-webpack-plugin')

const commonConfig = require('./webpack.common')
const { shared } = require('./constants')

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    hot: false,
    port: 3002,
    historyApiFallback: {
      index: 'index.html',
    },
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
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
})
