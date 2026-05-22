/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'glass-lg': '0 16px 48px rgba(0, 0, 0, 0.15)',
        'float': '0 12px 40px rgba(0, 0, 0, 0.18)',
        'float-lg': '0 24px 64px rgba(0, 0, 0, 0.25)',
        'glow': '0 0 30px rgba(59, 130, 246, 0.15)',
        'glow-lg': '0 0 60px rgba(59, 130, 246, 0.2)',
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.05)',
      },
      backdropBlur: {
        'glass': '20px',
        'glass-md': '32px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glow-blue': 'radial-gradient(ellipse at 50% 0%, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
        'glow-slate': 'radial-gradient(ellipse at 50% 0%, rgba(100, 116, 139, 0.08) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}
