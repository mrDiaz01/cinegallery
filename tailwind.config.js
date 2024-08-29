module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkbg: "#1D293B",
        //modify already existing shades of a color
        blue: {
          850: "",
        },
      },
    },
  },
  plugins: [],
};
