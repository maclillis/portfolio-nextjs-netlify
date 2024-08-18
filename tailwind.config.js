/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        // ...
        colors: {
          secondary: {
            foreground: "#000",
            DEFAULT: "#F3E7F8",
          }
        },
      }
    },
  }),],
}

