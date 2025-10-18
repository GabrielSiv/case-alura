import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        chakra: ["var(--font-chakra)", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#1CA7C8",
          soft: "#6CDCFF",
        },
        neutral: {
          white: "#FFFFFF",
          dark: "#284260",
          gray: "#6E859F",
          muted: "#9D9D9D",
        },
        accent: {
          purple: "#C1BCFF",
          purpleLight: "#DEB5FF",
          purpleStrong: "#DB73FF",
        },
        info: {
          yellow: "#FFDA58",
          pink: "#FFD9DD",
        },
      },
    },
  },
  plugins: [],
};
export default config;
