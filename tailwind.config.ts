import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: {
          DEFAULT: '#F19B2B',
          50: '#FCECD7',
          100: '#FBE3C4',
          200: '#F9D19E',
          300: '#F6BF78',
          400: '#F4AD51',
          500: '#F19B2B',
          600: '#D67F0E',
          700: '#A1600B',
          800: '#6D4107',
          900: '#382104',
          950: '#1E1202'
        },
        secondary1: "#4371E9",
        secondary2: "#FF6161",
        secondary3: "#BD7B00",
        n0: "#FFFFFF",
        n10: "#FAFAFB",
        n20: "#F5F6F7",
        n30: "#EBECEF",
        n40: "#DFE0E4",
        n50: "#C1C4CC",
        n60: "#B2B6BF",
        n70: "#A6AAB5",
        n80: "#979CA8",
        n90: "#888E9C",
        n100: "#798090",
        n200: "#6A7283",
        n300: "#5B6477",
        n400: "#4F586D",
        n500: "#404A60",
        n600: "#343E56",
        n700: "#222E48",
        n800: "#13203B",
        n900: "#0B1323",
        bg3: "#23262B",
        bg4: "#1D1E24",
        lightbg1: "#F4FBF7",
        lightbg2: "#F6F8FE"
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
        xxxl: "1600px",
        "4xl": "1800px",
        "5xl": "1920px",
        "6xl": "2044px",
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      }
    },
  },
  plugins: [],
}
export default config
