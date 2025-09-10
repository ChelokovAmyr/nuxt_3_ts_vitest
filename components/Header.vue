<template>
  <header class="header">
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/products">Products</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </nav>
    <div class="cart">
      🛒 {{ cart.items.length }} | {{ cart.total }} $
    </div>
  </header>
</template>

<script setup lang="ts">
import { useCartStore } from '@/store/cart'
const cart = useCartStore()
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: #222;
  color: #fff;

  nav a {
    margin-right: 1rem;
    color: #fff;
    text-decoration: none;
  }
}
</style>
