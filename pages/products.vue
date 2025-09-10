<template>
  <div class="products-page">
    <h1>Products</h1>
    <div v-if="loading">Loading...</div>
    <div v-else class="grid">
      <ProductCard v-for="p in products" :key="p.id" :product="p" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useProducts } from '@/composables/useProducts'
import ProductCard from '@/components/ProductCard.vue'

const { products, loading } = useProducts()
</script>

<style scoped lang="scss">
.products-page { padding: 2rem; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem; }
</style>
