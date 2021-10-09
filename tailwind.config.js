module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
