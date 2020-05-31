'use strict'
const { Op } = require('sequelize')
const { roles, rolesEnum } = require('../../store/mocks/RolesMock.js')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('roles', [...roles], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('roles', {
      name: {
        [Op.in]: [
          rolesEnum.ADMINISTRATOR.name,
          rolesEnum.MEDIC.name,
          rolesEnum.BACTERIOLOGIST.name,
          rolesEnum.PACIENT.name
        ]
      }
    }, {})
  }
}
