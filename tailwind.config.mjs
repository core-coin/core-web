/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: "#00FF6F",
        "gray-888": "#888888",
      },
      transitionTimingFunction: {
        "cubic-menu": "cubic-bezier(0.25, 0.8, 0.25, 1)",
      },
      transitionDuration: {
        400: "0.4s",
      },
    },
  },
  plugins: [],
};
