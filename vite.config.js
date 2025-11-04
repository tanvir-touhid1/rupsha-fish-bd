import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allows external connections
    port: 5173,      // You can change this if needed
    strictPort: true // Optional: ensures the port is always 5173
  }
})