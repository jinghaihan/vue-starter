<script lang="ts" setup>
const router = useRouter()
const route = useRoute('/hi/[name]')
const { t } = useI18n()
const userStore = useUserStore()

useHead({
  title: t('page.welcome'),
})

watchEffect(() => {
  userStore.setUsername(route.params.name)
})
</script>

<template>
  <main flex flex-col items-center gap-2 px-4 py-8>
    <div text-4xl>
      <div i-lucide-smile />
    </div>

    <p>
      {{ $t('demo.hi', { name: userStore.username }) }}
    </p>

    <p>
      <em text-sm opacity-75>{{ t('demo.dynamic-route') }}</em>
    </p>

    <template v-if="userStore.otherNames.length">
      <div mt-2 text-sm>
        <span opacity-75>{{ t('demo.aka') }}:</span>
        <ul>
          <li v-for="name in userStore.otherNames" :key="name">
            <RouterLink :to="`/hi/${name}`" replace text-primary underline decoration-primary>
              {{ name }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </template>

    <Button mt-2 size="xs" @click="router.back()">
      {{ $t('button.back') }}
    </Button>
  </main>
</template>
