const boom = require('@hapi/boom')

const TABLE = 'users'

module.exports = (store) => {
  async function insert (user) {
    if (!user) throw boom.badData()
    const userSaved = await store.insert(TABLE, user)
    return userSaved
  }

  return {
    insert
  }
}
