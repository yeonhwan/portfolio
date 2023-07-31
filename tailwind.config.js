/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundSize: {
        "400%": "400%",
      },
      backgroundImage: {
        portfolio_horizon: "url('/cards/portfolio-horizon.png')",
        crossout_horizon: "url('/cards/crossout-horizon.png')",
        indiego_horizon: "url('/cards/indiego-horizon.png')",
        mystck_horizon: "url('/cards/mystck-horizon.png')",
        portfolio_mobile: "url('/cards/portfolio-mobile.png')",
        crossout_mobile: "url('/cards/crossout-mobile.png')",
        indiego_mobile: "url('/cards/indiego-mobile.png')",
        mystck_mobile: "url('/cards/mystck-mobile.png')",
      },

      fontFamily: {
        suite: ["SUITE", "sans-serif"],
        nanum: ["NANUM", "serif"],
      },
      screens: {
        md: "900px",
        mobile: "380px",
      },
      animation: {
        ripple: "ripple 1.5s linear infinite",
      },
      keyframes: {
        ripple: {
          "0%": { opacity: 0, scale: "0%" },
          "50%": { opacity: 0.2 },
          "100%": { opacity: 0, scale: "2000%" },
        },
      },
      gridTemplateColumns: {
        skills: "repeat(auto-fill, minmax(45px, 55px))",
      },
    },
  },
  plugins: [],
  safelist: [
    "-translate-y-[0%]",
    "-translate-y-[50%]",
    "-translate-y-[100%]",
    "-translate-y-[150%]",
    "-translate-y-[200%]",
  ],
};
