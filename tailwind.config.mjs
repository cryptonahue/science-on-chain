/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Paleta actualizada con verdes más oscuros
        'primary': '#007C54', // Verde primario más oscuro
        'primary-light': '#00AA76', // El anterior primary se convierte en light
        'primary-dark': '#00583C', // Verde más oscuro para mejor contraste
        'secondary': '#6E6EFD', // Morado/púrpura (mantenido)
        'secondary-light': '#9797FF',
        'secondary-dark': '#5151D3',
        'accent': '#0E9A7D', // Verde acento más oscuro
        'accent-2': '#01A989', // Verde acento secundario más oscuro
        'neutral-light': '#F5F9FC', // Más blanco, menos amarillento
        'neutral-dark': '#0a0b0d',
        'foreground': '#121517', // Texto más oscuro para mejor contraste
        'bg-subtle': '#EEF2F6', // Fondo sutil con tono gris-azulado, no amarillento
        'highlight': '#0E9A68', // Verde para destacados más oscuro
        'accent-yellow': '#F3B73E', // Amarillo menos saturado
        'accent-purple': '#6E57FF', // Púrpura de acento
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