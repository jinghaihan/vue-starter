<script lang="ts" setup>
const { t } = useI18n()

useHead({
  title: t('page.home'),
})

const router = useRouter()
const userStore = useUserStore()
const name = ref<string>(userStore.username)

function go() {
  if (name.value) {
    router.push(`/hi/${encodeURIComponent(name.value)}`)
  }
}
</script>

<template>
  <main flex flex-col items-center gap-2 px-4 py-8>
    <div text-4xl>
      <div i-lucide-carrot />
    </div>

    <p>
      <a rel="noreferrer" href="https://github.com/jinghaihan/vue-starter" target="_blank">
        Vue Starter
      </a>
    </p>

    <p>
      <em text-sm opacity-75>{{ t('demo.introduce') }}</em>
    </p>

    <Input v-model:model-value="name" mt-4 :placeholder="$t('demo.whats-your-name')" @keydown.enter="go" />

    <Button mt-2 w-auto class="!px-3" size="xs" :disabled="!name" @click="go">
      {{ $t('button.go') }}
    </Button>
  </main>
</template>
