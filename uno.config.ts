import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts } from 'unocss'
import presetAnimations from 'unocss-preset-animations'
import { builtinColors, presetShadcn } from 'unocss-preset-shadcn'

export default defineConfig({
  shortcuts: {
    'flex-center': 'flex items-center justify-center',
  },
  presets: [
    presetAttributify(),
    presetAnimations(),
    presetIcons({
      scale: 1.3,
    }),
    presetUno(),
    presetShadcn(builtinColors.map(c => ({ color: c }))),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  content: {
    pipeline: {
      include: [
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        '(components|src)/**/*.{js,ts}',
      ],
    },
  },
})
