/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Ensure index.html is included
    "./src/**/*.{js,jsx,ts,tsx}", // Match all source files
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ["Lora", "serif"], // Add 'Lora' as a custom font family
      },
    },
  },
  plugins: [],
};
