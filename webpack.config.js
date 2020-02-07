const development = require('./webpack/development')
const production = require('./webpack/production')

const { NODE_ENV = 'development' } = process.env
if (NODE_ENV === 'development') {
    module.exports = development
  } else {
    module.exports = production
  }
  