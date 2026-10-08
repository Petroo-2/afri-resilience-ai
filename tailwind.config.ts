import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#071426',
        'navy-2': '#0b2037',
        blue: '#48b7ef',
        cyan: '#68e0db',
        muted: '#6d7d90',
        line: '#dce5ed',
        bg: '#f5f8fb',
        danger: '#d95757',
        success: '#2b9b75',
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
