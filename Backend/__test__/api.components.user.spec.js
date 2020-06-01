const Controller = require('../api/components/user/controller.js')
const storeMock = require('../store/mocks/storeMock.js')
const userMock = require('../store/mocks/UsersMock.json')

describe('API | Components | User', () => {
  const controller = Controller(storeMock)
  it('should call insert user', async (done) => {
    const userData = {
      idNumber: userMock[0].idNumber,
      firstName: userMock[0].firstName,
      lastName: userMock[0].lastName,
      email: userMock[0].email,
      contactNumber: userMock[0].contactNumber,
      address: userMock[0].address
    }
    const expectedCall = ['users', userData]
    await controller.insert(userData)
    expect(storeMock.insert.mock.calls.length).toBe(1)
    expect(storeMock.insert.mock.calls[0]).toEqual(expectedCall)
    await storeMock.insert.mockReset()
    done()
  })

  it('should return an error if not pass data', async (done) => {
    const response = controller.insert()
    expect(response).rejects.toThrow()
    done()
  })
})
