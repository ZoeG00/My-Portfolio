/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        1: "#002b40",
        2: "#004c65",
        3: "#007a94",
        4: "#00b5ca",
        5: "#00ffff"
      },
    },
  },
  plugins: [],
}
