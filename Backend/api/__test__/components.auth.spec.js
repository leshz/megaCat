const storeMock = require('../../store/mocks/storeMock')
describe('API | Components | Auth', () => {
  const auths = require('../../store/mocks/AuthMock')
  const users = require('../../store/mocks/UsersMock')

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
