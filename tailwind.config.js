/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        LightModeBackgroundMobile: "url('/assets/bg-mobile-light.jpg')",
        DarkModeBackgroundMobile: "url('/assets/bg-mobile-dark.jpg')",
        LightModeBackgroundDesktop: "url('/assets/bg-desktop-light.jpg')",
        DarkModeBackgroundDesktop: "url('/assets/bg-desktop-dark.jpg')",
      },
    },
  },
  plugins: [],
};
