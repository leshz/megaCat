const users = require('./UsersMock')
const auths = require('./AuthMock')

const db = {
  users,
  auths,
  roles: [],
  permissions: [],
  medicalrecords: [],
  exams: [],
  examStatuses: [],
  examTypes: [],
  role_permissions: [],
  auth_roles: [],
  firebase_notification_tokens: []
}

module.exports = db
