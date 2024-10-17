/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      }
    },
    colors: {
      'purple': "#581C87",
      'dark-yellow': "#F59E0B",
      'light-yellow': "#FBBF24",
      'mid-yellow': "#FCD34D",
      'white': "#fff",
    }
  },
  plugins: [],
}

