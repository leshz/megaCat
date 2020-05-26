require('dotenv').config()

module.exports = {
  api: {
    port: process.env.API_PORT || 3000
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'secret'
  },
  knex: {
    host: process.env.KNEX_HOST || '',
    user: process.env.KNEX_USER || '',
    password: process.env.KNEX_PASSWORD || '',
    database: process.env.KNEX_DATABASE || '',
    port: process.env.KNEX_PORT || '',
    client: process.env.KNEX_CLIENT || ''
  },
  dbMotor: process.env.DB_MOTOR || 'dummy',
  fbase: {
    name: process.env.FB_APP_NAME || '',
    cert: process.env.FB_CERT || {}
  }
}
