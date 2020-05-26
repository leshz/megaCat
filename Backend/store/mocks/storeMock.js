const db = require('./mockDB')

const get = jest.fn((table, id) => Promise.resolve(db[table][0]))
const list = jest.fn((table) => Promise.resolve(db[table]))
const insert = jest.fn((table, data, trx = null) => Promise.resolve(db[table][0]))
const update = jest.fn((table, id, data) => Promise.resolve(db[table][1]))
const remove = jest.fn((table, id) => Promise.resolve(true))
const query = jest.fn((table, query, join = null) => Promise.resolve(db[table]))

module.exports = {
  get,
  list,
  insert,
  update,
  remove,
  query
}
