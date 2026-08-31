// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        royalBlue: {
          DEFAULT: '#1e3a8a', // Deep Royal Blue
          light: '#2563eb',
          dark: '#172554',
        },
        gold: {
          DEFAULT: '#d4af37', // Classic Gold
          light: '#fcd34d',
          dark: '#b45309',
        },
      },
    },
  },
  plugins: [],
};
export default config;