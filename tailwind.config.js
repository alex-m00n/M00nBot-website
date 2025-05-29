/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'spotlight': 'spotlight 2s ease-in-out infinite',
      },
      keyframes: {
        spotlight: {
          '0%': { transform: 'translate(-50%, -50%) translate(0, 0)' },
          '50%': { transform: 'translate(-50%, -50%) translate(100px, 100px)' },
          '100%': { transform: 'translate(-50%, -50%) translate(0, 0)' },
        },
      },
    },
  },
  plugins: [],
} 