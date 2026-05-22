/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'glow': '0 0 15px rgba(96, 165, 250, 0.15)',
        'glow-lg': '0 0 25px rgba(96, 165, 250, 0.2)',
        'glow-blue': '0 0 15px rgba(59, 130, 246, 0.2)',
        'inner-glow': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
      },
    },
  },
  plugins: [],
}
