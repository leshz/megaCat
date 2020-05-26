const Controller = require('./controller')

const express = require('express')
const response = require('../../../network/response')

const router = express.Router()

function testNotification (req, res) {
  console.log(req.body)

  return Controller.sendMessageMulticast()
    .then(data => response.success(req, res, response, 200))
    .catch(() => response.error(req, res, 'Invalid information', 401))
}

router.get('/', testNotification)
module.exports = router
