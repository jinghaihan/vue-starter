<script lang="ts" setup>
import { SUPPORT_LANGUAGES } from '@/modules/i18n'

const lang = ref(preferences.value.lang)

watchEffect(() => {
  updatePreferences({ lang: lang.value })
})
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" size="icon">
        <div i-lucide-languages />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start">
      <DropdownMenuRadioGroup v-model="lang">
        <DropdownMenuRadioItem v-for="item in SUPPORT_LANGUAGES" :key="item.value" :value="item.value">
          {{ item.label }}
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
