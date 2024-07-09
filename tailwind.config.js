/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: { sans: "TKT-herma, Roboto Mono", mono: "Roboto Mono" },

    extend: {
      backgroundImage: {
        sharpbgg: "url('/background.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      screens: {
        "2xl": "1200px",
      },
    },
  },
  plugins: [],
};
