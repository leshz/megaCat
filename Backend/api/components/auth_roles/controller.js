const boom = require('@hapi/boom')
const TABLE = 'auth_roles'
module.exports = (store) => {
  async function insert (authId, roleId) {
    try {
      await store.insert(TABLE, { authId, roleId })
      return true
    } catch (error) {
      throw boom.internal()
    }
  }

  return {
    insert
  }
}
