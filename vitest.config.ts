import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { config } from 'dotenv'
 
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    env: {
      ...config({ path: ".env.local" }).parsed, 
    } 
  }
})