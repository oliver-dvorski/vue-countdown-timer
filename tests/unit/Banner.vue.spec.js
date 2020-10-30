import Banner from '@/components/Banner.vue'
import { mount, shallowMount } from '@vue/test-utils'
import Vue from 'vue'

describe('Banner.vue', () => {
  let component

  beforeEach(async () => {
    component = mount(Banner)

    await Vue.nextTick()
  })

  afterEach(() => {
    component.destroy()
  })

  it('Displays a timer', async () => {
    expect(component.text()).toContain('00:29:59')
  })

  it('Displays a CTA', async () => {
    const cta = 'Test'

    component = shallowMount(Banner, {
      propsData: {
        text: cta,
        href: 'link'
      }
    })
    expect(component.find('a').text()).toBe(cta)
    expect(component.find('a').attributes('href')).toBe('link')
  })
})
