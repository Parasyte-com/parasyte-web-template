import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // ✅ This ensures all asset paths are relative, works on S3
  plugins: [react()]
})

