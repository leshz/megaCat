const Controller = require('./index')

const express = require('express')
const response = require('../../../network/response')

const router = express.Router()

router.get('/', testNotification)

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

module.exports = router
