<template>
  <div class="home">
    <h1>Welcome to {{ siteName }}</h1>
    <p>Best products for you 🚀</p>
    <NuxtLink to="/products">
      <Button variant="primary">See Products</Button>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue'

const config = useRuntimeConfig()
const siteName = config.public.siteName
</script>
