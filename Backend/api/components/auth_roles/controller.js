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

  async function getByRoleId (roleId) {
    try {
      const roles = store.query(TABLE, { roleId })
      console.log('getByRoleId', roles)
      return roles
    } catch (error) {
      throw boom.internal()
    }
  }

  async function getByAuthId (authId) {
    try {
      const roles = store.query(TABLE, { authId })
      console.log('getByAuthId', roles)
      return roles
    } catch (error) {
      throw boom.internal()
    }
  }

  return {
    insert,
    getByRoleId,
    getByAuthId
  }
}
