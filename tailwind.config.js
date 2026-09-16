/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // Custom brand palette so we're not styling with raw Tailwind defaults everywhere.
      colors: {
        ink: "#1B1F24",
        muted: "#5B6472",
        surface: "#FFFFFF",
        base: "#F4F5F7",
        line: "#E4E7EB",
        brand: {
          DEFAULT: "#0F7C6C",
          dark: "#0B5C50",
        },
        available: "#1E8E5A",
        busy: "#C0392B",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
