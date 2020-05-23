const express = require('express')
const supertest = require('supertest')
const errors = require('../network/errors')

function testServer (route) {
  const app = express()
  app.use('/', route)
  app.use(errors)
  return supertest(app)
}

module.exports = testServer
