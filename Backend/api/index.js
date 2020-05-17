require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const config = require('../config.js')
const errors = require('../network/errors')
const welcome = require('./components/welcome/network')

const app = express()

app.use(bodyParser.json())
app.use('/', welcome)

app.use(errors)

app.listen(config.api.port, () => {
  console.log(`🔬API listen on port: http://localhost:${config.api.port}`)
})
