import fluid, { extract } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: {
    files: ["./src/**/*.{html,js, wtf}"],
    extract: {
      wtf: (content) => {
        return content.match(/[^<>"'`\s]*/g);
      },
    },
  },
  daisyui: {
    themes: ["light", "dark"],
  },
  theme: {
    extend: {
      keyframes: {
        appear: {
          from: {
            opacity: "0",
            scale: "0.5",
          },
          to: {
            opacity: "1",
            scale: "1",
          },
        },
      },
      animation: {
        appear: "appear 3s ease-in-out forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui"), fluid],
};
