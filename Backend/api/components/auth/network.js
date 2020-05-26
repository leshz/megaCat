const express = require('express')
const response = require('../../../network/response')
const Controller = require('./index')
const passport = require('passport')
const router = express.Router()

// Passport Strategies
require('../../../auth/strategies/basic')

router.post('/login', passport.authenticate('basic', { session: false }), login)

function login (req, res) {
  return Controller.login((req && req.user) || null)
    .then(token => response.success(req, res, token, 200))
    .catch(() =>
      response.error(req, res, 'Invalid information', 401)
    )
}

const network = module.exports = router
network.login = login
