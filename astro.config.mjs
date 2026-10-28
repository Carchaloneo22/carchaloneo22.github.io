// @ts-check
import { defineConfig } from 'astro/config';

// Publicado como sitio de usuario de GitHub Pages: https://carchaloneo22.github.io
// Si usas un repositorio con otro nombre (por ejemplo "portafolio"), añade:  base: '/portafolio'
export default defineConfig({
  site: 'https://carchaloneo22.github.io',
  build: {
    // Carpeta sin guion bajo para que GitHub Pages la sirva aunque use Jekyll.
    assets: 'assets',
  },
});
