/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        stem: {
          espresso: "#331b0f",
          taupe: "#d08c81",
          blush: "#e8c5c1",
          pearl: "#f5f2f0",
          sand: "#fbfaf9",
          dark: "#202020",
          muted: "#4b4b4b",
          border: "#e8e4e1",
          surface: "#f7f5f3",
        },
      },
    },
  },
  plugins: [],
};
