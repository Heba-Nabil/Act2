/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        boldFont: ["var(--font-boldFont)"],
        regFont: ["var(--font-regFont)"],
        SemiboldFont: ["var(--font-SemiboldFont)"]
      },
      colors: {
        primary: "#2A5C3D",
        secondary: "#B3B3B3",
        mid: "#268552",
      },
    },
  },
  plugins: [],
};
