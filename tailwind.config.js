/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "yellow-10": "rgb(253, 245, 4)",
      },
      backgroundImage: {
        one: "url('/Images/landing1.png')",
        two: "url('/Images/landing2.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
