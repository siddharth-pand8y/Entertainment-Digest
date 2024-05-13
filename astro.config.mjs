import { defineConfig } from 'astro/config';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "hi",
    locales: ["hi", "en"],
    routing: {
      prefixDefaultLocale: true
    }
  },
  integrations: [icon()]
});