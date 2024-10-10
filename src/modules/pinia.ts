import type { App } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

export function install(app: App) {
  const pinia = createPinia()

  pinia.use(
    createPersistedState({
      key: storeKey => `pinia-${storeKey}`,
      storage: localStorage,
    }),
  )

  app.use(pinia)
}
