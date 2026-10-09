/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { brand: { DEFAULT: '#22c55e', ink: '#052e16', soft: '#f0fdf4' } },
      fontFamily: { sans: ['var(--font-sans)', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
}
