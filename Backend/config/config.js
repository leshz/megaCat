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
  email: {
    emailHost: process.env.EMAIL_HOST || '',
    emailPort: process.env.EMAIL_PORT || '',
    emailUser: process.env.EMAIL_USER || '',
    emailPassword: process.env.EMAIL_PASSWORD || ''
  },
  knex: {
    host: process.env.KNEX_HOST || '',
    user: process.env.KNEX_USER || '',
    password: process.env.KNEX_PASSWORD || '',
    database: process.env.KNEX_DATABASE || '',
    port: process.env.KNEX_PORT || '',
    client: process.env.KNEX_CLIENT || ''
  },
  storeMotor: process.env.STORE_MOTOR || 'dummy',
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
