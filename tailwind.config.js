/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      colors:{
        snow: '#FFFAFA',
        darkSlateGray:'#2F4F4F',
        paleGreen:'#98FF98',
        turquoise: '#40E0D0', 
        blueViolet :'#6A0DAD',
        primary: {
          light: '#8ecae6',
          DEFAULT: '#219ebc',
          dark: '#023047',
        },
        secondary: {
          light: '#ffb703',
          DEFAULT: '#fb8500',
          dark: '#e63946',
        },
        neutral: {
          light: '#e0fbfc',
          DEFAULT: '#98c1d9',
          dark: '#3d5a80',
        },
        accent: {
          blue: '#3a86ff',
          pink: '#ff006e',
          yellow: '#ffbe0b',
          green: '#06d6a0',
          purple: '#8338ec',
        },
        muted: {
          light: '#edf2f4',
          DEFAULT: '#8d99ae',
          dark: '#2b2d42',
        },
        complementary: {
          teal: '#2a9d8f',
          coral: '#f4a261',
          sand: '#e9c46a',
          brown: '#264653',
        },
        pastel: {
          lavender: '#e0bbe4',
          mint: '#d3f8e2',
          peach: '#ffcbf2',
          sky: '#a0c4ff',
          lemon: '#fdffb6',
        },
  
        
        warm: {
          red: '#e63946',
          orange: '#f77f00',
          yellow: '#fcbf49',
          brown: '#bc6c25',
          terracotta: '#e07a5f',
        },
        cool: {
          teal: '#3d5a80',
          cyan: '#219ebc',
          navy: '#1b263b',
          violet: '#5a189a',
          indigo: '#4a4e69',
        },
        earthy: {
          forest: '#264653',
          olive: '#606c38',
          moss: '#9b9b7a',
          clay: '#b08968',
          stone: '#6c757d',
        },
        vibrant: {
          fuchsia: '#ff00ff',
          lime: '#32cd32',
          turquoise: '#40e0d0',
          gold: '#ffd700',
          crimson: '#dc143c',
        },
        shades: {
          white: '#ffffff',
          lightGray: '#f8f9fa',
          gray: '#adb5bd',
          darkGray: '#495057',
          black: '#000000',
        },
        nature: {
          skyBlue: '#87ceeb',
          grassGreen: '#7cfc00',
          sunsetOrange: '#ff4500',
          oceanBlue: '#0077be',
          sandBeige: '#f4a460',
        },
      },

      backgroundImage:{
        'bg-rick-and-morty':"url('../assets/rick-and-morty.gif')"
      }
    },
  },
  plugins: [],
}