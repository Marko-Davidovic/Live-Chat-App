/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#64B5F6',     // Light blue for primary actions
          DEFAULT: '#2196F3',   // Default blue for primary actions
          dark: '#1976D2',      // Dark blue for primary actions
        },
        secondary: {
          light: '#81C784',     // Light green for secondary actions
          DEFAULT: '#4CAF50',   // Default green for secondary actions
          dark: '#388E3C',      // Dark green for secondary actions
        },
        accent: {
          light: '#FFD54F',     // Light yellow for accent
          DEFAULT: '#FFC107',   // Default yellow for accent
          dark: '#FFA000',      // Dark yellow for accent
        },
        chatBubble: {
          sender: {
            DEFAULT: '#E0E0E0', // Gray for sender's chat bubble
          },
          receiver: {
            DEFAULT: '#4CAF50', // Green for receiver's chat bubble
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
}