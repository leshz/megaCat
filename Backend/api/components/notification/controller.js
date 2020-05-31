const config = require('../../../config/config')
const admin = require('firebase-admin')
// const boom = require('@hapi/boom')

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
  function setTokenToUser (profile) {
    return new Promise((resolve, reject) => {
      // if (profile === null) { reject(boom.internal) }
      // console.log(profile)
      console.log('INSERTTTT')

      store.insert(TABLE, { userId: '3b09f3f7-5f00-4643-9dfc-6a42a6eb0cb0', token: '3efg' })
        .then(e => {
          console.log(e)
          resolve(e)
        }).catch(e => {
          console.log(e, 'ERROR')
        })
    })
  }

  return {
    sendMessageMulticast,
    setTokenToUser
  }
}
