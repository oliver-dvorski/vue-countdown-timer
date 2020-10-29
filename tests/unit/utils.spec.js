import { isFirstRun } from '../../src/utils/base'
import { LocalStorageMock } from './mocks/LocalStorage.mock'

describe('isFirstRun', () => {
  it('should check if localStorage.countdownTimerTarget is set', () => {
    Object.defineProperty(window, 'localStorage', {
      value: new LocalStorageMock()
    })

    expect(isFirstRun()).toBe(true)

    localStorage.setItem('countdownTimerTarget', '00:00:00')

    expect(isFirstRun()).toBe(false)
  })
})
