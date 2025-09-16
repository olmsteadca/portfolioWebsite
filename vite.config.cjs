const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react')
const path = require('path')

module.exports = defineConfig({
  plugins: [react()],
  /*if running locally, remove the base config*/
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '$': path.resolve(__dirname, './src/pages'),
        },
  },
})
