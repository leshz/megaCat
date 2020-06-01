'use strict'
module.exports = (sequelize, DataTypes) => {
  const rolePermission = sequelize.define('role_permission', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    roleId: DataTypes.UUID,
    permissionId: DataTypes.UUID,
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {})
  rolePermission.associate = function (models) {
    // associations can be defined here
  }
  return rolePermission
}
