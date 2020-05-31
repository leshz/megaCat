const config = require('../../../config/config')
const admin = require('firebase-admin')
const boom = require('@hapi/boom')

const FB_APP_NAME = config.fbase.name
const FB_CERT = config.fbase.cert

const TABLE = 'firebaseNotificationTokens'

const appFirebase = admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(FB_CERT)),
  databaseURL: FB_APP_NAME
})

module.exports = (store) => {
  function sendMessageMulticast (information) {
    return new Promise((resolve, reject) => {
      const { token, message, title } = information
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
  function setTokenToUser (profile, token) {
    return new Promise((resolve, reject) => {
      if (profile === null) { reject(boom.internal) }
      store.insert(TABLE, { userId: profile.id, token: token })
        .then(response => {
          if (response.id !== '') {
            resolve(true)
          } else {
            reject(new Error(false))
          }
        }).catch(e => {
          console.log(e, 'ERROR')
          reject(new Error(false))
        })
    })
  }

  return {
    sendMessageMulticast,
    setTokenToUser
  }
}
