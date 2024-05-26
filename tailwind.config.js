// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#111827',
          white: '#F9FAFB',
          blue: '#1D4ED8',
          green: '#10B981',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
