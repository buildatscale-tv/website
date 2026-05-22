/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: '#F7F4EF',
        parchment: '#EDE8E0',
        terracotta: '#C16B5A',
        'terracotta-light': '#D99A8D',
        'terracotta-dark': '#A05446',
        forest: '#3D6B54',
        'forest-light': '#5A8A72',
        'forest-dark': '#2D5240',
        charcoal: '#3D3632',
        'warm-gray': '#8C8279',
        'warm-gray-light': '#A9A09A',
        'warm-gray-dark': '#6B635C',
        gold: '#C9A96E',
        'gold-light': '#DCC49B',
        'gold-dark': '#A68B52',
        'warm-white': '#FFFBF5',
        'deep-charcoal': '#2C2826',
        'dark-parchment': '#3D3834',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.2em',
      },
    },
  },
  plugins: [],
}
