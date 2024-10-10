<script lang="ts" setup>
const iconClass = computed(() => {
  return colorMode.value === 'dark' ? 'i-lucide-moon' : 'i-lucide-sun '
})
</script>

<template>
  <Button variant="ghost" size="icon" @click="toggleDark">
    <i :class="iconClass" />
  </Button>
</template>
