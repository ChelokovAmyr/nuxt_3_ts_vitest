import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import ProductCard from '../components/ProductCard.vue' // относительный путь
import { createPinia, setActivePinia } from 'pinia'
import { useCartStore } from '../store/cart' // относительный путь

describe('ProductCard.vue', () => {
  let cart: ReturnType<typeof useCartStore>

  beforeEach(() => {
    setActivePinia(createPinia())
    cart = useCartStore()
  })

  it('renders product info and adds to cart', async () => {
    const product = { id: 1, name: 'Test Product', price: 100, image: '' }
    const wrapper = mount(ProductCard, { props: { product } })

    expect(wrapper.text()).toContain('Test Product')
    expect(wrapper.text()).toContain('100')

    await wrapper.find('button').trigger('click')

    expect(cart.items.length).toBe(1)
    expect(cart.items[0]!.name).toBe('Test Product')
    expect(cart.items[0]!.price).toBe(100)
  })
})
