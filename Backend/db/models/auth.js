'use strict'
module.exports = (sequelize, DataTypes) => {
  const auth = sequelize.define('auth', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {})
  auth.associate = function (models) {
    auth.belongsToMany(models.role, { through: models.auth_role })
  }
  return auth
}
