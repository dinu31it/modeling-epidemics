/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nytimes: ["NewYorkTimes", "serif"], // Add your custom font
      },
    },
  },
  plugins: [],
}

