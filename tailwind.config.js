/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#040711',
          900: '#080E21',
          850: '#0C1530',
          800: '#111D42',
          750: '#172656',
          700: '#1D306C',
          600: '#263D85',
        },
        gold: {
          50: '#FFFDF0',
          100: '#FEF9D4',
          200: '#FDEFA3',
          300: '#FBE269',
          400: '#F4D03F',
          500: '#D4AF37',
          600: '#B89224',
          700: '#947214',
          800: '#755810',
        },
        slate: {
          850: '#151E2E',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Cabinet Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F5CD4F 0%, #D4AF37 50%, #B89224 100%)',
        'navy-gradient': 'linear-gradient(180deg, #080E21 0%, #040711 100%)',
        'navy-card': 'linear-gradient(135deg, rgba(17, 29, 66, 0.6) 0%, rgba(8, 14, 33, 0.8) 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(212, 175, 55, 0.3)',
        'gold-sm': '0 0 15px -3px rgba(212, 175, 55, 0.25)',
        'navy-glow': '0 20px 40px -15px rgba(4, 7, 17, 0.8)',
      }
    },
  },
  plugins: [],
}
