const { nanoid } = require('nanoid')

const db = {
  users: [],
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

async function list (table) {
  return db[table]
}
async function get (table, id) {
  const collection = await list(table)
  const item = new Promise((resolve, reject) => {
    const itemRecord = collection.find(item => item.id === id) || null
    if (itemRecord) {
      return resolve(itemRecord)
    } else {
      return reject(new Error(`${table} not found`))
    }
  })

  return { ...item }
}
async function insert (table, data) {
  if (!db[table]) {
    db[table] = []
  }
  const id = data.id || nanoid()

  db[table].push({ ...data, id })
  console.log('/////////////////////////////////////////////')
  console.log('/////////////////////////////////////////////')
  console.log(db)
  console.log('/////////////////////////////////////////////')
  console.log('/////////////////////////////////////////////')

  return { ...db[table].find(item => item.id === id) }
}
async function update (table, id, data) {
  if (!db[table]) {
    db[table] = []
  }

  const itemIndex = db[table].findIndex(item => item.id === id)

  if (itemIndex >= 0) {
    db[table][itemIndex] = { ...db[table][itemIndex], ...data }
  }

  console.log('/////////////////////////////////////////////')
  console.log('/////////////////////////////////////////////')
  console.log(db)
  console.log('/////////////////////////////////////////////')
  console.log('/////////////////////////////////////////////')

  return { ...db[table][itemIndex] }
}

async function remove (table, id) {
  return true
}

async function query (table, q) {
  const collection = await list(table)
  const keys = Object.keys(q)
  const key = keys[0]
  const results = collection.filter(item => item[key] === q[key]) || null
  return results && results.length > 0 ? [...results] : null
}

module.exports = {
  list,
  get,
  insert,
  update,
  remove,
  query
}
