require('dotenv').config()

const dbConfig = {
  username: process.env.DB_USERNAME || null,
  password: process.env.DB_PASSWORD || null,
  database: process.env.DB_DATABASE || 'DBDemo',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || '5432',
  dialect: process.env.DB_DIALECT || 'sqlite'
}

module.exports = {
  api: {
    port: process.env.PORT || 5000
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
  fbase: {
    name: process.env.FB_APP_NAME || '',
    cert: process.env.FB_CERT || {}
  },
  dbMotor: process.env.DB_MOTOR || 'dummy',
  sequelize: {
    development: {
      ...dbConfig
    },
    test: {
      ...dbConfig
    },
    production: { ...dbConfig, logging: false }
  }
}
