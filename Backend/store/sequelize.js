const store = require('../db/models')

const DEFAULTS = {
  ITEMS_PER_PAGE: 5,
  CURRENT_PAGE: 1
}

const pagination = (count, rows, itemsPerPage, currentPage) => ({
  total: count,
  itemsPerPage,
  lastPage: Math.ceil(count / itemsPerPage),
  page: currentPage,
  rows: [...rows]
})
async function list (model, paginationConfig) {
  const config = {}

  if (paginationConfig) {
    const itemsPerPage = paginationConfig.itemsPerPage || DEFAULTS.ITEMS_PER_PAGE
    const currentPage = paginationConfig.currentPage || DEFAULTS.CURRENT_PAGE
    config.limit = paginationConfig.itemsPerPage || DEFAULTS.ITEMS_PER_PAGE
    config.offset = currentPage <= 1 ? 0 : (currentPage - 1) * config.limit

    return store[model].findAndCountAll({
      ...config,
      distinct: true
    }).then(({ count, rows }) => pagination(count, rows, itemsPerPage, currentPage))
  }

  return store[model].findAll({
    ...config
  })
}
async function get (model, id) {
  return store[model].findByPk(id)
}
async function insert (model, data) {
  return store[model].create(data)
}
async function update (model, id, data) {
  return store[model].update({ ...data }, { where: { id } })
}
async function remove (model, id) {
  const instance = await store[model].findByPk(id)
  await instance.destroy()
  return true
}
async function query (model, where, paginationConfig = null, include = null) {
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

    return store[model].findAndCountAll({
      ...config,
      distinct: true
    }).then(({ count, rows }) => pagination(count, rows, itemsPerPage, currentPage))
  }

  return store[model].findAll({
    ...config
  })
}

module.exports = {
  list,
  get,
  insert,
  update,
  remove,
  query
}
