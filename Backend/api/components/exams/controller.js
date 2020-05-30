
const bloodExamn = require('../../../store/mocks/exams/BoodExam')
// const TABLE = 'exam_types'

module.exports = (store) => {
  const get = async () => {
    // const q = 'get all types of exams'
    // const types = await store.query(TABLE, q)
    const types = bloodExamn
    return types
  }
  return { get }
}
