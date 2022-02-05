const { merge } = require('webpack-merge')
const { ModuleFederationPlugin } = require('webpack').container

const commonConfig = require('./webpack.common')
const { shared } = require('./constants')

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    hot: false,
    port: 3000,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        home: 'home@http://localhost:3001/remoteEntry.js',
        login: 'login@http://localhost:3002/remoteEntry.js',
      },
      shared,
    }),
  ],
})
