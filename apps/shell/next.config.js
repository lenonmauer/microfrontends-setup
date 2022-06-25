/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config, options) => {
    const { ModuleFederationPlugin } = options.webpack.container

    config.plugins.push(
      new ModuleFederationPlugin({
        name: 'shell',
        remotes: {
          '@mfe/home': 'home@http://localhost:3001/remoteEntry.js',
          '@mfe/auth': 'auth@http://localhost:3002/remoteEntry.js',
        },
        shared: [],
      })
    )

    return config
  },
}

module.exports = nextConfig
