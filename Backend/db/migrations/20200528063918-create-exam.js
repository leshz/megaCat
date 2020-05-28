'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('exams', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        unique: true
      },
      content: {
        type: Sequelize.JSON
      },
      reservationDate: {
        type: Sequelize.DATE
      },
      statusId: {
        type: Sequelize.UUID
      },
      medicId: {
        type: Sequelize.UUID
      },
      bacteriologistId: {
        type: Sequelize.UUID
      },
      typeId: {
        type: Sequelize.UUID
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('exams')
  }
}
