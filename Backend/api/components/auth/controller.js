const auth = require('../../../auth/')
const boom = require('@hapi/boom')

const TABLE = 'auths'

module.exports = (store) => {
  async function get (q) {
    const user = await store.query(TABLE, q)

    return user[0]
  }
  // ToDo: Add Role data
  async function login (User) {
    if (!User) {
      throw boom.unauthorized()
    }
    const user = {
      id: User.id,
      id_number: User.id_number,
      username: User.username,
      role: 'ToDo'
    }

    const token = await auth.sign({ ...user })

    return {
      token,
      user
    }
  }

  return {
    login,
    get
  }
}
