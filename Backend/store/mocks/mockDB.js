const users = require('./UsersMock')

const db = {
  users,
  auths: [],
  roles: [],
  permissions: [],
  medical_records: [],
  exams_users: [],
  exams: [],
  exam_statuses: [],
  exam_types: [],
  firebase_notification_tokens: []
}

module.exports = db
