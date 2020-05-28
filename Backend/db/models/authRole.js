'use strict'
module.exports = (sequelize, DataTypes) => {
  const authRole = sequelize.define('auth_role', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    authId: DataTypes.UUID,
    roleId: DataTypes.UUID,
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {})
  authRole.associate = function (models) {
    authRole.belongsTo(models.auth, { foreignKey: 'authId' })
    authRole.belongsTo(models.role, { foreignKey: 'roleId' })
  }
  return authRole
}
