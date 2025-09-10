import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Footer from '../components/Footer.vue' // относительный путь
import { createPinia, setActivePinia } from 'pinia'

describe('Footer.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders footer content', () => {
    const wrapper = mount(Footer)
    expect(wrapper.exists()).toBe(true)
  })
})
