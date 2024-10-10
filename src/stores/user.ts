import { defineStore } from 'pinia'

export const useUserStore = defineStore(
  'user',
  () => {
    const username = ref<string>('')
    const prevNames = ref<Set<string>>(new Set())
    const otherNames = computed(() => Array.from(prevNames.value).filter(name => name !== username.value))

    function setUsername(name: string) {
      if (username.value) {
        prevNames.value.add(username.value)
      }
      username.value = name
    }

    return {
      username,
      prevNames,
      otherNames,
      setUsername,
    }
  },
  {
    persist: {
      storage: sessionStorage,
      pick: ['username'],
    },
  },
)
