const errors = require('../errors')
jest.mock('../response.js', () => ({
  error: (req, res, message, statusCode) => ({ error: true, status: statusCode, body: message })
}))
const boom = require('@hapi/boom')
describe('Error Middleware', () => {
  describe('Boom error', () => {
    it('should manage boom error ', () => {
      const expectedResult = {
        error: true,
        status: 401,
        body: 'Unauthorized'
      }
      expect(errors(boom.unauthorized())).toEqual(expectedResult)
    })
  })

  describe('Regular error', () => {
    it('should manage regular error', () => {
      const expectedResult = {
        error: true,
        status: 500,
        body: 'Regular error'
      }

      const regularError = new Error(expectedResult.body)

      expect(errors(regularError)).toEqual(expectedResult)
    })
  })
})
