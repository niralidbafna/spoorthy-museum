import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Dark "Our Little Universe" theme tokens
        background: '#090B10', // page background
        surface: '#11141B', // primary card/surface
        'surface-2': '#161A22', // secondary surface
        text: '#F3F0E8', // primary text (warm ivory)
        dark: '#F3F0E8', // used by existing `text-dark` classes
        'text-secondary': '#A0A3AC', // secondary text
        muted: '#70747F', // muted text
        border: 'rgba(255,255,255,0.12)',
        accent: '#F3EDE1', // warm champagne accent
        hover: '#171B24',
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
