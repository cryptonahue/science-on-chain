import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
// import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // adapter: vercel({
  //   functionPerRoute: false,
  //   includeFiles: []
  // }),
  integrations: [
    tailwind(),
    react(),
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'pt'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    server: {
      host: true,
      allowedHosts: ['.sslip.io', '.traefik.me', 'scienceonchain.org']
    },
    preview: {
      host: true,
      allowedHosts: ['.sslip.io', '.traefik.me', 'scienceonchain.org']
    }
  }
});
