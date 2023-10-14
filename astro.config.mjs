import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://azhar1038.github.io",
  base: "/astro-demo-learn",
  integrations: [preact()]
});