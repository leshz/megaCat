require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')

const config = require('../config.js')
const errors = require('../network/errors')
const welcome = require('./components/welcome/network')
const auth = require('./components/auth/network')
const examTypes = require('./components/exams/network')
const notification = require('./components/notification/network')

const app = express()

app.use(bodyParser.json())
app.use(passport.initialize())

app.use('/', welcome)
app.use('/api/auth', auth)
app.use('/api/types', examTypes)
app.use('/notification', notification)

app.use(errors)

app.listen(config.api.port, () => {
  console.log(`🔬API listen on port: http://localhost:${config.api.port}`)
})
