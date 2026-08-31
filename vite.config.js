import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

const root = fileURLToPath(new URL('./www', import.meta.url))
const resolveFromRoot = (path) => fileURLToPath(new URL(path, import.meta.url))

export default defineConfig({
  root,
  publicDir: false,
  build: {
    outDir: resolveFromRoot('./dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolveFromRoot('./www/index.html'),
        'legacy-status/index': resolveFromRoot('./www/legacy-status/index.html'),
      },
    },
  },
})
