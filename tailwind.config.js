// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{json,md}",
  ],
  theme: {
    fontWeight: {
      thin: 100,
      light: 300,
      normal: 400,
      bold: 700,
      black: 900,
    },
    extend: {
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
      },
      borderWidth: {
        3: "3px",
      },
      colors: {
        kg: {
          yellow: "#fdc300",
          sienna: "#ab632d",
          brown: "#4b1f0d",
          green: "#009594",
          purple: "#8b1878",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.kg.brown"),
            "--tw-prose-headings": theme("colors.kg.brown"),
            "line-height": "1.5",
            strong: {
              color: "inherit",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
