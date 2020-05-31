const store = require('../../../store/sequelize')
const ctrl = require('./controller')

module.exports = ctrl(store)
