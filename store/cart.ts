export const useCartStore = defineStore('cart', () => {
  type CartItem = { id: number; name: string; price: number; qty: number }

  const items = ref<CartItem[]>([])

  const total = computed(() => items.value.reduce((sum, item) => sum + item.price * item.qty, 0))

  function addItem(item: Omit<CartItem, 'qty'>) {
    const existing = items.value.find(i => i.id === item.id)
    if (existing) existing.qty++
    else items.value.push({ ...item, qty: 1 })
  }

  function removeItem(id: number) {
    items.value = items.value.filter(i => i.id !== id)
  }

  return { items, total, addItem, removeItem }
})
