const boom = require('@hapi/boom')
const nodemailer = require('nodemailer')
const config = require('../../../config/config')

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
    const mailOptions = {
      from: 'not-reply@nextsteplabs.com',
      to: data.email,
      subject: 'Bienvenido a Next Step Labs',
      html: `
        <h1>Hola ${data.firstName} ${data.lastName}</h1>
        <p>Le damos la bienvenida a NextStep Labs, use estas credenciales en nuestra plataforma para acceder a todas las características creadas para usted:</p>

        <ul>
          <li><strong>Username: </strong>${data.username}</li>
          <li><strong>Password: </strong>${data.password}</li>
        </ul>
      `
    }
    transport.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err)
        return boom.internal()
      }

      console.log('Email sent' + info.response)
      return true
    })
  }

  return {
    sendNewUser
  }
}
