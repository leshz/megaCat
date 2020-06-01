const config = require('../../../config/config')
const store = require(`../../../store/${config.storeMotor}`)
const ctrl = require('./controller')

module.exports = ctrl(store)
