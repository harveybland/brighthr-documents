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
        backgroundMain: "#f6f6f6",
        textMain: "#6d7b91",
        borderMain: "#c9d5df",
      },
    },
  },
  plugins: [],
};
export default config;
