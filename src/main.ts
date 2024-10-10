import type { App as _App } from 'vue'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import '@/assets/styles.css'

function bootstrap() {
  const app = createApp(App)

  Object.values(import.meta.glob<{ install: (app: _App) => void }>('./modules/*.ts', { eager: true }))
    .forEach(i => i.install?.(app))

  initPreferences()

  app.mount('#app')
}

bootstrap()
