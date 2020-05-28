'use strict'
module.exports = (sequelize, DataTypes) => {
  const examType = sequelize.define('examType', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    templateContent: DataTypes.JSON,
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {})
  examType.associate = function (models) {
    // associations can be defined here
  }
  return examType
}
