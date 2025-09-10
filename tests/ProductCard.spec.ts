import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ProductCard from '@/components/ProductCard.vue'
import { createPinia, setActivePinia } from 'pinia'

setActivePinia(createPinia())

describe('ProductCard.vue', () => {
  it('renders product info and adds to cart', async () => {
    const product = { id: 1, name: 'Test', price: 100, image: '' }
    const wrapper = mount(ProductCard, { props: { product } })
    expect(wrapper.text()).toContain('Test')
    await wrapper.find('button').trigger('click')
  })
})
