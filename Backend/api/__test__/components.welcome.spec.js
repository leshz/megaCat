const testServer = require('../../utils/testServer')

describe('API | Components | Welcome', () => {
  const route = require('../components/welcome/network')
  const request = testServer(route)
  const message = '🔬 Welcome to Exam Management System for Clinical Laboratories API'
  describe('Network', () => {
    it('should respond with status 201', (done) => {
      request.get('/').expect(200, done)
    })

    it('should respond with a response.success structure', (done) => {
      const expected = {
        status: 200,
        error: false,
        body: message
      }
      request.get('/').end((_, res) => {
        expect(res.body).toEqual(expected)
        done()
      })
    })
  })
})
