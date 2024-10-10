<script lang="ts" setup>
const { isFullscreen, toggle } = useFullscreen()

const iconClass = computed(() => {
  return isFullscreen.value ? 'i-lucide-minimize' : 'i-lucide-maximize'
})
</script>

<template>
  <Button variant="ghost" size="icon" @click="toggle">
    <div :class="iconClass" />
  </Button>
</template>
