import { ref, onMounted } from 'vue'

interface Product {
  id: number
  name: string
  price: number
  image: string
}

export function useProducts() {
  const products = ref<Product[]>([])
  const loading = ref(false)

  const config = useRuntimeConfig()

  onMounted(async () => {
    loading.value = true
    const res = await $fetch<Product[]>(`${config.public.apiBase}/products`)
    products.value = res || []
    loading.value = false
  })

  return { products, loading }
}
