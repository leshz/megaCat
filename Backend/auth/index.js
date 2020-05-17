const jwt = require('jsonwebtoken')
const config = require('../config')
const secret = config.jwt.secret

async function sign (data) {
  return jwt.sign(data, secret, {
    expiresIn: '90m'
  })
}

module.exports = {
  sign
}
