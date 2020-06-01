const response = require('./response')

function errors (err, req, res, next) {
  let message = 'Internal error'
  let statusCode = 500

  if (err.output && err.output.payload) {
    message = err.output.payload.message
    statusCode = err.output.payload.statusCode
  } else if (err.message || err.statusCode) {
    message = err.message || message
    statusCode = err.statusCode || statusCode
  }

  return response.error(req, res, message, statusCode)
}

module.exports = errors
