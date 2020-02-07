const base = require('./base')
module.exports = {
    ...base,
    mode: 'development',
    watch: true,
    watchOptions: {
        poll: 1000,
        aggregateTimeout: 600
    }
}