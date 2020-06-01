'use strict'
module.exports = (sequelize, DataTypes) => {
  const role = sequelize.define('role', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {})
  role.associate = function (models) {
    role.belongsToMany(models.auth, { through: models.auth_role })
    role.belongsToMany(models.permission, { through: models.role_permission, as: 'permissions' })
  }
  return role
}
