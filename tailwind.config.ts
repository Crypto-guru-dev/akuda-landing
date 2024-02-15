import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gray: {
          100: "#767680",
          200: "#1c1e30",
          300: "#191a2b",
          400: "#191925",
          500: "#151422",
          600: "#141321",
          700: "rgba(255, 255, 255, 0.41)",
          800: "rgba(255, 255, 255, 0.6)",
          900: "rgba(22, 25, 46, 0.8)",
          1000: "rgba(255, 255, 255, 0.05)",
          1100: "rgba(255, 255, 255, 0.32)",
        },
        white: "#fff",
        aquamarine: "#3decbe",
        darkslategray: "#255555",
        darkgray: "#97969c",
        slategray: "#4f5573",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        roboto: "Roboto",
      },
      borderRadius: {
        "2xl": "25.5px",
        "46xl-9": "65.9px",
        "4xs-6": "8.6px",
        "8xs-3": "4.3px",
      },
    },
  },
  plugins: [],
};
export default config;
