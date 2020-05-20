exports.success = (req, res, message, status) => {
  const statusCode = status || 200
  res.status(statusCode).send({
    error: false,
    status: statusCode,
    body: message
  })
}

exports.error = (req, res, error, status = 500) => {
  res.status(status).send({
    error: true,
    status: status,
    body: error
  })
}
