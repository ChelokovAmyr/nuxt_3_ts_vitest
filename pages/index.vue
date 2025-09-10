<template>
  <div class="home">
    <div class="home-content">
      <h1 class="home-title">Welcome to {{ siteName }}</h1>
      <p class="home-subtitle">Best products for you 🚀</p>
      <NuxtLink to="/products">
        <Button variant="primary">See Products</Button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue'

const config = useRuntimeConfig()
const siteName = config.public.siteName
</script>

<style scoped lang="scss">
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 2rem;
  background-color: #f9f9f9;

  .home-content {
    text-align: center;

    .home-title {
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
      color: #222;
    }

    .home-subtitle {
      font-size: 1.25rem;
      margin-bottom: 2rem;
      color: #555;
    }

    a {
      text-decoration: none;
    }

    button {
      cursor: pointer;
      font-size: 1rem;
    }
  }
}
</style>
