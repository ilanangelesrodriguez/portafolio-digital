const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        NotoSans: ["Noto Sans", "sans-serif"],
        Solway: ["Solway", "serif"],
      },
      colors: {
        secondary: "#0a1741",
        tertiary: "#FFE9F7",
        primary: "#253d77",
      },
    },
  },
  plugins: [nextui()],
}
