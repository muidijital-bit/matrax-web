/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Marka paleti (logo'dan)
        brand: {
          navy:   '#2c3876', // M
          pink:   '#f83567', // X
          orange: '#fa8815', // a (1)
          green:  '#7ca924', // t
          teal:   '#28B5C8', // r — logo aksanı
          purple: '#7E3FB7', // a (2) — logo aksanı
          yellow: '#FFCD3C', // şapka tepeleri / aksan
        },
        // Eski neon-* sınıfları geriye dönük uyumluluk için
        neon: {
          pink:   '#2c3876',
          orange: '#fa8815',
          green:  '#7ca924',
          blue:   '#28B5C8',
          yellow: '#FFCD3C',
        }
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-pink':   '0 0 30px rgba(44, 56, 118, 0.5)',
        'glow-blue':   '0 0 30px rgba(40, 181, 200, 0.5)',
        'glow-orange': '0 0 30px rgba(250, 136, 21, 0.5)',
        'glow-green':  '0 0 30px rgba(124, 169, 36, 0.5)',
        'glow-navy':   '0 0 30px rgba(44, 56, 118, 0.5)',
      }
    },
  },
  plugins: [],
}
