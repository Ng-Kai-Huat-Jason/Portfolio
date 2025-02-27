/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vintage-cream': '#e8d8c9',
        'vintage-blue': '#4b607f',
        'vintage-orange': '#f3701e',
        'dark': '#1a1a1a',
      },
    },
  },
  plugins: [],
}
