const rolesEnum = {
  ADMINISTRATOR: {
    id: 'd436e99b-afea-44cf-a31c-ff35b7740c67',
    name: 'administrator',
    description: 'An administrator Role',
    isDeleted: false,
    createdAt: '2020-05-15 00:00:00',
    updatedAt: '2020-05-15 00:00:00'
  },
  MEDIC: {
    id: 'a81bd60a-b09e-4936-b74a-22b823e39464',
    name: 'medic',
    description: 'A medic Role',
    isDeleted: false,
    createdAt: '2020-05-15 00:00:00',
    updatedAt: '2020-05-15 00:00:00'
  },
  BACTERIOLOGIST: {
    id: 'bf90b55d-0e69-4f31-8211-514049a42625',
    name: 'bacteriologist',
    description: 'A bacteriologist Role',
    isDeleted: false,
    createdAt: '2020-05-15 00:00:00',
    updatedAt: '2020-05-15 00:00:00'
  },
  PACIENT: {
    id: '9511dfc8-e17e-4c8e-927e-cb933f9b77f6',
    name: 'pacient',
    description: 'A pacient Role',
    isDeleted: false,
    createdAt: '2020-05-15 00:00:00',
    updatedAt: '2020-05-15 00:00:00'
  }
}

const rolesNameEnum = {
  ADMINISTRATOR: rolesEnum.ADMINISTRATOR.name,
  MEDIC: rolesEnum.MEDIC.name,
  BACTERIOLOGIST: rolesEnum.BACTERIOLOGIST.name,
  PACIENT: rolesEnum.PACIENT.name
}

const roles = [
  rolesEnum.ADMINISTRATOR,
  rolesEnum.MEDIC,
  rolesEnum.BACTERIOLOGIST,
  rolesEnum.PACIENT
]

module.exports = {
  rolesEnum,
  rolesNameEnum,
  roles
}
