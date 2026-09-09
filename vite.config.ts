import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { getPagesBase } from './src/config/pages-base.ts'

export default defineConfig({
  base: getPagesBase(process.env),
  plugins: [react()],
})
