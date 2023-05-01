/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#1f1f21",
        offwhite: "#F0F0F0",
        elephant: "#25393e",
        grey: "#333438",
      },
    },

    fontFamily: {
      sans: ["var(--font-saira)", ...fontFamily.sans],
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
  },
  plugins: [],
};
