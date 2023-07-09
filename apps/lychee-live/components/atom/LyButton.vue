<script setup lang="ts">
defineProps<{ foo: string }>()
</script>

<template>
  <button btn>
    <slot />
  </button>
</template>
