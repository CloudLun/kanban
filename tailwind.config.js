/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xl: "24px",
        lg: "18px",
        md: "15px",
        sm: "12px",
      },
      fontFamily: {
        jarkata: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        black: "#000112",
        white: "#FFFFFF",
        purple: {
          hover: "#A8A4FF",
          main: "#635FC7",
        },
        red: {
          main: "#EA5555",
          hover: "#FF9898",
        },
        line: {
          dark: "#3E3F4E",
          light: "#E4EBFA",
        },
        grey: {
          veryDark: "#20212C",
          dark: "#2B2C37",
          medium: "#828FA3",
          light: "#F4F7FD",
        },
        shadow:"#364E7E"
      },
    },
  },
  plugins: [],
};
