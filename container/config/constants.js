const path = require('path')
const { dependencies } = require('../package.json')
const rootPath = path.resolve(__dirname, '../')

const shared = {
  react: dependencies.react,
  'react-dom': dependencies['react-dom'],
  'object-assign': '^4.1.1',
}

const domain = process.env.PRODUCTION_DOMAIN || 'http://localhost:3001'

module.exports = {
  rootPath,
  domain,
  shared,
}
