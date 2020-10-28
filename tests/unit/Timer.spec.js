import { shallowMount } from '@vue/test-utils'
import Timer from '@/components/Timer.vue'
import { LocalStorageMock } from './mocks/LocalStorage.mock'
import { subMinutes } from 'date-fns'

Object.defineProperty(window, 'localStorage', {
  value: new LocalStorageMock()
})

describe('Timer.vue', () => {
  let component = null

  beforeEach(() => {
    localStorage.clear()
  })

  it(`Initialises with localStorage`, () => {
    component = shallowMount(Timer)

    expect(window.localStorage.getItem('countdownTimerTime')).toBe(
      new Date().toLocaleTimeString()
    )
  })

  it(`acknowledges values previously set in localStorage`, () => {
    const twentyMinutesAgo = subMinutes(Date.now(), 20).toLocaleTimeString()
    window.localStorage.setItem('countdownTimerTime', twentyMinutesAgo)
    component = shallowMount(Timer)
    expect(window.localStorage.getItem('countdownTimerTime')).toBe(
      twentyMinutesAgo
    )
  })

  afterEach(() => {
    if (component !== null) {
      component.destroy()
    }
  })
})
