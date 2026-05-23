import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/portafolio/', // Crucial para que los estilos y JS carguen en GitHub Pages
  plugins: [
    tailwindcss(),
  ],
})