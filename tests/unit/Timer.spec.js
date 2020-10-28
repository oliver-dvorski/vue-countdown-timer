import { shallowMount } from '@vue/test-utils'
import Timer from '@/components/Timer.vue'
import { LocalStorageMock } from './mocks/LocalStorage.mock'
import { subMinutes } from 'date-fns'

Object.defineProperty(window, 'localStorage', {
  value: new LocalStorageMock()
})

describe('Timer.vue', () => {
  let component
  describe(`If there's no time value in LocalStorage`, () => {
    beforeEach(() => {
      localStorage.clear()

      component = shallowMount(Timer)
    })
    it('saves the current time to local storage', () => {
      expect(window.localStorage.getItem('countdownTimerTime')).toBe(
        new Date().toLocaleTimeString()
      )
    })

    afterEach(() => {
      component.destroy()
    })
  })

  describe(`If there's already a time value in LocalStorage`, () => {
    const twentyMinutesAgo = subMinutes(Date.now(), 20).toLocaleTimeString()

    beforeEach(() => {
      window.localStorage.setItem('countdownTimerTime', twentyMinutesAgo)

      component = shallowMount(Timer)
    })

    it(`Will not modify the time in storage`, () => {
      expect(window.localStorage.getItem('countdownTimerTime')).toBe(twentyMinutesAgo)
    })
    afterEach(() => {
      component.destroy()
      window.localStorage.clear()
    })
  })
})
