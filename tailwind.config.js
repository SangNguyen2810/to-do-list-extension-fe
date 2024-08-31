/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {
      colors: {
        // Light theme colors
        primary: '#1D4ED8', // Light primary color
        secondary: '#F97316', // Light secondary color
        accent: '#3B82F6', // Light accent color
        background: '#F3F4F6', // Light background color
        text: '#111827', // Light text color

        // Dark theme colors
        'dark-primary': '#0F172A', // Dark primary color
        'dark-secondary': '#F97316', // Dark secondary color
        'dark-accent': '#3B82F6', // Dark accent color
        'dark-background': '#1F2937', // Dark background color
        'dark-text': '#F9FAFB', // Dark text color
      },
    },
  },
  plugins: [],
  darkMode: 'class', // or 'media' or false
}