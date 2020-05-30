const auths = require('../../store/mocks/AuthMock')
const users = require('../../store/mocks/UsersMock')
const storeMock = require('../../store/mocks/storeMock')
const userCtrl = require('../components/user/index')
const emailCtrl = require('../components/email/index')
jest.mock('../components/user/index.js', () => ({
  insert: jest.fn((user) => ({ ...user, id: '1234567890' }))
}))

jest.mock('../components/email/index.js', () => ({
  sendNewUser: jest.fn((data) => true)
}))

describe('API | Components | Auth', () => {
  const { rolesEnum } = require('../../store/mocks/RolesMock')

  describe('Controllers', () => {
    const ctrl = require('../components/auth/controller')

    const controller = ctrl(storeMock)

    describe('login', () => {
      it('should receive a user', async () => {
        const result = await controller.login(auths[0])
        const expected = {
          id: users[0].id,
          idNumber: users[0].idNumber,
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

    describe('get', () => {
      it('should call store.query', async (done) => {
        const user = users[0]
        const userAuth = auths.find(u => u.id === user.id)
        const response = await controller.get({ id: user.id })
        expect(response).toEqual(userAuth)
        done()
      })

      it('should fail without query data', () => {
        const response = controller.get()
        expect(response).rejects.toThrow()
      })

      it('should return an user object', () => {
      })
    })

    describe('addUser', () => {
      const { generateUsername } = require('../../utils/userUtils')
      const userDataMock = {
        idNumber: users[1].idNumber,
        firstName: users[1].firstName,
        lastName: users[1].lastName,
        email: users[1].email,
        contactNumber: users[1].contactNumber,
        address: users[1].address,
        roleId: rolesEnum.ADMINISTRATOR.id
      }

      beforeEach(() => {
        // console.log('userCtrl.insert', userCtrl.insert)
        userCtrl.insert.mockClear()
        emailCtrl.sendNewUser.mockClear()
      })
      it('should insert a user', async (done) => {
        const userData = {
          ...userDataMock,
          idNumber: 1010101010101010
        }
        const userExpected = {
          id: '1234567890',
          idNumber: userData.idNumber,
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          contactNumber: userData.contactNumber,
          address: userData.address,
          username: generateUsername(userData.idNumber, userData.firstName, userData.lastName)
        }

        const response = await controller.addUser(userData)
        const userInserted = userCtrl.insert.mock.results[0].value
        expect(response).toBeTruthy()
        expect(userInserted).toEqual(userExpected)
        done()
      })

      it('should generate a random two numbers different if hasUsername', async () => {
        const userData = {
          ...userDataMock
        }
        const response = await controller.addUser(userData)
        const username = generateUsername(userData.idNumber, userData.firstName, userData.lastName)
        const userInserted = userCtrl.insert.mock.results[0].value
        expect(response).toBeTruthy()
        expect(username.slice(0, -2))
          .toBe(userInserted.username.slice(0, -2))
        expect(username)
          .not
          .toBe(userInserted.username)
      })

      it('should return an error if the process fails', () => {
        const response = controller.addUser()
        expect(response).rejects.toThrow()
      })
    })
  })
})
