/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        LightModeBackgroundMobile: "url('/src/assets/bg-mobile-light.jpg')",
        DarkModeBackgroundMobile: "url('/src/assets/bg-mobile-dark.jpg')",
        LightModeBackgroundDesktop: "url('/src/assets/bg-desktop-light.jpg')",
        DarkModeBackgroundDesktop: "url('/src/assets/bg-desktop-dark.jpg')",
      },
    },
  },
  plugins: [],
};
