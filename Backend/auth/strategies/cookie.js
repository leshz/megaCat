const passport = require('passport')
const boom = require('@hapi/boom')
const CookieStrategy = require('passport-cookie')
const config = require('../../config/config')
const authService = require('../../api/components/auth')
const { verify } = require('jsonwebtoken')

passport.use(new CookieStrategy(
  async function (token, cb) {
    try {
      const userData = await verify(token, config.jwt.secret)

      const user = await authService.get({ id: userData.id })

      if (!user || user.isBloqued) {
        return (boom.unauthorized(), null)
      }
      delete user.password

      return cb(null, user)
    } catch (error) {
      return cb(boom.unauthorized(), null)
    }
  }
))
