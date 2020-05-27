const config = require('./config')
const database = {
  ...config.sequelize
}

module.exports = database
