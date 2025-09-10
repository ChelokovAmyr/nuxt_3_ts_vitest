<template>
  <div class="product-card">
    <img :src="product.image" alt="" />
    <h3>{{ product.name }}</h3>
    <p>{{ product.price }} $</p>
    <Button variant="primary" @click="addToCart">Add to Cart</Button>
  </div>
</template>

<script lang="ts" setup>
import Button from '@/components/Button.vue'
import { useCartStore } from '@/store/cart'

const props = defineProps<{ product: { id: number; name: string; price: number; image: string } }>()

const cart = useCartStore()
function addToCart() {
  cart.addItem(props.product)
}
</script>

<style scoped lang="scss">
.product-card {
  border: 1px solid #eee;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;

  img { max-width: 100%; }
  button { margin-top: 0.5rem; }
}
</style>
