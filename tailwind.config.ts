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
        navy: {
          50:  "#e8edf5",
          100: "#c5d1e8",
          200: "#9fb2d9",
          300: "#7893ca",
          400: "#5a7abf",
          500: "#3b62b4",
          600: "#2d509a",
          700: "#1e3a7a",
          800: "#142960",
          900: "#0d1e4a",
          950: "#080f2a",
        },
        brand: {
          blue:  "#1a56db",
          cyan:  "#06b6d4",
          indigo:"#4f46e5",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(26,86,219,0.04) 1px, transparent 1px), linear-gradient(to right, rgba(26,86,219,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "32px 32px",
      },
    },
  },
  plugins: [],
};

export default config;
