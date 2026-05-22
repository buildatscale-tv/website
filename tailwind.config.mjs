/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brutal: {
          black: '#0a0a0a',
          white: '#fafafa',
          accent: '#ff2d00',
          gray: '#e5e5e5',
          'gray-dark': '#1a1a1a',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        'none': '0',
      },
    },
  },
  plugins: [],
}
