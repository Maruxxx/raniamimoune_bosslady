/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: 
        {
          gold: "#DDB464",
          lightGold: "#EAD1A2",
          firstGold: "#E2C88C",
          secondGold: "#FFE9AC",
          thirdGold: "#E5C57D",
          firstSilver: "#A8A8A8",
          secondSilver: "#FFFFFF",
          thirdSilver: "#D0D0D0"
        }
        ,
        fontFamily: {
          "jannaBold" : "JannaBold",
          "jannaRegular" : "JannaRegular",
          "roboto" : "RobotoSerif",
          "signature" : "Arslan"
        },
    },
  },
  daisyui: {
    themes: ["light", "cmyk"],
  },
  plugins: [require("daisyui")],
}

