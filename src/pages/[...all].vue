<script lang="ts" setup>
const router = useRouter()
const { t } = useI18n()

useHead({
  title: t('page.fallback'),
})
</script>

<template>
  <main flex flex-col items-center gap-2 px-4 py-8>
    <div text-4xl>
      <div i-lucide-triangle-alert />
    </div>

    <p>
      {{ $t('fallback.not-found') }}
    </p>

    <Button mt-2 size="xs" @click="router.back()">
      {{ $t('button.back') }}
    </Button>
  </main>
</template>
