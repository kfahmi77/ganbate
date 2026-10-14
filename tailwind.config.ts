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
        paper: "#F7F1E8",
        ink: {
          DEFAULT: "#26211E",
          light: "#6E6660",
          faint: "#A39990",
        },
        hairline: "#D9CEBE",
        terracotta: {
          DEFAULT: "#B85D36",
          soft: "#D48B69",
        },
        night: {
          DEFAULT: "#1C1715",
          surface: "#251F1C",
        },
        cream: {
          DEFAULT: "#F5EFE6",
          faint: "#EFE8DC",
        },
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
