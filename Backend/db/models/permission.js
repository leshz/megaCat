'use strict'
module.exports = (sequelize, DataTypes) => {
  const permission = sequelize.define('permission', {
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
  permission.associate = function (models) {
    permission.belongsToMany(models.role, { through: models.role_permission })
  }
  return permission
}
