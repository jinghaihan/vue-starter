import type { builtinColors, builtinRadiuses } from 'unocss-preset-shadcn'
import { loadLanguageAsync } from '@/modules/i18n'

export interface Preferences {
  colorMode: 'auto' | 'light' | 'dark'
  lang: typeof availableLocales[number]
  theme: typeof builtinColors[number]
  radius: typeof builtinRadiuses[number]
}

const { system: systemColorMode, store: storeColorMode } = useColorMode({
  storageKey: null,
  // https://paco.me/writing/disable-theme-transitions
  disableTransition: true,
})

export const colorMode = computed(() => storeColorMode.value === 'auto' ? systemColorMode.value : storeColorMode.value)

export const isDark = computed(() => colorMode.value === 'dark')

function changeColorMode() {
  storeColorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
  updatePreferences({ colorMode: storeColorMode.value })
}

// @ts-expect-error: Transition API
const isAppearanceTransition = document.startViewTransition
  && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Credit to [@hooray](https://github.com/hooray)
 * @see https://github.com/vuejs/vitepress/pull/2347
 */
export function toggleDark(event?: MouseEvent) {
  if (!isAppearanceTransition || !event) {
    changeColorMode()
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )
  const transition = document.startViewTransition(async () => {
    changeColorMode()
    await nextTick()
  })

  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ]
    document.documentElement.animate(
      {
        clipPath: isDark.value
          ? [...clipPath].reverse()
          : clipPath,
      },
      {
        duration: 400,
        easing: 'ease-in',
        pseudoElement: isDark.value
          ? '::view-transition-old(root)'
          : '::view-transition-new(root)',
      },
    )
  })
}

export const preferences = useStorage(
  'preferences',
  {
    colorMode: storeColorMode.value,
    lang: 'en-US',
    theme: 'neutral',
    radius: 0.5,
  } as Preferences,
  localStorage,
  {
    mergeDefaults: true,
  },
)

export function updatePreferences(_preferences: Partial<Preferences>) {
  const {
    theme: _theme,
  } = preferences.value

  preferences.value = { ...preferences.value, ..._preferences }

  if (_preferences.colorMode) {
    storeColorMode.value = _preferences.colorMode
  }

  if (_preferences.lang) {
    loadLanguageAsync(_preferences.lang)
  }

  if (_preferences.theme) {
    if (_theme) {
      document.body.classList.remove(`theme-${_theme}`)
    }
    document.body.classList.add(`theme-${preferences.value.theme}`)
  }

  if (_preferences.radius) {
    document.body.style.setProperty('--radius', `${_preferences.radius}rem`)
  }
}

export function initPreferences() {
  updatePreferences(preferences.value)
}
