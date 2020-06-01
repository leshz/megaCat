require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const config = require('../config/config')
const errors = require('../network/errors')
const welcome = require('./components/welcome/network')
const auth = require('./components/auth/network')
const examTypes = require('./components/exams/network')
const notification = require('./components/notification/network')

const app = express()

const whitelist = ['http://localhost:8080', 'https://nextep-lab.herokuapp.com']
app.use(cors({
  credentials: true,
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(passport.initialize())

app.use('/', welcome)
app.use('/api/auth', auth)
app.use('/api/types', examTypes)
app.use('/api/notification', notification)

app.use(errors)

app.listen(config.api.port || 5000, () => {
  console.log(`🔬API listen on port: http://localhost:${config.api.port}`)
})
