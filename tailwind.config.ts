import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d9edff',
          500: '#1683f4',
          600: '#0668d8',
          700: '#064fa8',
          900: '#06245a'
        }
      },
      boxShadow: {
        soft: '0 24px 80px rgba(6, 36, 90, 0.14)'
      }
    }
  },
  plugins: []
};

export default config;
