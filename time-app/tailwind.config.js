/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx}",
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      // B&W
      black: "#000000",
      white: "#ffffff",
      // Greyscale
      "grey-900": "#212529",
      "grey-800": "#343A40",
      "grey-700": "#495057",
      "grey-600": "#6C757D",
      "grey-500": "#ADB5BD",
      "grey-400": "#CED4DA",
      "grey-300": "#DEE2E6",
      "grey-200": "#E9ECEF",
      "grey-100": "#F8F9FA",
      // Primary: Blue
      "blue-500": "#2B5985",
      "blue-400": "#4690D6",
      "blue-300": "#6FB9FF",
      "blue-200": "#A6D4FF",
      "blue-100": "#CFE8FF",
      // Secondary: Peach
      "peach-500": "#FFBB89",
      "peach-400": "#FFC69C",
      "peach-300": "#FFD1AF",
      "peach-200": "#FFDCC2",
      "peach-100": "#FFE7D5",
    },
    fontFamily: {
      sans: ["Satoshi", "sans-serif"],
    },

    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
