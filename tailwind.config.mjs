/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Nueva paleta de colores según especificaciones del usuario
        'primary': '#0D3B23', // Verde fondo principal
        'primary-light': '#37622D', // Verde para hover secundario
        'primary-dark': '#0A2B19', // Verde más oscuro
        'secondary': '#E4FF55', // Lima/amarillo verdoso
        'secondary-light': '#F0FF80',
        'secondary-dark': '#D4EF45',
        'accent': '#0E9A7D', // Verde acento (mantenido)
        'accent-2': '#01A989', // Verde acento secundario (mantenido)
        'neutral-light': '#FAF9F5', // Blanco crema para contenedores
        'neutral-dark': '#0a0b0d',
        'foreground': '#121517', // Texto oscuro
        'bg-subtle': '#EEF2F6', // Fondo sutil (mantenido)
        'highlight': '#0E9A68', // Verde para destacados (mantenido)
        'accent-yellow': '#F3B73E', // Amarillo (mantenido)
        'accent-purple': '#6E57FF', // Púrpura de acento (mantenido)
        'gray-primary': '#4E4A46', // Gris principal para contenedores
        'gray-secondary': '#77706A', // Gris secundario
        'white-pure': '#FEFFFF', // Blanco puro para tarjetas
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        merriweather: ['Merriweather', 'serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 25px rgba(0, 0, 0, 0.05)',
        'bento': '0 4px 20px rgba(0, 124, 84, 0.08)',
        'glass': '0 8px 32px rgba(0, 124, 84, 0.1)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '3rem',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #007C54, #00AA76)',
        'gradient-secondary': 'linear-gradient(to right, #6E6EFD, #9797FF)',
        'gradient-accent': 'linear-gradient(to right, #0E9A7D, #01A989)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))',
        'grid-pattern': 'url("/grid-pattern.svg")',
        'dots-pattern': 'url("/dots-pattern.svg")',
        'hex-pattern': 'url("/hex-pattern.svg")',
      },
    },
  },
  plugins: [],
}