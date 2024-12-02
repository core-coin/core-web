/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontWeight: {
      thin: 100,
      regular: 300,
      medium: 500,
      bold: 700,
      black: 900,
    },
    extend: {
      colors: {
        brand: "#00FF6F",
        "brand-100": "#A8E87B",
        "gray-888": "#888888",
      },
      transitionTimingFunction: {
        "cubic-menu": "cubic-bezier(0.25, 0.8, 0.25, 1)",
      },
      transitionDuration: {
        400: "0.4s",
      },
      fontSize: {
        xxs: "0.625rem",
      },
      letterSpacing: {
        third: "0.33rem",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".bg-clip-text": {
          "-webkit-background-clip": "text",
        },
        ".text-transparent": {
          "-webkit-text-fill-color": "transparent",
        },
      });
    },
  ],
};
