import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Header from '../components/Header.vue' // относительный путь
import { createPinia, setActivePinia } from 'pinia'

describe('Header.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders header content', () => {
    const wrapper = mount(Header)
    expect(wrapper.exists()).toBe(true)
  })
})
