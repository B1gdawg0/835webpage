/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        "main-green":"#A1B88B",
        "title-thefigmagod-brown":"#72331D",
        "main-background":"#F8FFF8",
        "vanilla":"#F9F3EC"
      },
    },
  },
  plugins: [],
};
