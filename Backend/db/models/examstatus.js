'use strict'
module.exports = (sequelize, DataTypes) => {
  const examStatus = sequelize.define('examStatus', {
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
  examStatus.associate = function (models) {
    // associations can be defined here
  }
  return examStatus
}
