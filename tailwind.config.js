/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
      "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        'sm': '2rem',
        'lg': '3rem',
      },
      screens: {
        'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      // '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      }
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        'back-about': "url('..//public/images/about/hero.webp')",
        'back-2': "url('..//public/images/homepage/hero.webp')",
        'back-4': "url('..//public/images/blog/hero.webp')",
        'back-5': "url('..//public/images/contact/contactHero.webp')",
        'back-6': "url('..//public/images/services/servicesHero.webp')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
