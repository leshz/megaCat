const config = require('../../../config/config')
const admin = require('firebase-admin')
const FB_APP_NAME = config.fbase.name
const FB_CERT = config.fbase.cert

const appFirebase = admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(FB_CERT)),
  databaseURL: FB_APP_NAME
})

const sendMessageMulticast = (informaton) => {
  return new Promise((resolve, reject) => {
    const { token, message, title } = informaton
    const notification = {
      token: token,
      data: {
        title: title,
        body: message
      }
    }
    appFirebase
      .messaging()
      .send(notification)
      .then((e) => resolve(e))
      .catch((err) => reject(err))
  })
}

module.exports = { sendMessageMulticast }
