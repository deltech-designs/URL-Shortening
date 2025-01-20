/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      padding: "4rem",
    },
    extend: {
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        darkViolet: "hsl(257, 27%, 26%)",
        red: "hsl(0, 87%, 67%)",
        grayishBlue: "hsl(257, 7%, 63%)",
        Gary: "hsl(0, 0%, 75%)",
        veryDarkBlue: "hsl(255, 11%, 22%)",
        veryDark: "hsl(260, 8%, 14%)",
      },
    },
  },
  plugins: [],
};
