/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    colors: {
      White: "hsl(var(--white))",
      LightGray: "hsl(var(--light-gray))",
      GrayishBlue: "hsl(var(--grayish-blue))",
      DarkBlue: "hsl(var(--dark-blue))",
    },
    extend: {},
  },
  plugins: [],
};
