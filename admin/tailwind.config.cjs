/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a001f",
        secondary: "#6c757d",
        success: "#198754",
        info: "#0dcaf0",
        warning: "#ffc107",
        danger: "#dc3545",
        light: "#f8f9fa",
        dark: "#212529",
      },
    },
  },
  plugins: [],
};
