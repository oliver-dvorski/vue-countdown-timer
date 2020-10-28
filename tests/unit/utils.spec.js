const { isFirstRun } = require('../../src/utils/base')
const { LocalStorageMock } = require('./mocks/LocalStorage.mock')

describe('isFirstRun', () => {
  it('should check if localStorage.countdownTimerTime is set', () => {
    Object.defineProperty(window, 'localStorage', {
      value: new LocalStorageMock()
    })

    expect(isFirstRun()).toBe(true)

    localStorage.setItem('countdownTimerTime', '00:00:00')

    expect(isFirstRun()).toBe(false)
  })
})
