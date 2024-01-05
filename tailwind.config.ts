import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#ecf0f1',
        iceBlue: '#a9cce3',
        nimbusGray: '#bdc3c7',
        snowGray: '#7f8c8d',
        gold: '#f39c12',
        yellow: '#f1c40f',
        black: '#2c3e50',
        blue: '#34495e',
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
} satisfies Config

