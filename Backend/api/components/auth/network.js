const express = require('express')
const response = require('../../../network/response')
const Controller = require('./index')
const passport = require('passport')
const router = express.Router()

// Passport Strategies
require('../../../auth/strategies/basic')

router.post('/login', passport.authenticate('basic', { session: false }), login)
router.get('/add_user', addUser)

function login (req, res, next) {
  return Controller.login((req && req.user) || null)
    .then(token => response.success(req, res, token, 200))
    .catch(next)
}

function addUser (req, res, next) {
  return Controller.addUser(req.body)
    .then(user => response.success(req, res, user, 201))
    .catch(next)
}

const network = module.exports = router
network.login = login
