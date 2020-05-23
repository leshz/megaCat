exports.success = (req, res, message, status) => {
  const statusCode = status || 200
  res.status(statusCode).json({
    error: false,
    status: statusCode,
    body: message
  })
}

exports.error = (req, res, error, status = 500) => {
  res.status(status).json({
    error: true,
    status: status,
    body: error
  })
}
