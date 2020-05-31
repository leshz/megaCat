const passport = require('passport')
const { BasicStrategy } = require('passport-http')
const boom = require('@hapi/boom')
const bcrypt = require('bcrypt')

const authService = require('../../api/components/auth')

passport.use(new BasicStrategy(async (username, password, cb) => {
  try {
    const user = await authService.get({ username })

    if (!user || user.isDeleted) {
      return cb(boom.unauthorized(), false)
    }

    const isValidLogin = await bcrypt.compare(password, user.password)

    if (!isValidLogin) {
      return cb(boom.unauthorized(), false)
    }
    return cb(null, user)
  } catch (error) {
    return cb(error)
  }
}))
