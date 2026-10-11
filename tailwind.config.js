/** @type {import('tailwindcss').Config} */
module.exports = {
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
          surface: "#f7f5f3"
        }
      },
      fontFamily: {
        metropolis: ["var(--font-metropolis)", "Metropolis", "sans-serif"],
        degular: ["var(--font-degular)", "Degular Demo", "sans-serif"],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
