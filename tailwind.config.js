module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        accent: "#375ca6",
      },
      height: {
        partial: "80vh",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        mono: ["Roboto Mono"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
