import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
=======
  base: "/Isabella-Alexis-Portfolio/",
>>>>>>> 5dd68477 (Initial commit of correct website)
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
