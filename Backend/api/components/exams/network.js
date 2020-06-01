const express = require('express')
const router = express.Router()
const Controller = require('./index')
const response = require('../../../network/response')

function typeOfExman (req, res) {
  return Controller.get()
    .then(data => {
      response.success(req, res, data, 200)
    })
    .catch(() =>
      response.error(req, res, 'Invalid information', 401)
    )
}

router.get('/', typeOfExman)
const network = module.exports = router
network.typeOfExman = typeOfExman
