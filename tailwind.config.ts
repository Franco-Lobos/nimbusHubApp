import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  important: true,
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        themeWhite: '#ecf0f1',
        iceBlue: '#a9cce3',
        iceLightblue: '#C1DAEB',
        nimbusGray: '#bdc3c7',
        snowGray: '#7f8c8d',
        gold: '#f39c12',
        yellow: '#f1c40f',
        themeBlack: '#2c3e50',
        blue: '#34495e',
        pink: '#ffb8b8',

        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
} satisfies Config

