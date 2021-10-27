module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        custom: "70%",
        medium: "80%",
        large: "92%"
      },
      height: {
        custom: "94vh",
        big: "500vh"
      },
      colors: {
        custom: "#272727",
        overlay: "rgba(0, 0, 0, 0.5)",
        
      },
      flex: {
        20: "0 1 18%",
        25: "0 1 22%",
        30: "0 1 30%",
        50: "0 1 47.5%",
        100: "0 1 100%"
      },
      inset: {
        custom: "50%"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
