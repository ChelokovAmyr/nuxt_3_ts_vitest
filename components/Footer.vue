<template>
  <footer class="footer">
    <p>© {{ new Date().getFullYear() }} {{ siteName }}</p>
  </footer>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const siteName = config.public.siteName
</script>

<style scoped lang="scss">
.footer {
  padding: 1rem;
  text-align: center;
  background: #f1f1f1;
}
</style>
