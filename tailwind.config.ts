import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        telugu: ['Noto Sans Telugu', 'sans-serif'],
        hindi: ['Noto Sans Devanagari', 'sans-serif'],
      },
    },
  },
} satisfies Config