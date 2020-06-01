'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('medicalrecords', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        unique: true
      },
      birthdate: {
        type: Sequelize.DATE
      },
      blodType: {
        type: Sequelize.STRING
      },
      allergies: {
        type: Sequelize.TEXT
      },
      weight: {
        type: Sequelize.STRING
      },
      heigth: {
        type: Sequelize.STRING
      },
      medicationNotes: {
        type: Sequelize.TEXT
      },
      diabetes: {
        type: Sequelize.BOOLEAN
      },
      smoking: {
        type: Sequelize.BOOLEAN
      },
      alcoholism: {
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('medicalrecords')
  }
}
