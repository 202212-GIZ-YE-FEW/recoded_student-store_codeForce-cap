/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      // Project custom colors
      colors: {
        black: "#000000",
        clay: "#F1F6FA",
        cyanaqua: "#90EEE1",
        darkpurple: "#32314D",
        iceblue: "#F1F6FA",
        purple: "#7874F2",
        "purple-almostblack": "#32314D",
        "purple-dark": "#585785",
        "purple-light": "#7874F2",
        pumpkin: "#FF8A57",
        skyblue: "#1B96EF",
        white: "#FFFFFF",
      },
      plugins: [],
    },
  },
}
