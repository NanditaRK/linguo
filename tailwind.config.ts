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
        
      },
      colors: {
        "main": "#04f9c1",
      },
      fontFamily: {
        "sans": ['"Work Sans"', 'sans-serif'],
      },
      boxShadow: {
        "boxblur": '0px 0px 80px 30px'
      }
    },
  },
  plugins: [require('daisyui'),],
};
export default config;
