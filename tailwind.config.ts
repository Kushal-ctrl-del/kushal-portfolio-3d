import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deepSpace: "#0B0F1A",
        stellarWhite: "#F8FAFC",
        moonGray: "#9CA3AF",
        saturnGold: "#F6D9A7",
      },
      fontFamily: {
        display: ["var(--font-fraunces)"],
        sans: ["var(--font-hanken)"],
      },
    },
  },
  plugins: [],
};
export default config;
