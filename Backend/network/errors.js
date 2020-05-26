const response = require('./response')

function errors (err, req, res, next) {
  const {
    message = 'Internal error',
    statusCode = 500
  } = err
  response.error(req, res, message, statusCode)
}

module.exports = errors
