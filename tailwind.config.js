/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Habilita o suporte a temas escuros
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#072A30",
        secondary: "#0000FF",
      },
    },
  },
  plugins: [],
};
