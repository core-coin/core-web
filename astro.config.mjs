// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Core Blockchain",
      components: {
        PageFrame: "./src/components/Docs/PageFrame.tsx",
        PageSidebar: "./src/components/Docs/PageSidebar.astro",
        Sidebar: "./src/components/Docs/Sidebar.tsx",
        Header: "./src/components/Docs/CustomHeader.astro",
      },
      sidebar: [
        {
          label: "Getting Started",
          autogenerate: {
            directory: "docs",
          },
        },
      ],
    }),
    react(),
    tailwind(),
  ],
});
