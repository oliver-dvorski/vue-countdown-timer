import { shallowMount } from '@vue/test-utils'
import Timer from '@/components/Timer.vue'
import { LocalStorageMock } from './mocks/LocalStorage.mock'
import { addMinutes } from 'date-fns'
import Vue from 'Vue'

jest.useFakeTimers()

Object.defineProperty(window, 'localStorage', {
  value: new LocalStorageMock()
})

describe('Timer.vue', () => {
  let component = null

  beforeEach(() => {
    localStorage.clear()
  })

  it('defaults to a target 30 minutes from now', async () => {
    component = shallowMount(Timer)
    await Vue.nextTick()

    expect(component.text()).toBe('00:29:59')
  })

  it(`Starts counting down from target`, async () => {
    component = shallowMount(Timer, {
      propsData: {
        target: addMinutes(Date.now(), 20)
      }
    })

    await Vue.nextTick()

    expect(component.text()).toBe('00:19:59')
  })

  it(`Persists the initial timer target between reloads`, async () => {
    component = shallowMount(Timer)

    component.destroy()

    component = shallowMount(Timer, {
      propsData: {
        target: addMinutes(Date.now(), 20)
      }
    })

    await Vue.nextTick()

    expect(component.text()).not.toBe('00:19:59')
    expect(component.text()).toBe('00:29:59')
  })

  // For some reason I can't seem to write a passing test for the countdown feature
  // When I advance all timers by any value, the component.text() remains
  // at 00:29:59
  it('Calls the refreshDisplay method every second', () => {
    const refreshDisplay = jest.fn()

    component = shallowMount(Timer, {
      methods: {
        refreshDisplay
      }
    })

    expect(refreshDisplay).toHaveReturnedTimes(1)

    jest.advanceTimersByTime(1000)

    expect(refreshDisplay).toHaveReturnedTimes(2)
  })

  afterEach(() => {
    if (component !== null) {
      component.destroy()
    }
  })
})
