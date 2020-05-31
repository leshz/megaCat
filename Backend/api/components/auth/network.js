const express = require('express')
const response = require('../../../network/response')
const Controller = require('./index')
const passport = require('passport')
const roleValidationHandler = require('../../../auth/roles')
const { rolesNameEnum } = require('../../../store/mocks/RolesMock')
const router = express.Router()

// Passport Strategies
require('../../../auth/strategies/basic')
require('../../../auth/strategies/cookie')
require('../../../auth/strategies/jwt')

router.post('/login', passport.authenticate('basic', { session: false }), login)
router.get(
  '/add_user',
  passport.authenticate(['jwt', 'cookie'], { session: false }),
  roleValidationHandler([rolesNameEnum.ADMINISTRATOR]),
  addUser
)

function login (req, res, next) {
  return Controller.login((req && req.user) || null)
    .then(data => {
      res.cookie('token', data.token, { maxAge: 5400000, httpOnly: true })
      response.success(req, res, data, 200)
    })
    .catch(next)
}

function addUser (req, res, next) {
  return Controller.addUser(req.body)
    .then(user => response.success(req, res, user, 201))
    .catch(next)
}

const network = module.exports = router
network.login = login
