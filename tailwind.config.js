/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // * not being used!
    // "./app/**/*.{js,ts,jsx,tsx}",
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",

    // Including `src` directory:
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      // Project custom colors
      colors: {
        black: "#000000",
        cyanaqua: "#90EEE1",
        iceblue: "#F1F6FA",
        purple: "#7874F2",
        "purple-almostblack": "#32314D",
        "purple-dark": "#585785",
        "purple-light": "#7874F2",
        "bubble-gum": "#7874F2",
        pumpkin: "#FF8A57",
        skyblue: "#1B96EF",
        white: "#FFFFFF",
      },
      // Project custom fonts
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "background-title": "url('/background-title.svg')",
      },
    },
    plugins: [],
  },
}
