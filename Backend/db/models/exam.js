'use strict'
module.exports = (sequelize, DataTypes) => {
  const exam = sequelize.define('exam', {
    content: DataTypes.JSON,
    reservationDate: DataTypes.DATE,
    statusId: DataTypes.UUID,
    medicId: DataTypes.UUID,
    bacteriologistId: DataTypes.UUID,
    typeId: DataTypes.UUID,
    isDeleted: DataTypes.BOOLEAN
  }, {})
  exam.associate = function (models) {
    // associations can be defined here
  }
  return exam
}
