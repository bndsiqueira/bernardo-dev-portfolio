export default defineConfig({
  plugins: [react()],
  base: './', // necessário para funcionar em Hostinger
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/index.js`,
        chunkFileNames: `assets/chunk.js`,
        assetFileNames: `assets/[name].[ext]`,
      }
    }
  }
})
