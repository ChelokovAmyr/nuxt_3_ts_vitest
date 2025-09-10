import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Button from '../components/Button.vue' // относительный путь

describe('Button.vue', () => {
  it('renders button slot content', () => {
    const wrapper = mount(Button, { slots: { default: 'Click me' } })
    expect(wrapper.text()).toBe('Click me')
  })
})
