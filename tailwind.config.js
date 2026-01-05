/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#001a4d',
        secondary: '#d4af37',
        accent: '#000000',
        light: '#ffffff',
        border: '#cccccc',
      },
    },
  },
  plugins: [],
};
