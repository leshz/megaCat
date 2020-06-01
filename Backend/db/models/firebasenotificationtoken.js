'use strict'
module.exports = (sequelize, DataTypes) => {
  const firebaseNotificationToken = sequelize.define('firebaseNotificationToken', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    userId: DataTypes.UUID,
    token: DataTypes.JSON,
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {})
  firebaseNotificationToken.associate = function (models) {
    firebaseNotificationToken.belongsTo(models.user, { foreignKey: 'userId' })
  }
  return firebaseNotificationToken
}
