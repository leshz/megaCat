const boom = require('@hapi/boom')

const TABLE = 'users'

module.exports = (store) => {
  async function insert (user) {
    if (!user) throw boom.badData()
    const userSaved = await store.insert(TABLE, user)
    return userSaved
  }

  async function get (id) {
    return store.get(TABLE, id)
  }

  return {
    insert,
    get
  }
}
