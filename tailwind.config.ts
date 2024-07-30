import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'top-only': '0px -4px 6px 3px rgba(99, 0, 199, 0.15)',
        'top-grey': '0px 0px 40px 0px rgba(0, 0, 0, 0.05)'
      },
      colors: {
        "alert-red":"#D7000D",
        "normal-text":"#161616",
        "custom-purple":"#41057E",
        "herb-light-purple":"#41057E12",
        "custom-grey":"#6D6D6D",
        "custom-black":"#0D0D0D",
        "custom-pink":"#F2EDF6",
        "custom-border-grey":"#00000012",
      },
      screens: {
        '875px': '875px', // Define custom breakpoint
        '493px':'493px',
        '550px':'550px',
        '360px':'360px',
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
