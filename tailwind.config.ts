import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#f8fafc",
        panel: "#ffffff",
        ink: "#0f172a",
        sub: "#475569",
        border: "#e2e8f0"
      },
      boxShadow: {
        soft: "0 6px 24px rgba(2,8,23,.06)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: []
} satisfies Config;
