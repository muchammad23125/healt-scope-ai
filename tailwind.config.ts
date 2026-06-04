import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#0F766E",
        secondary: "#14B8A6",
        danger: "#DC2626",
        warning: "#F59E0B",
        success: "#16A34A",
        background: "#F8FAFC",
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.06)",
      },

      borderRadius: {
        xl2: "1.25rem",
      }
    },
  },

  plugins: [],
};

export default config;