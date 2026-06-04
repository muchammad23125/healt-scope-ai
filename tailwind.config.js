/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#0F766E",
        secondary: "#14B8A6",
        danger: "#DC2626",
        warning: "#F59E0B",
        success: "#16A34A",
      },
    },
  },

  plugins: [],
}