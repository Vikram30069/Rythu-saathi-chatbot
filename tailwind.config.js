module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        agriculture: {
          500: '#22c55e',
          600: '#16a34a',
        },
      },
      fontFamily: {
        telugu: ['Noto Sans Telugu', 'sans-serif'],
        hindi: ['Noto Sans Devanagari', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
