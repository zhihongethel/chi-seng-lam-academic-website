import { defineConfig } from 'astro/config';

const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site: process.env.SITE_URL || 'https://example.com',
  base,
  output: 'static',
  trailingSlash: 'always',
  vite: {
    server: {
      allowedHosts: ['.lhr.life']
    }
  },
  build: {
    format: 'directory'
  }
});
