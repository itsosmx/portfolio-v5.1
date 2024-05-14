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
        "glass-100": "rgba(255, 255, 255, 0.1)",
        "glass-200": "rgba(255, 255, 255, 0.2)",
        "glass-300": "rgba(255, 255, 255, 0.3)",
        "glass-400": "rgba(255, 255, 255, 0.4)",
        "glass-500": "rgba(255, 255, 255, 0.5)",
        "background": "var(--background)",
        "text": "var(--text)",
        "secondary": "var(--secondary)",
        "accent": "var(--accent)",
      },
      fontFamily: {
        'main': ['var(--font-main)'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          form: {
            backgroundPosition: "0 0"
          },
          to: {
            backgroundPosition: "-200% 0"
          }
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
