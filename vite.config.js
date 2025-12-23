import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  theme: {
    extend: {
      colors: {
        accent: "var(--color-accent)",
        accentHover: "var(--color-accent-hover)",
        bg: "var(--color-bg)",
        bgMuted: "var(--color-bg-muted)",
        border: "var(--color-border)",
        text: "var(--color-text)",
        textMuted: "var(--color-text-muted)",
      },
    },
  },
  content: ["./index.html", "./src/**/*.{js,jsx}"],

})

