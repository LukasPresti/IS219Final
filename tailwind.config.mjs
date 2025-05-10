/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        heroPrimary: '#075E26',
        heroAccent: '#047857',
        heroDark: '#0F172A',
        heroLight: '#F1F5F9',
      },
      boxShadow: {
        '2xl': '0 10px 25px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
