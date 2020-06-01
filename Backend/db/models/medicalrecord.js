'use strict'
module.exports = (sequelize, DataTypes) => {
  const medicalRecord = sequelize.define('medicalRecord', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    birthdate: DataTypes.DATE,
    blodType: DataTypes.STRING,
    allergies: DataTypes.TEXT,
    weight: DataTypes.STRING,
    heigth: DataTypes.STRING,
    medicationNotes: DataTypes.TEXT,
    diabetes: DataTypes.BOOLEAN,
    smoking: DataTypes.BOOLEAN,
    alcoholism: DataTypes.BOOLEAN,
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {})
  medicalRecord.associate = function (models) {
    // associations can be defined here
  }
  return medicalRecord
}
