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
      screens: {
        lg: "1400px",
      },
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
      keyframes: {
        "scroll-x": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(calc(-100% - 20px))",
          },
        },
        pulse: {
          "40%": {
            opacity: 1,
            transform: "scale(1)",
          },
          "100%": {
            opacity: 0,
            transform: "scale(2.2)",
          },
        },
      },
      animation: {
        "scroll-x": "scroll-x 10s linear infinite",
        pulse: "pulse 3s linear infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities, matchUtilities, theme }) {
      addUtilities({
        ".bg-clip-text": {
          "-webkit-background-clip": "text",
        },
        ".text-transparent": {
          "-webkit-text-fill-color": "transparent",
        },
        ".animation-reverse": {
          "animation-direction": "reverse",
        },
        ".gradient-mask": {
          "mask-image":
            "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
        },
        ".magic-gradient-mask": {
          mask: "radial-gradient(100% 75% at 50% 71.1%,#000000 31.012457770270263%,rgba(0,0,0,0) 89.08009572072073%) add",
        },
      });
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
          "animation-duration": (value) => {
            return {
              "animation-duration": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        },
      );
    },
  ],
};
