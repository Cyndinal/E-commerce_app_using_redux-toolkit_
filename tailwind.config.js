/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'aspect-16-9': '56.25%', // (9/16)*100%
        'aspect-4-3': '75%', // (3/4)*100%
      }
    },
  },
  plugins: [],
}

