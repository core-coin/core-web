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
        Sidebar: "./src/components/Docs/Sidebar.astro",
        Header: "./src/components/Docs/CustomHeader.astro",
        Pagination: "./src/components/Docs/Pagination.tsx",
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
