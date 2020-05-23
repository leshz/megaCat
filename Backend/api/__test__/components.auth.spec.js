const testServer = require('../../utils/testServer')
const storeMock = require('../../store/mocks/storeMock')
describe('API | Components | Auth', () => {
  const route = require('../components/auth/network')
  const request = testServer(route)
  const auths = require('../../store/mocks/AuthMock')
  const users = require('../../store/mocks/UsersMock')
  describe('Network', () => {
    describe('Route /login', () => {
      it('should respond with status 200 with correct auth data in JSON', (done) => {
        const { username } = auths[0]
        request
          .post('/login')
          .auth(username, 'qwerty')
          .expect('Content-Type', /json/)
          .expect(200, done)
      })

      it('should respond with status 401 with incorrect auth data', (done) => {
        const { username } = auths[0]
        request
          .post('/login')
          .auth(username, 'qwerty0')
          .expect(401, done)
      })

      it('should throw an error with incorrect auth data', () => {
        const { login } = require('../components/auth/network')
        expect(login()).rejects.toThrow()
      })
    })
  })

  describe('Controllers', () => {
    const ctrl = require('../components/auth/controller')
    const controller = ctrl(storeMock)

    describe('login', () => {
      it('should receive a user', async () => {
        const result = await controller.login(auths[0])
        const expected = {
          id: users[0].id,
          id_number: users[0].id_number,
          username: users[0].username,
          role: 'ToDo'
        }

        expect(result.user).toEqual(expected)
      })

      it('should respond with a user and token data', () => {
        expect().toBeFalsy()
      })

      it('should respond with an error if not pass a user', async () => {
        const response = controller.login()
        expect(response).rejects.toThrow()
      })
    })
  })
})
