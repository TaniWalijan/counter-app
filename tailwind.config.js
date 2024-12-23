/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app//*.{js,ts,jsx,tsx}', // For the new app directory (Next.js 13+)
    './pages//*.{js,ts,jsx,tsx}', // For the pages directory (classic routing)
    './components//*.{js,ts,jsx,tsx}', // For your components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

