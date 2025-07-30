/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', 'ui-sans-serif', 'system-ui'],
        display: ['"Quicksand"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      colors: {
        primary: '#4f46e5',        // Indigo
        secondary: '#6366f1',      // Soft Indigo
        accent: '#f59e0b',         // Amber
        soft: '#f3f4f6',           // Light gray
        dark: '#111827',           // Very dark gray
        info: '#0ea5e9',           // Sky
        success: '#10b981',        // Emerald
        warning: '#facc15',        // Yellow
        danger: '#ef4444',         // Red
      },
      boxShadow: {
        card: '0 4px 12px rgba(0, 0, 0, 0.1)',
        hover: '0 6px 20px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      animation: {
        fade: 'fadeIn 0.5s ease-in-out',
        bounceSlow: 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
