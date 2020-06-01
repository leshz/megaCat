const pluralize = require('pluralize')
const store = require('../db/models')

const DEFAULTS = {
  ITEMS_PER_PAGE: 5,
  CURRENT_PAGE: 1
}
const toJSON = (data) => JSON
  .parse(JSON.stringify(data))

const pagination = (count, rows, itemsPerPage, currentPage) => ({
  total: count,
  itemsPerPage,
  lastPage: Math.ceil(count / itemsPerPage),
  page: currentPage,
  rows: [...rows]
})
async function list (table, paginationConfig) {
  const model = pluralize.singular(table)
  const config = {}

  if (paginationConfig) {
    const itemsPerPage = paginationConfig.itemsPerPage || DEFAULTS.ITEMS_PER_PAGE
    const currentPage = paginationConfig.currentPage || DEFAULTS.CURRENT_PAGE
    config.limit = paginationConfig.itemsPerPage || DEFAULTS.ITEMS_PER_PAGE
    config.offset = currentPage <= 1 ? 0 : (currentPage - 1) * config.limit

    const results = await store[model].findAndCountAll({
      ...config,
      distinct: true,
      raw: true
    }).then(({ count, rows }) => pagination(count, rows, itemsPerPage, currentPage))

    return toJSON(results)
  }

  return store[model].findAll({
    ...config
  })
}
async function get (table, id) {
  const model = pluralize.singular(table)
  return store[model].findByPk(id, { raw: true })
}
async function insert (table, data) {
  const model = pluralize.singular(table)
  return store[model].create(data, { raw: true })
}
async function update (table, id, data) {
  const model = pluralize.singular(table)
  return store[model].update({ ...data }, { where: { id }, raw: true })
}
async function remove (table, id) {
  const model = pluralize.singular(table)
  const instance = await store[model].findByPk(id)
  await instance.destroy()
  return true
}
async function query (table, where, paginationConfig = null, include = null) {
  const model = pluralize.singular(table)
  const config = {}
  if (where) {
    config.where = where
  }

  if (include) {
    config.include = include
  }

  if (paginationConfig) {
    const itemsPerPage = paginationConfig.itemsPerPage || DEFAULTS.ITEMS_PER_PAGE
    const currentPage = paginationConfig.currentPage || DEFAULTS.CURRENT_PAGE
    config.limit = paginationConfig.itemsPerPage || DEFAULTS.ITEMS_PER_PAGE
    config.offset = currentPage <= 1 ? 0 : (currentPage - 1) * config.limit

    const results = await store[model].findAndCountAll({
      ...config,
      distinct: true,
      raw: true
    }).then(({ count, rows }) => pagination(count, rows, itemsPerPage, currentPage))

    return toJSON(results)
  }

  const results = await store[model].findAll({
    ...config
  })
  return toJSON(results)
}

function model (model) {
  return store[model]
}

module.exports = {
  list,
  get,
  insert,
  update,
  remove,
  query,
  model
}
