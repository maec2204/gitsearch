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
        electric: '#0079ff',
        newGray: '#697c9a',
        darkSky: '#4b6a9b',
        darkBlue: '#2b3442',
        lightBg: '#f6f8ff',
        light: '#fefefe',
        white: '#ffffff',
        dark: '#141d2f',
        semiDark: '#1e2a47',
        error: '#f74646',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'gradient-light': 'linear-gradient(45deg, #FFFFFF, #FFFFFF)',
        'gradient-dark': 'linear-gradient(45deg, #0D1117, #161B22)',
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
