'use strict'
const { Op } = require('sequelize')
const { roles, rolesNameEnum } = require('../../store/mocks/RolesMock.js')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('roles', [...roles], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('roles', {
      name: {
        [Op.in]: [
          rolesNameEnum.ADMINISTRATOR,
          rolesNameEnum.MEDIC,
          rolesNameEnum.BACTERIOLOGIST,
          rolesNameEnum.PACIENT
        ]
      }
    }, {})
  }
}
