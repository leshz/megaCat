const express = require('express')
const supertest = require('supertest')

function testServer (route) {
  const app = express()
  app.use('/', route)
  return supertest(app)
}

module.exports = testServer
