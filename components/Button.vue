<template>
  <button class="btn" :class="variant" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{ variant?: 'primary' | 'secondary' }>()
</script>

<style scoped lang="scss">
.btn {
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;

  &.primary {
    background: #0070f3;
    color: white;
  }

  &.secondary {
    background: #eaeaea;
    color: #333;
  }
}
</style>
