const config = require('../../../config.js')
const admin = require('firebase-admin')
const FB_APP_NAME = config.fbase.name
const FB_CERT = config.fbase.cert

const appFirebase = admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(FB_CERT)),
  databaseURL: FB_APP_NAME
})

const sendMessageMulticast = (informaton) => {
  const { title, body, token } = informaton
  const notification = { notification: { title, body }, token }
  return appFirebase.messaging(notification)
    .send()
    .then(e => e)
    .catch(err => {
      console.log(err.message)
    })
}

module.exports = { sendMessageMulticast }
