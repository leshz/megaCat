const Controller = require('./index')

const express = require('express')
const response = require('../../../network/response')
const passport = require('passport')
const router = express.Router()

router.get('/', testNotification)
router.post('/setToken', passport.authenticate('basic', { session: true }), addTokentoUser)

function testNotification (req, res) {
  return Controller.sendMessageMulticast(req.body)
    .then(data => {
      console.log('data', data)
      response.success(req, res, data, 200)
    })
    .catch((err) => {
      response.error(req, res, err, 401)
    })
}

function addTokentoUser (req, res) {
  return Controller.setTokenToUser((req && req.user) || null, res.body)
    .then(data => {
      response.success(req, res, data, 200)
    })
    .catch(err => {
      response.error(req, res, err, 401)
    })
}

module.exports = router
