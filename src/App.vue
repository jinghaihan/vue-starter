<script lang="ts" setup>
useHead({
  titleTemplate: (title?: string) => title ? `${title} - Vue Starter` : 'Vue Starter',
})
</script>

<template>
  <div size-full flex flex-col items-center>
    <RouterView />

    <Footer />
  </div>
</template>
