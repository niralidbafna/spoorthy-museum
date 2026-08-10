import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F5F1E8',
        surface: '#FFFFFF',
        text: '#242424',
        dark: '#151515',
        muted: '#77736B',
        accent: '#A8894A',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(21, 21, 21, 0.06)',
      },
      fontFamily: {
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
