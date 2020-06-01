const boom = require('@hapi/boom')
const nodemailer = require('nodemailer')
const config = require('../../../config/config')
const sendNewUserTemplate = require('./templates/sendNewUser')

const transport = nodemailer.createTransport({
  host: config.email.emailHost,
  port: config.email.emailPort,
  auth: {
    user: config.email.emailUser,
    pass: config.email.emailPassword
  }
})
module.exports = () => {
  async function sendNewUser (data) {
    try {
      const mailOptions = {
        from: 'not-reply@nextsteplabs.com',
        to: data.email,
        subject: 'Bienvenido a Next Step Labs',
        html: sendNewUserTemplate(data)
      }

      await transport.sendMail(mailOptions)

      return true
    } catch (error) {
      throw boom.internal()
    }
  }

  return {
    sendNewUser
  }
}
