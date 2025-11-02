import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#d4af37',
        dark: '#0f0f1e',
        darker: '#050510',
        accent: '#8b5cf6',
      },
      fontFamily: {
        cinzel: ['var(--font-cinzel)'],
        serif: ['var(--font-serif)'],
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 100%)',
        'gradient-accent': 'linear-gradient(135deg, #8b5cf6 0%, #d4af37 100%)',
      },
    },
  },
  plugins: [],
}
export default config
