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
        "bg-primary": "var(--bg-primary)",
        "bg-secondary": "var(--bg-secondary)",
        "bg-tertiary": "var(--bg-tertiary)",
        "font-primary": "var(--font-primary)",
        "font-secondary": "var(--font-secondary)",
        "button-primary": "var(--button-primary)",
        "button-secondary": "var(--button-secondary)",
      },
      fontFamily: {
        Anton: ["Anton", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
