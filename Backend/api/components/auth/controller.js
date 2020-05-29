const boom = require('@hapi/boom')
const cryptoRandomString = require('crypto-random-string')
const bcrypt = require('bcrypt')
const auth = require('../../../auth/')
const { generateUsername } = require('../../../utils/userUtils')
const userCtrl = require('../user/index')

const TABLE = 'auths'
const saltRounds = 10

module.exports = (store) => {
  async function get (q) {
    if (!q) throw boom.badData()
    const user = await store.query(TABLE, q)

    return user[0]
  }

  async function addUser (userData) {
    try {
      if (!userData) throw new Error('no data')

      const { idNumber, firstName, lastName, email, contactNumber, address } = userData

      let username = generateUsername(idNumber, firstName, lastName)
      const password = cryptoRandomString({ length: 16, type: 'base64' })

      const hasUsername = await store.query(TABLE, { username })

      if (hasUsername.length > 0) {
        const randomNumber = () => Math.ceil(Math.random() * 9)
        username = `${username.slice(0, -2)}${randomNumber()}${randomNumber()}`
      }

      const authData = {
        username,
        password: await bcrypt.hash(password, saltRounds)
      }

      const user = await userCtrl.insert({
        idNumber,
        firstName,
        lastName,
        email,
        contactNumber,
        address,
        username
      })

      await store.insert(TABLE, { ...authData, id: user.id })
      // ToDo: Add role
      // ToDo: Send email

      return true
    } catch (error) {
      throw boom.badRequest()
    }
  }
  // ToDo: Add Role data
  async function login (User) {
    try {
      if (!User) {
        throw boom.unauthorized()
      }
      const user = {
        id: User.id,
        idNumber: User.idNumber,
        username: User.username,
        role: 'ToDo'
      }

      const token = await auth.sign({ ...user })

      return {
        token,
        user
      }
    } catch (error) {
      throw boom.badRequest()
    }
  }

  return {
    login,
    get,
    addUser
  }
}
