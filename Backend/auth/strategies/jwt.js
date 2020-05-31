const passport = require('passport')
const { ExtractJwt, Strategy } = require('passport-jwt')
const boom = require('@hapi/boom')

const config = require('../../config/config')
const authService = require('../../api/components/auth')

passport.use(
  new Strategy({
    secretOrKey: config.jwt.secret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  },
  async (tokenPayload, cb) => {
    try {
      const user = await authService.get({ id: tokenPayload.id })

      if (!user || user.isDeleted) {
        return cb(boom.unauthorized(), false)
      }

      delete user.password

      return cb(null, user)
    } catch (error) {
      return cb(boom.unauthorized(), false)
    }
  })
)
