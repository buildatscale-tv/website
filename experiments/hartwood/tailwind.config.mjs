/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        hartwood: {
          cream: '#F5F0E8',
          sand: '#E8DFD0',
          taupe: '#C4B5A0',
          brown: '#8B6914',
          espresso: '#3D2B1F',
          walnut: '#5C4033',
          gold: '#D4A574',
          charcoal: '#2C2C2C',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
