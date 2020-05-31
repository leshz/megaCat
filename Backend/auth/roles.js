const boom = require('@hapi/boom')

function roleValidationHandler (allowedRoles) {
  return function (req, res, next) {
    if (!req.user || (!req.user && !req.user.roles)) {
      next(boom.unauthorized())
    }

    const userRoles = req.user.roles.map(role => role.name)

    const hasAccess = allowedRoles
      .map(allowedRole => userRoles.includes(allowedRole))
      .find(allowed => Boolean(allowed))

    if (hasAccess) {
      next()
    } else {
      next(boom.unauthorized())
    }
  }
}

module.exports = roleValidationHandler
