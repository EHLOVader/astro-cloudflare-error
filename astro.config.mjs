import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// if in production we need a base path for the gitlab pages
const base = process.env.NODE_ENV === 'production' ? '/astro-cloudflare-error' : '/';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],

  // GitLab Pages requires exposed files to be located in a folder called "static".
  // So we're instructing Astro to put the static build output in a folder of that name.
  outDir: 'public',

  // The folder name Astro uses for static files (`static`) is already reserved
  // for the build output. So in deviation from the defaults we're using a folder
  // called `static` instead.
  publicDir: 'static',

  // GitLab pages are served from a directory not the root of the domain.
  base: base

  site: 'https://ehlovader.github.io',

});