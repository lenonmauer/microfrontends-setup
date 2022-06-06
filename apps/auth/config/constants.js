const path = require('path')
const { dependencies } = require('../package.json')
const rootPath = path.resolve(__dirname, '..')

const devPort = 3002

const shared = {
  react: {
    singleton: true,
    requiredVersion: dependencies['react'],
  },
  'react-dom': {
    singleton: true,
    requiredVersion: dependencies['react-dom'],
  },
  'object-assign': '^4.1.1',
  'react/jsx-runtime': '*',
  '@emotion/core': dependencies['@emotion/core'],
  '@emotion/react': dependencies['@emotion/react'],
  '@emotion/styled': dependencies['@emotion/styled'],
  // '@babel/runtime': dependencies['@babel/runtime'],
}

module.exports = { rootPath, shared, devPort }
