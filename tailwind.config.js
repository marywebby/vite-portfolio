/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'starry-sky': 'linear-gradient(to right, black, rgb(12, 12, 81) 100%)',
      },
      fontFamily: {
        catamaran: ['Catamaran', 'sans-serif'],
        noto: ['Noto Sans', 'sans-serif']
      },
      colors: {
        'white': {
          75: '#E2E8F0',
        },
      },
    },
  },
  corePlugins: {
    preflight: false, // Disable Tailwind's base styles if you need complete control
  },
  plugins: [],
}





