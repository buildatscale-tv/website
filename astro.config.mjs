// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';

// Load environment variables from .env files
const env = loadEnv(process.env.NODE_ENV || '', process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    },

    imageService: "cloudflare"
  }),
  site: 'https://buildatscale.tv',
  vite: {
    define: {
      // Make environment variables available at build time
      // In production, these should be set via CI/CD environment variables
      'import.meta.env.YOUTUBE_API_KEY': JSON.stringify(
        env.YOUTUBE_API_KEY || process.env.YOUTUBE_API_KEY
      )
    }
  }
});
