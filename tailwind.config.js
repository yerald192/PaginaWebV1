/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./components/**/*.{html,js}",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          blue: '#2563eb',
          purple: '#8b5cf6',
          navy: '#0b2847',
          deep: '#1b2a49',
          dark: '#0f172a',
          footer: '#050814',
          footerDarker: '#02040a',
          textDark: '#1e293b',
          textMuted: '#475569',
        },
        program: {
          web: '#2563eb',
          webBg: '#eff6ff',
          enfermeria: '#e11d48',
          enfermeriaBg: '#fff1f2',
          mecatronica: '#ea580c',
          mecatronicaBg: '#fff7ed',
          alimentos: '#059669',
          alimentosBg: '#ecfdf5',
          agropecuaria: '#7c3aed',
          agropecuariaBg: '#f5f3ff',
        }
      },
      fontFamily: {
        sans: ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      boxShadow: {
        'card': '0 10px 30px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 18px 40px rgba(0, 0, 0, 0.12)',
        'header': '0 4px 20px -2px rgba(0, 0, 0, 0.06)',
        'floating': '0 20px 45px rgba(0, 0, 0, 0.15)',
        'dropdown': '0 10px 30px -5px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)'
      },
      borderRadius: {
        'xl2': '20px',
        'xl3': '28px',
      },
      animation: {
        'fade-in': 'fadeInView 0.35s ease-in-out',
        'wave-back': 'waveFloat 14s ease-in-out infinite alternate',
        'wave-mid': 'waveFloat 10s ease-in-out infinite alternate-reverse',
        'wave-front': 'waveFloat 7s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeInView: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        waveFloat: {
          '0%': { transform: 'translateX(0) scaleY(1)' },
          '50%': { transform: 'translateX(-25%) scaleY(1.08)' },
          '100%': { transform: 'translateX(-50%) scaleY(1)' }
        }
      }
    },
  },
  plugins: [],
}
