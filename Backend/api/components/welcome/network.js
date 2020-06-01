const express = require('express')
const router = express.Router()
const response = require('../../../network/response')

router.get('/', welcome)

function welcome (req, res) {
  const message = '🔬 Welcome to Exam Management System for Clinical Laboratories API'
  response.success(req, res, message)
}

module.exports = router
